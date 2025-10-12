// src/features/home/HomeCategories.jsx
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomeCategories.css";

import Cake from "../../../assets/images/cake.png";
import Candle from "../../../assets/images/candle.png";
import Garlands from "../../../assets/images/garlands.png";
import Firework from "../../../assets/images/firework.png";
import Confetti2 from "../../../assets/images/confetti2.png";
import Present from "../../../assets/images/present.png";
import Confetti from "../../../assets/images/confetti.png";
import Ballon from "../../../assets/images/balloon.png";
import Letter from "../../../assets/images/letter.png";

// آرایه دسته‌بندی‌ها
const categories = [
  { title: "تم تولد", color: "#FFD6DC", icon: Cake },
  { title: "شمع", color: "#FFF9C4", icon: Candle },
  { title: "تم مناسبتی", color: "#E8DEFF", icon: Garlands },
  { title: "آتش بازی", color: "#FF9B9B", icon: Firework },
  { title: "گیفت‌ها", color: "#D6EEFF", icon: Letter },
  { title: "بادکنک", color: "#E6F0FF", icon: Ballon },
  { title: "لوازم تولد", color: "#FFE1E1", icon: Confetti },
  { title: "لوازم کادویی", color: "#DCD6F7", icon: Present },
  { title: "لوازم کمکی", color: "#D6EEFF", icon: Confetti2 },
];

export default function HomeCategories() {
  // مقداردهی اولیه‌ی AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // زمان انیمیشن
      offset: 50, // فاصله تا شروع انیمیشن
      once: true, // فقط یک بار انیمیشن اجرا بشه
    });
  }, []);

  return (
    <div className="home-categories">
      <Container>
        <div className="home-categories-container">
          {categories.map((cat, index) => (
            <div
              key={cat.title}
              className="home-category-item"
              style={{ backgroundColor: cat.color }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="home-category-inner">
                <img
                  className="home-category-icon m-0"
                  src={cat.icon}
                  alt={cat.title}
                />
                <p className="home-category-title m-0">{cat.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
