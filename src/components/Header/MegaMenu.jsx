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
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`mega-menu-container ${show ? "show" : ""}`}>
      <div className="mega-menu">
        <div className="categories">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="category-label">
                {category.title}
                <KeyboardArrowLeftIcon />
              </span>

              {hoveredIndex === index && (
                <div className="sub-menu two-level">
                  {category.subItems.map((section, secIdx) => (
                    <div key={secIdx} className="sub-section">
                      <div className="sub-section-title">
                        <span>
                          <span style={{ marginLeft: "6px", color: "#FF7CA8" }}>
                            |
                          </span>
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
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
