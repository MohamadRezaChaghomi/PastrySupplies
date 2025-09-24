import React, { useRef } from "react";
import "./BestSellingProducts.css";
import Ballon1 from "../../../assets/images/بادکنک.webp";
import Ballon2 from "../../../assets/images/بادکنک 2.webp";
import Candle from "../../../assets/images/شمع.webp";
import Riseh from "../../../assets/images/ریسه.webp";
import Riseh2 from "../../../assets/images/ریسه 2.webp";
import Theme from "../../../assets/images/تم.webp";

const products = [
  {
    id: 1,
    name: "بادکنک مدل a001 بسته 30 عددی",
    price: 500000,
    discount: 50,
    image: Ballon1,
  },
  {
    id: 2,
    name: "مجموعه 43 عددی تم تولد طرح دندونی پسر",
    price: 700000,
    discount: 10,
    image: Theme,
  },
  {
    id: 3,
    name: "شمع تولد مدل عدد 2 کد Ca82T",
    price: 600000,
    discount: 6,
    image: Candle,
  },
  {
    id: 4,
    name: "ریسه تولد مدل پرچم مجموعه 2 عددی colorful مدل پایین بسته و بالایی",
    price: 650000,
    discount: 50,
    image: Riseh,
  },
  {
    id: 5,
    name: "ریسه تولد مدل پرچم مجموعه 2 عددی colorful",
    price: 650000,
    discount: 50,
    image: Riseh2,
  },
  {
    id: 6,
    name: "بادکنک مدل a001 بسته 30 عددی",
    price: 500000,
    discount: 50,
    image: Ballon1,
  },
  {
    id: 7,
    name: "مجموعه 43 عددی تم تولد طرح دندونی پسر",
    price: 700000,
    discount: 10,
    image: Theme,
  },
  {
    id: 8,
    name: "شمع تولد مدل عدد 2 کد Ca82T",
    price: 600000,
    discount: 6,
    image: Candle,
  },
  {
    id: 9,
    name: "ریسه تولد مدل پرچم مجموعه 2 عددی colorful",
    price: 650000,
    discount: 50,
    image: Riseh,
  },
  {
    id: 10,
    name: "ریسه تولد مدل پرچم مجموعه 2 عددی colorful",
    price: 650000,
    discount: 50,
    image: Riseh2,
  },

  // ... بقیه محصولات با id یکتا
];

const CardBestSellingProducts = () => {
  const containerRef = useRef(null);

  const scrollBy = (delta) => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div className="products-wrapper-inner">
      <button
        className="scroll-btn left"
        onClick={() => scrollBy(-300)}
        aria-label="اسکرول به چپ"
      >
        ›
      </button>

      <div className="products-container" ref={containerRef} role="list">
        {products.map((p) => {
          const finalPrice = p.price - p.discount;
          return (
            <a key={p.id} className="product-card" href="#" role="listitem">
              <img
                className="product-image"
                src={p.image}
                alt={p.name}
                onError={(e) => (e.currentTarget.src = "/images/default.jpg")}
              />
              <h3 className="product-name">{p.name}</h3>

              <div className="product-meta">
                <div className="discount">
                  <div className="d-flex align-items-center justify-content-center" style={{backgroundColor: '#ff446a', width: 32, height: 20, borderRadius: 16}}>{p.discount.toLocaleString()} %</div>
                  <div className="final-price">
                    {finalPrice.toLocaleString()}{" "}
                    <p className="m-0" style={{ fontSize: 8 }}>
                      تومان
                    </p>
                  </div>
                </div>
              </div>
              <div className="original-price">{p.price.toLocaleString()}</div>
            </a>
          );
        })}
      </div>

      <button
        className="scroll-btn right"
        onClick={() => scrollBy(300)}
        aria-label="اسکرول به راست"
      >
        ‹
      </button>
    </div>
  );
};

export default CardBestSellingProducts;
