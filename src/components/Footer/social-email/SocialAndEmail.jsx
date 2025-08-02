import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "../../../assets/images/icons8-x-logo-32.png";
import "./SocialAndEmail.css";

const SocialAndEmail = () => (
  <div className="social-email">
    <h5 className="text-social-email">همراه ما باشید!</h5>
    <div className="social-icons">
      <img
        src= {XIcon}
        alt="X Icon"
      ></img>
      <WhatsAppIcon sx={{ fontSize: { xs: 32, lg: 38 }, color: "#075E54" }} />
      <TelegramIcon sx={{ fontSize: { xs: 32, lg: 38 }, color: "#0088cc" }} />
      <InstagramIcon sx={{ fontSize: { xs: 32, lg: 38 }, color: "#E1306C" }} />
    </div>
    <h5 className="text-social-email">
      با ثبت ایمیل، از جدید ترین تخفیف ها باخبر شوید
    </h5>
    <form className="form-email d-flex align-items-center justify-content-end">
      <input
        className="email-form-input"
        type="email"
        placeholder="ایمیل شما"
      />
      <button className="email-submit-btn" type="submit">
        ثبت
      </button>
    </form>
  </div>
);

export default SocialAndEmail;
