import React from "react";
import "./InfoNotice.css";

import supportIcon from "../../assets/images/24-hours-service.png";
import warrantyIcon from "../../assets/images/warranty.png";
import returnIcon from "../../assets/images/commercial.png";
import expressIcon from "../../assets/images/express-delivery (1).png";

const features = [
  {
    icon: supportIcon,
    alt: "پشتیبانی ۲۴ ساعته",
    text: "7 روز هفته، 24 ساعته",
  },
  {
    icon: returnIcon,
    alt: "ضمانت بازگشت",
    text: "7 روز ضمانت بازگشت کالا",
  },
  {
    icon: warrantyIcon,
    alt: "ضمانت اصالت کالا",
    text: "ضمانت اصالت کالا",
  },
  {
    icon: expressIcon,
    alt: "تحویل اکسپرس",
    text: "امکان تحویل اکسپرس",
  },
];

const InfoNotice = () => {
  return (
    <section className="features-section">
      {features.map((item, index) => (
        <div className="feature-box" key={index}>
          <img src={item.icon} alt={item.alt} />
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default InfoNotice;
