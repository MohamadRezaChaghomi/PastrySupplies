import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import "../mobileMenu/MobileMenu.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const categories = [
  {
    title: "اموزش انواع کیک و شیرینی",
  },
  {
    title: "اموزش انواع دسر",
  },
  {
    title: "نکات خرید قالب مناسب",
  },
];

const MobileMenu = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSubItems = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div
        className="mobile-menu"
        onClick={() => setShowCategory((prev) => !prev)}
      >
        زنگ آموزش
        {showCategory ? (
          <KeyboardArrowUpIcon />
        ) : (
          <KeyboardArrowDownIcon />
        )}
      </div>

      <Collapse className="Collapse-title" in={showCategory}>
        <div className="ps-2">
          {categories.map((cat, index) => (
            <div key={index} className="mb-3">
              <div
                className="menu-title"
                onClick={() => toggleSubItems(index)}
              >
                {cat.title}
              </div>
            </div>
          ))}
        </div>
      </Collapse>
    </>
  );
};

export default MobileMenu;
