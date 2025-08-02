import React, { useState } from "react";
import "./MegaMenu.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const categories = [
  {
    title: "تم‌ها",
    subItems: [
      {
        title: "تم دخترانه",
        items: ["پرنسسی", "یونیکورن", "فروزن", "پرنسسی", "یونیکورن", "فروزن"],
      },
      {
        title: "تم پسرانه",
        items: [
          "ماشین‌ها",
          "مرد عنکبوتی",
          "بتمن",
          "پرنسسی",
          "یونیکورن",
          "فروزن",
        ],
      },
      {
        title: "تم دخترانه",
        items: ["پرنسسی", "یونیکورن", "فروزن", "پرنسسی", "یونیکورن", "فروزن"],
      },
      {
        title: "تم پسرانه",
        items: [
          "ماشین‌ها",
          "مرد عنکبوتی",
          "بتمن",
          "پرنسسی",
          "یونیکورن",
          "فروزن",
        ],
      },
      {
        title: "تم دخترانه",
        items: ["پرنسسی", "یونیکورن", "فروزن", "پرنسسی", "یونیکورن", "فروزن"],
      },
      {
        title: "تم پسرانه",
        items: [
          "ماشین‌ها",
          "مرد عنکبوتی",
          "بتمن",
          "پرنسسی",
          "یونیکورن",
          "فروزن",
        ],
      },
      {
        title: "تم دخترانه",
        items: ["پرنسسی", "یونیکورن", "فروزن", "پرنسسی", "یونیکورن", "فروزن"],
      },
      {
        title: "تم پسرانه",
        items: [
          "ماشین‌ها",
          "مرد عنکبوتی",
          "بتمن",
          "پرنسسی",
          "یونیکورن",
          "فروزن",
        ],
      },
      {
        title: "تم دخترانه",
        items: ["پرنسسی", "یونیکورن", "فروزن", "پرنسسی", "یونیکورن", "فروزن"],
      },
      {
        title: "تم پسرانه",
        items: [
          "ماشین‌ها",
          "مرد عنکبوتی",
          "بتمن",
          "پرنسسی",
          "یونیکورن",
          "فروزن",
        ],
      },
      {
        title: "تم دخترانه",
        items: ["پرنسسی", "یونیکورن", "فروزن", "پرنسسی", "یونیکورن", "فروزن"],
      },
      {
        title: "تم پسرانه",
        items: [
          "ماشین‌ها",
          "مرد عنکبوتی",
          "بتمن",
          "پرنسسی",
          "یونیکورن",
          "فروزن",
        ],
      },
    ],
  },
  {
    title: "لوازم تولد",
    subItems: [
      {
        title: "بادکنک",
        items: ["معمولی", "هلیومی"],
      },
      {
        title: "شمع تولد",
        items: ["شمع عدد", "شمع فانتزی", "پرنسسی", "یونیکورن", "فروزن"],
      },
      {
        title: "تم دخترانه",
        items: ["پرنسسی", "یونیکورن", "فروزن", "پرنسسی", "یونیکورن", "فروزن"],
      },
      {
        title: "تم پسرانه",
        items: [
          "ماشین‌ها",
          "مرد عنکبوتی",
          "بتمن",
          "پرنسسی",
          "یونیکورن",
          "فروزن",
        ],
      },
      {
        title: "تم دخترانه",
        items: ["پرنسسی", "یونیکورن", "فروزن", "پرنسسی", "یونیکورن", "فروزن"],
      },
      {
        title: "تم پسرانه",
        items: [
          "ماشین‌ها",
          "مرد عنکبوتی",
          "بتمن",
          "پرنسسی",
          "یونیکورن",
          "فروزن",
        ],
      },
    ],
  },
  {
    title: "تم‌ها",
    subItems: [
      {
        title: "تم دخترانه",
        items: ["پرنسسی", "یونیکورن", "فروزن", "پرنسسی", "یونیکورن", "فروزن"],
      },
      {
        title: "تم پسرانه",
        items: [
          "ماشین‌ها",
          "مرد عنکبوتی",
          "بتمن",
          "پرنسسی",
          "یونیکورن",
          "فروزن",
        ],
      },
    ],
  },
  {
    title: "لوازم تولد",
    subItems: [
      {
        title: "بادکنک",
        items: ["معمولی", "هلیومی"],
      },
      {
        title: "شمع تولد",
        items: ["شمع عدد", "شمع فانتزی", "پرنسسی", "یونیکورن", "فروزن"],
      },
    ],
  },
  {
    title: "تم‌ها",
    subItems: [
      {
        title: "تم دخترانه",
        items: ["پرنسسی", "یونیکورن", "فروزن", "پرنسسی", "یونیکورن", "فروزن"],
      },
      {
        title: "تم پسرانه",
        items: [
          "ماشین‌ها",
          "مرد عنکبوتی",
          "بتمن",
          "پرنسسی",
          "یونیکورن",
          "فروزن",
        ],
      },
    ],
  },
  {
    title: "لوازم تولد",
    subItems: [
      {
        title: "بادکنک",
        items: ["معمولی", "هلیومی"],
      },
      {
        title: "شمع تولد",
        items: ["شمع عدد", "شمع فانتزی", "پرنسسی", "یونیکورن", "فروزن"],
      },
    ],
  },
];

export default function MegaMenu({ show }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div className={`mega-menu-container ${show ? "show" : ""}`}>
      <div className="mega-menu">
        <div className="categories">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`category-item ${
                hoveredIndex === index ? "active" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <span className="category-label">
                {category.title}
                <KeyboardArrowLeftIcon />
              </span>
            </div>
          ))}
        </div>

        {/* زیرمنو ثابت که فقط محتوا تغییر می‌کند */}
        <div className="sub-menu two-level">
          {categories[hoveredIndex]?.subItems.map((section, secIdx) => (
            <div key={secIdx} className="sub-section">
              <div className="sub-section-title">
                <span>
                  <span style={{ marginLeft: "6px", color: "#FF7CA8" }}>|</span>
                  {section.title}
                </span>
              </div>
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="sub-item">
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
