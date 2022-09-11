import "../styles/Card.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ img, imgLabel, title, description }) => {
  return (
    <div className="card h-100 text-center" style={{ width: "18rem" }}>
      <LazyLoadImage
        src={img}
        className="card-img-top mx-auto"
        alt={imgLabel}
        style={{ height: "150px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text paragraph">{description}</p>
      </div>
    </div>
  );
};

export default Card;
