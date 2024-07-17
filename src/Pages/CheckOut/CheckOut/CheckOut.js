import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import PageTitle from "../../../Components/Shared/PageTitle/PageTitle";
import auth from "../../../firebase.init";
import useCourseDetails from "../../../hooks/useCourseDetails/useCourseDetails";
import "./CheckOut.css";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [course] = useCourseDetails(serviceId);
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  if(user){
    // console.log(user);
  }
  

  const handlePlaceOrder = event =>{
    event.preventDefault();
    const order = {
        email: user.email,
        service: course.name,
        serviceId: serviceId,
        image: course.image,
        price: course.price,
        description: course.description,
        phone: event.target.phone.value,
        status: "Pending"

    }
    axios.post('https://tech-specter.onrender.com/order', order)
        .then(res => {
            const {data}= res;
            if (data.insertedId) {
                toast('Your Order is Booked');
                event.target.reset();
                navigate('/dashboard/myOrders');
            }
            // console.log(res);
        })
  }

  return (
    <Container className="w-50 mx-auto">
      <PageTitle title="CheckOut"></PageTitle>
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Place Your Order</h3>
              <p>Fill in the data below.</p>
              <form onSubmit={handlePlaceOrder}>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={user.displayName}
                  required readOnly
                />
                
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={user.email}
                  placeholder="E-mail Address"
                  required readOnly
                />
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={course.name}
                  required readOnly
                />
                <input
                  className="form-control"
                  type="number"
                  name="phone"
                  autoComplete="off"
                  required
                  placeholder="01xxxxxxxxx"
                />
                <input id='submit' className="btn-danger fw-bold mt-3 w-50" value='Place Order' type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CheckOut;
