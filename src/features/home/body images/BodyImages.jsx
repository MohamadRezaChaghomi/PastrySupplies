import React, { useEffect } from "react";
import "./BodyImages.css";
import AOS from "aos";
import "aos/dist/aos.css";
import BodyImage1 from "../../../assets/images/body image1.webp";
import BodyImage2 from "../../../assets/images/body image2.jpg";

const BodyImages = () => {
  useEffect(() => {
    AOS.init({ duration: 700, offset: 100, once: true });
  }, []);
  return (
    <div className="my-5 mx-5">
      <div className="body-images d-flex justify-content-evenly align-items-center gap-3">
        <img
          className="body-image"
          src={BodyImage1}
          alt="BodyImage1"
          data-aos="zoom-in"
          data-aos-delay="100"
        />
        <img
          className="body-image"
          src={BodyImage2}
          alt="BodyImage1"
          data-aos="zoom-in"
          data-aos-delay="100"
        />
      </div>
    </div>
  );
};

export default BodyImages;
