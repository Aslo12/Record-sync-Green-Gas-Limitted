import React from 'react'

function RightSection({ imageUrl, heading, description, buttonContent }) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <h1 className="text-primary fw-bold mb-4">{heading}</h1>
          <p className="text-muted mb-4">{description}</p>
          <a href="#">
            <button
              type="button"
              className="btn btn-primary btn-lg text-white px-4 py-2 rounded-3 shadow-sm"
            >
              {buttonContent}
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="col-lg-6 col-md-12">
          <img
            src={imageUrl}
            alt={heading}
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: "350px", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
