import QuickLinks from "../quick-links/QuickLinks";
import SocialAndEmail from "../social-email/SocialAndEmail";
import "./Footer.css";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="footer-top-line"></div>
      <Container fluid className="px-4">
        <footer className="footer">
          <div className="footer-top">
            <div className="footer-logo">
              <h2 className="logo-footer">
                شادی <span>لند</span>
              </h2>
              <p className="footer-support">
                تلفن پشتیبانی: 09195641969 | 7 روز هفته پاسخگوی شما هستیم.
              </p>
            </div>
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4">
              <QuickLinks />
              <SocialAndEmail />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <div className="footer-bottom-line"></div>
          </div>
          <div className="footer-bottom">
            <p className="text-copy-right">
              کپی رایت © 2020 فروشگاه اینترنتی شادی لند . تمامی حقوق محفوظ
              می‌باشد.
            </p>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Footer;
