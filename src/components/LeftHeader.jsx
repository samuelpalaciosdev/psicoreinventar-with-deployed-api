import { LazyLoadImage } from "react-lazy-load-image-component";

const LeftHeader = ({ img, imgLabel, title, title_highlight, description }) => {
  return (
    <>
      <div className="left-header p-3 mb-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 text-center">
              <LazyLoadImage
                src={img}
                className="img-fluid mx-auto"
                alt={imgLabel}
                style={{ maxWidth: "90%" }}
              ></LazyLoadImage>
            </div>
            <div className="col-md-6 gy-3">
              <h1 className="fw-bold">
                {title} <span className="text-primary">{title_highlight}</span>
              </h1>
              <p className="my-2 paragraph">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftHeader;
