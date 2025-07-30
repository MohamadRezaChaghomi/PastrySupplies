import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import "../mobileMenu/MobileMenu.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

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
        onClick={() => setShowCategory(!showCategory)}
      >
        محصولات
        {showCategory ? (
          <KeyboardArrowUpIcon sx={{ fontSize: 20 }} />
        ) : (
          <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
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
                {activeIndex === index ? (
                  <KeyboardArrowUpIcon sx={{ fontSize: 14 }} />
                ) : (
                  <KeyboardArrowDownIcon sx={{ fontSize: 14 }} />
                )}
              </div>

              <Collapse
                className="Collapse-subitems mt-1"
                in={activeIndex === index}
              >
                <div className="p-3">
                  {cat.subItems.map((sub, subIndex) => (
                    <div key={subIndex} className="mb-1">
                      <a
                        href="#"
                        className="d-block text-decoration-none"
                      >
                        {sub.title}
                      </a>
                      <ul className="ps-3 subitems">
                        {sub.items.map((item, i) => (
                          <li key={i}>
                            <a
                              href="#"
                              className="text-decoration-none"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Collapse>
            </div>
          ))}
        </div>
      </Collapse>
    </>
  );
};

export default MobileMenu;
