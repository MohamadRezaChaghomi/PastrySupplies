import React, { useState } from "react";
import "./MegaMenu.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const categories = [
  {
    title: "اموزش انواع کیک و شیرینی",
  },
  {
    title: "اموزش انواع دسر",
  },
  {
    title: "نکات خرید قالب مناسب",
  }
];

export default function MegaMenuEducation({ show }) {


  return (
    <div className={`mega-menu-container ${show ? "show" : ""}`}>
      <div className="mega-menu">
        <div className="categories">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-item"

            >
              <span className="category-label">
                {category.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
