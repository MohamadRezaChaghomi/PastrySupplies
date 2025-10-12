import React from "react";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import HomeImage1 from "../../../assets/images/home-image.webp"
import "./IntroSection.css";

const IntroSection = () => {
  return (
    <section className="shadiland-hero">
      <div className="shadiland-hero__content">
        <div className="d-flex flex-column align-items-center gap-lg-5 gap-md-4 gap-sm-4">
          <h2 className="shadiland-hero__text">
            با شادی‌لند
            <br />
            جشنت رو شادتر کن!
          </h2>

          <div className="shadiland-hero__buttons">
            <button className="hero-btn">
              مشاهده محصولات
              <StoreOutlinedIcon
                sx={{ marginRight: "8px", fontSize: "34px" }}
              />
            </button>

            <button className="hero-btn">
              سفارش بادکنک‌آرایی
              <CelebrationOutlinedIcon
                sx={{ marginRight: "8px", fontSize: "34px" }}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="shadiland-hero__image">
        <img
          src= {HomeImage1}
          alt="Birthday Cake"
        />
      </div>
    </section>
  );
};

export default IntroSection;
