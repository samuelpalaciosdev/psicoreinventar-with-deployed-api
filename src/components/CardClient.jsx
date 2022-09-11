import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/CardClient.css";

const CardClient = ({ ImgClient, imgLabel, NameClient, AgeClient, Review }) => {
  return (
    <div className="card mb-3 shadow">
      <div className="row">
        <div className="col-7 col-sm-3 col-md-2 col-lg-3 col-xl-2">
          <LazyLoadImage
            src={ImgClient}
            alt={imgLabel}
            className="img-fluid foto d-flex"
          ></LazyLoadImage>
        </div>
        <div className="col-12 col-sm-9 col-md-10 col-lg-9 col-xl-10 texto">
          <div className="card-body">
            <div className="col">
              <strong>
                {NameClient}, {AgeClient}
              </strong>
            </div>
            <div className="col">
              <LazyLoadImage
                src="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62549889a2813af0a6be7bcd_Star-yellow.svg"
                alt="star"
              ></LazyLoadImage>
              <LazyLoadImage
                src="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62549889a2813af0a6be7bcd_Star-yellow.svg"
                alt="star"
              ></LazyLoadImage>
              <LazyLoadImage
                src="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62549889a2813af0a6be7bcd_Star-yellow.svg"
                alt="star"
              ></LazyLoadImage>
              <LazyLoadImage
                src="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62549889a2813af0a6be7bcd_Star-yellow.svg"
                alt="star"
              ></LazyLoadImage>
              <LazyLoadImage
                src="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/62549889a2813af0a6be7bcd_Star-yellow.svg"
                alt="star"
              ></LazyLoadImage>
            </div>
            <p className="card-text paragraph">{Review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardClient;
