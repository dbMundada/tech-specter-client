import { useEffect, useState } from "react";

const useCourseDetails = serviceId => {
  const [course, setCourse] = useState({});

  useEffect(() => {
    const url = `https://tech-specter-server.vercel.app/course/${serviceId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [serviceId]);
  return [course]
};

export default useCourseDetails;
