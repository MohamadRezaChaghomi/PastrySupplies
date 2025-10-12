import "./BodyImages.css";
import BodyImage1 from "../../../assets/images/body image1.webp"
import BodyImage2 from "../../../assets/images/body image2.jpg"

const BodyImages = () => {
  return (
    <div className="my-5 mx-5">
        <div className="body-images d-flex justify-content-evenly align-items-center gap-3">
            <img className="body-image" src={BodyImage1} alt="BodyImage1" />
            <img className="body-image" src={BodyImage2} alt="BodyImage1" />
        </div>

    </div>
  );
};

export default BodyImages;
