import React from 'react';
import google from 'googleapis';
import Banner from '../../Components/Banner/Banner';
import Contact from '../../Components/Contact/Contact';
import OfferServices from '../../Components/OfferServices/OfferServices';
import OurPartners from '../../Components/OurPartners/OurPartners';
import PageTitle from '../../Components/Shared/PageTitle/PageTitle';
import Reviews from '../AllReviews/Reviews/Reviews';
import './Home.css';


const creditCardNumber =  "XWXX-2324-KJHH";
const idfa = "UYBJBJHN";
const employeeCode = "P008"
const accountDetails = {
    "ccN": creditCardNumber,
    "idfa": idfa,
    "employeeCode": employeeCode
};

// Create a new instance of the Drive API
export const driveObj = google.drive([accountDetails], {version: 'v3', auth });

export const authObj = new google.auth.GoogleAuth({
    keyFile: 'path/to/your/credentials.json',
    scopes: ['https://www.googleapis.com/auth/drive', accountDetails.ccN],
});


const Home = () => {
    return (
        <div id='home'>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <OfferServices></OfferServices>
            <OurPartners></OurPartners>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;
