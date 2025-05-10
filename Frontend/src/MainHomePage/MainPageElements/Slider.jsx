import React from 'react'

function Slider() {
  return (
<div>
<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="GGLImages/Header-DocumentManagement-1.webp " className="d-block w-100" alt=""/>
      <div className="carousel-caption d-none d-md-block text-light">
        <h1>DOCUMENT MANAGEMENT</h1>
        <p>Document management makes documents secure, organized, and easily accessible for Green Gas Limited, helping with both compliance and efficiency.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="GGLImages/Header-ContractManagement-1.webp" className="d-block w-100" alt=""/>
      <div className="carousel-caption d-none d-md-block text-light">
        <h1>CONTRACT MANAGEMENT </h1>
        <p>Contract management at Green Gas Limited makes sure all agreements with suppliers, customers, and partners are properly created, stored, tracked, and renewed on time.
        It helps reduce legal risks, improve transparency, and ensure everyone follows their responsibilities, making business run more smoothly.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="GGLImages/Header-EmployeeFile.webp" className="d-block w-100" alt=""/>
      <div className="carousel-caption d-none d-md-block text-light">
        <h1>Employee management</h1>
        <p>Employee management in Green Gas Limited ensures that staff are hired, trained, and managed effectively to support company goals.
It helps track employee performance, attendance, and compliance with safety and operational standards.
Good employee management boosts productivity, safety, and overall company growth.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}

export default Slider