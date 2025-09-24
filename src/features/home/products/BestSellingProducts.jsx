import React from "react";
import { Container } from "react-bootstrap";
import BestSeller from "../../../assets/images/icons8-best-seller-64.png";
import CardBestSellingProducts from "./CardBestSellingProducts";
import "./BestSellingProducts.css";

const BestSellingProducts = () => {
  return (
    <div className="my-5 mx-5">
      <div className="best-selling-products-container">
        <div className="promo-col">
          <div className="best-selling-products-title w-100 h-100">
            <div className="d-flex flex-column-reverse align-items-center justify-content-around h-100">
              <div>
              <img className="promo-col-image" src={BestSeller} alt="Best Seller"/>
              </div>
              <h3 className="promo-col-title">پرفروش های شادی لند</h3>
            </div>
          </div>
        </div>

        {/* بخش محصولات — تنها این بخش اسکرول می‌خورد */}
        <div className="products-wrapper">
          <CardBestSellingProducts />
        </div>
      </div>
    </div>
  );
};

export default BestSellingProducts;
