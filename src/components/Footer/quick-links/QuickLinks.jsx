import React from "react";
import "./QuickLinks.css";

const QuickLinks = () => (
  <div className="footer-section">
    <div>
      {" "}
      <h5 className="title-quick-links">دسترسی سریع</h5>
      <ul className="ul-footer">
        <li>وبلاگ</li>
        <li>درباره ما</li>
        <li>تماس با ما</li>
        <li>راهنمای خرید</li>
        <li>شرایط و قوانین</li>
      </ul>
    </div>
    <div>
      {" "}
      <h5 className="title-quick-links">راهنمای خرید از شادی لند</h5>
      <ul className="ul-footer">
        <li>نحوه ثبت سفارش</li>
        <li>رویه ارسال سفارش</li>
        <li>شیوه های پرداخت</li>
        <li>پشتیبانی و پیگیری سفارش</li>
        <li>ثبت اطلاعات و انتخاب روش ارسال</li>
      </ul>
    </div>
    <div>
      {" "}
      <h5 className="title-quick-links">با شادی لند</h5>
      <ul className="ul-footer">
        <li>درباره شادی‌لند</li>
        <li>سؤالات متداول</li>
        <li>خدمات بادکنک‌آرایی</li>
        <li>نظرات مشتریان</li>
        <li>تماس با ما</li>
      </ul>
    </div>
  </div>
);

export default QuickLinks;
