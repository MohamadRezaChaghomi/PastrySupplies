import React, { useRef } from "react";
import "./BestSellingProducts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
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
  const swiperRef = useRef(null);

  const scrollBy = (direction) => {
    if (!swiperRef.current) return;
    if (direction === "left") {
      swiperRef.current.slidePrev();
    } else {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="products-wrapper-inner">
      <button
        className="scroll-btn left"
        onClick={() => scrollBy("right")}
        aria-label="اسکرول به چپ"
      >
        ›
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView="auto"
        spaceBetween={8}
        freeMode={true}
        modules={[FreeMode]}
        className="products-swiper"
        dir="rtl"
      >
        {products.map((p) => {
          const finalPrice = p.price - (p.price * p.discount) / 100;

          return (
            <SwiperSlide
              className="products-container"
              key={p.id}
              style={{ width: "auto" }}
            >
              <a
                className="product-card"
                href={`/product/${p.id}`}
                role="listitem"
              >
                <img
                  className="product-image"
                  src={p.image}
                  alt={p.name}
                  onError={(e) => (e.currentTarget.src = "/images/default.jpg")}
                />
                <h3 className="product-name">{p.name}</h3>

                <div className="product-meta">
                  <div className="discount-section">
                    <div className="discount-badge d-flex align-items-center justify-content-center">
                      {p.discount.toLocaleString()}%
                    </div>

                    <div className="price-block">
                      <div className="original-price">
                        {p.price.toLocaleString()}
                      </div>
                      <div className="final-price">
                        {finalPrice.toLocaleString()}
                        <span style={{ fontSize: "10px" }}> تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button
        className="scroll-btn right"
        onClick={() => scrollBy("left")}
        aria-label="اسکرول به راست"
      >
        ‹
      </button>
    </div>
  );
};

export default CardBestSellingProducts;
