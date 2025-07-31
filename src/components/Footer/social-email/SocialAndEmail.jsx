import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./SocialAndEmail.css";

const SocialAndEmail = () => (
  <div className="social-email">
    <h5 className="text-social-email">همراه ما باشید!</h5>
    <div className="social-icons">
      <TwitterIcon sx={{ fontSize: { xs: 32, lg: 38 } }} />
      <WhatsAppIcon sx={{ fontSize: { xs: 32, lg: 38 } }} />
      <TelegramIcon sx={{ fontSize: { xs: 32, lg: 38 } }} />
      <InstagramIcon sx={{ fontSize: { xs: 32, lg: 38 } }} />
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
