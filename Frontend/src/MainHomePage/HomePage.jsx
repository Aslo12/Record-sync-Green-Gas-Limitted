import React from 'react'
import { useState } from 'react'
import LeftSection from '../Elements/LeftSection'
import RightSection from '../Elements/RightSection'
import Navbar from '../Elements/Navbar'
import Footer from '../Elements/Footer'


function HomePage() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    return (
        <>
            <Navbar />
            <div className="row" >
            <div className="col-sm-6 ms-auto" style={{ marginBottom: "150px" }} >
                
                <h1 className="mt-4 mb-3 text-primary">Document management software and workflow automation</h1>
                <p className="mt-4 mb-3">Work smarter: anywhere, anytime by simplifying work in a world of complex information through digitizing, automating and transforming your key business processes.</p>
                <a href=""><button type="button" className="btn btn-primary btn-lg ">Get started</button></a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href=""><button type="button" className="btn btn-white btn-lg border border-dark">Start tour</button></a>

            </div>
            <div className="col-sm-5 me-auto mb-5">
                <div id="bottomImage">
                    <img src="images/DW_Homepage-Header.webp" className='w-100'  />
                    <div className="topImage">
                        <img src="images/IntellixOnboarding_01_Oneclick (1).gif" />
                    </div>
                </div>
               

            </div>

            {/* Mreqee Section */}



            <div className="row text-center bg-light mt-5">
                <marquee direction="left" behavior="scroll" scrollamount="20" loop="3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="col-auto">
                            <img src="images/Daviess County-sm (3).webp" className="img-fluid" style={{ height: "100px", width: "110px" }} />
                        </div>
                        <div className="col-auto">
                            <img src="images/Advantage Credit-sm.webp" className="img-fluid" style={{ height: "100px", width: "110px" }} />
                        </div>
                        <div className="col-auto">
                            <img src="images/aquaphoenix_logo.webp" className="img-fluid" style={{ height: "100px", width: "110px" }} />
                        </div>
                        <div className="col-auto">
                            <img src="images/docuware-document-management-customer-tillamook-bay-community-college-logo-1.webp" className="img-fluid" style={{ height: "100px", width: "110px" }} />
                        </div>
                        <div className="col-auto">
                            <img src="images/docuware-document-management-customer-town-of-henrietta-logo.webp" className="img-fluid" style={{ height: "100px", width: "110px" }} />
                        </div>
                        <div className="col-auto">
                            <img src="images/Maryland Management logo-sm (1).webp" className="img-fluid" style={{ height: "100px", width: "110px" }} />
                        </div>
                        <div className="col-auto">
                            <img src="images/DenverColdStorage-online-logo-sm (1).webp" className="img-fluid" style={{ height: "100px", width: "110px" }} />
                        </div>
                        <div className="col-auto">
                            <img src="images/lawrence_70.webp" className="img-fluid" style={{ height: "100px", width: "110px" }} />
                        </div>
                    </div>
                </marquee>
            </div>


            <LeftSection imageUrl="images/DocuWare-Website-Illustrationen_US-USP 1.webp" heading="Automated invoice processing " description="Effortlessly manage your invoices with our automated solutions – reducing errors and saving time. " buttonContent="Learn more about invoice processing" />
            <RightSection imageUrl="images/DocuWare-Website-Illustrationen_US-USP 2 (1).webp" description="Keep your critical documents safe and easily accessible with our secure archiving solutions.   " heading="Secure document archiving " buttonContent="Discover document security" />
            <LeftSection imageUrl="images/DocuWare-Website-Illustrationen_US-USP 3.webp" heading="Automated invoice processing " description="Effortlessly manage your invoices with our automated solutions – reducing errors and saving time. " buttonContent="Learn more about invoice processing" />
            <RightSection imageUrl="images/DocuWare-Website-Illustrationen_UK-USP 2.webp" description="Keep your critical documents safe and easily accessible with our secure archiving solutions.   " heading="Secure document archiving " buttonContent="Discover document security" />
            <LeftSection imageUrl="images/IntellixOnboarding_01_Oneclick (1).gif" heading="Automated invoice processing " description="Effortlessly manage your invoices with our automated solutions – reducing errors and saving time. " buttonContent="Learn more about invoice processing" />
            {/* SectionTwo */}


            <div className="row">
                <h1 className='mb-3 text-center mt-5'>Explore Guides, Insights, and Trends on our Blog</h1>
                <div className="col">
                    <div id="sectionTwoCard" className="text-center" style={{ overflow: 'hidden' }}>
                        <div id="sectionTwoCardOne">
                            <img src="images/1 Abstract digital technology concept using squares and rectangles.webp" style={{ height: "300px", width: "300px" }} />
                        </div>
                        <div id="sectionTwoCardTwo" className='m-2' style={{ padding: '15px', boxSizing: 'border-box' }}>
                            <h3 style={{ marginBottom: '5px' }}>Top Intelligent Document Processing (IDP) Use Cases</h3>
                            <p style={{
                                textAlign: 'justify',
                                wordWrap: 'break-word',
                                marginTop: '5px',
                                marginBottom: '15px',
                                padding: '0',
                                overflow: 'hidden',
                                whiteSpace: 'normal',
                            }}>
                                As organizations digitalize their operations, outdated capture solutions remain a challenge.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div id="sectionTwoCard" className="text-center" style={{ overflow: 'hidden' }}>
                        <div id="sectionTwoCardOne">
                            <img src="images/Cube blocks of wood make up a workflow diagram.webp" style={{ height: "300px", width: "300px" }} />
                        </div>
                        <div id="sectionTwoCardTwo" className='m-2' style={{ padding: '15px', boxSizing: 'border-box' }}>
                            <h3 style={{ marginBottom: '5px' }}>What Is Invoice OCR?</h3>
                            <p style={{
                                textAlign: 'justify',
                                wordWrap: 'break-word',
                                marginTop: '5px',
                                marginBottom: '15px',
                                padding: '0',
                                overflow: 'hidden',
                                whiteSpace: 'normal',
                            }}>
                                Your invoices are piling up, data entry takes forever, and approval delays slow everything down. In this guide, we explore how Invoice OCR can save time, reduce errors, and increase efficiency.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div id="sectionTwoCard" className="text-center" style={{ overflow: 'hidden' }}>
                        <div id="sectionTwoCardOne">
                            <img src="images/1 woman and man working from a home office.jpg" style={{ height: "300px", width: "300px" }} />
                        </div>
                        <div id="sectionTwoCardTwo" className='m-2' style={{ padding: '15px', boxSizing: 'border-box' }}>
                            <h3 style={{ marginBottom: '5px' }}>Top 3 Collaboration Tools for Remote Teams</h3>
                            <p style={{
                                textAlign: 'justify',
                                wordWrap: 'break-word',
                                marginTop: '5px',
                                marginBottom: '15px',
                                padding: '0',
                                overflow: 'hidden',
                                whiteSpace: 'normal',
                            }}>
                                Despite return-to-work mandates from some large companies, remote and hybrid teams are becoming the new norm. This article covers the best collaboration tools for teams working from anywhere.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div id="sectionTwoCard" className="text-center" style={{ overflow: 'hidden' }}>
                        <div id="sectionTwoCardOne">
                            <img src="images/yellow and blue colored pencils on  background that is also yellow and blue 2.webp" style={{ height: "300px", width: "300px" }} />
                        </div>
                        <div id="sectionTwoCardTwo" className='m-2' style={{ padding: '15px', boxSizing: 'border-box' }}>
                            <h3 style={{ marginBottom: '5px' }}>OCR vs. IDP: Choosing the Right Solution</h3>
                            <p style={{
                                textAlign: 'justify',
                                wordWrap: 'break-word',
                                marginTop: '5px',
                                marginBottom: '15px',
                                padding: '0',
                                overflow: 'hidden',
                                whiteSpace: 'normal',
                            }}>
                                Optical character recognition (OCR) and intelligent document processing (IDP) perform similar tasks but with distinct capabilities. Learn which solution is best for your business needs in this in-depth comparison.
                            </p>
                        </div>
                    </div>
                </div>
            </div>




            {/* SectionThree */}

            <div className="row text-center bg-light mt-5 mb-5">
                <h1 className='mb-4 mt-4'>Certified and top-rated</h1>

                <div className="d-flex justify-content-between align-items-center">
                    <div className="col-auto">
                        <img src="images/SOC2.svg" className="img-fluid" style={{ height: "200px", width: "150px" }} />
                    </div>

                    <div className="col-auto">
                        <img src="images/Software Advice Front Runner Badge 2024.webp" className="img-fluid" style={{ height: "200px", width: "150px" }} />
                    </div>

                    <div className="col-auto">
                        <img src="images/ISO 9001_EN.svg" className="img-fluid" style={{ height: "200px", width: "150px" }} />
                    </div>

                    <div className="col-auto">
                        <img src="images/ISO 27001.svg" className="img-fluid" style={{ height: "200px", width: "150px" }} />
                    </div>

                    <div className="col-auto">
                        <img src="images/users-love-us.svg" className="img-fluid" style={{ height: "200px", width: "150px" }} />
                    </div>

                    <div className="col-auto">
                        <img src="images/BusinessCom.svg" className="img-fluid" style={{ height: "200px", width: "150px" }} />
                    </div>

                    <div className="col-auto">
                        <img src="images/Nucleus_col.svg" className="img-fluid" style={{ height: "200px", width: "150px" }} />
                    </div>
                </div>
            </div>


            {/* SectionFour */}

            <div className="container my-5">
                <div className="text-center mb-5">
                    <h1 className="fw-bold text-primary">Solutions that boost productivity</h1>
                    <p className="lead text-muted">
                        Say goodbye to manual tasks and time-consuming processes. <br />
                        Discover how document management and workflow automation with DocuWare <br />
                        help your teams collaborate effortlessly, leverage information, and complete projects faster.
                    </p>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

                    {/* Item Card */}
                    {[
                        {
                            title: "Automated Invoice Processing",
                            image: "images/Header-InvoiceProcessing-1.png",
                            category: "By Use Case",
                        },
                        {
                            title: "Secure Document Archiving",
                            image: "images/Secure_document_archiving-100.webp",
                            category: "By Use Case",
                        },
                        {
                            title: "Document Management",
                            image: "images/Header-DocumentManagement-1.webp",
                            category: "By Industry",
                        },
                        {
                            title: "Purchase-to-Pay",
                            image: "images/Solution-Page-Purchase-to-pay-v5 (1).png",
                            category: "By Industry",
                        },
                        {
                            title: "Contract Management",
                            image: "images/Header-ContractManagement-1.webp",
                            category: "Contract Management",
                        },
                        {
                            title: "Quality Management",
                            image: "images/DW-Quality-Management-Thumbnail-291x144-korrekt.webp",
                            category: "Contract Management",
                        },
                        {
                            title: "Employee File Management",
                            image: "images/Employee_File_Management-100.webp",
                            category: "By Company Size",
                        },
                        {
                            title: "Sales Order Processing",
                            image: "images/DW-Order-Processing-Thumbnail-291x144-korrekt.webp",
                            category: "By Company Size",
                        },
                    ].map((item, i) => (
                        <div className="col" key={i}>
                            <div className="card h-100 shadow-sm border-0 hover-shadow transition">
                                <img
                                    src={item.image}
                                    className="card-img-top"
                                    alt={item.title}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body text-center">
                                    <h6 className="text-secondary">{item.category}</h6>
                                    <h5 className="card-title">{item.title}</h5>
                                    <a href="#" className="stretched-link text-primary">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* SectionFive */}

            <div className="container my-5">
                <div className="text-center mb-4">
                    <h1 className="fw-bold text-primary">Get in touch with our team</h1>
                </div>

                <div className="row gy-4 justify-content-center">
                    {["Sales Inquiry", "Technical Support", "Partnerships", "General Questions"].map((label, index) => (
                        <div className="col-12 col-md-6 col-lg-5 d-flex justify-content-center" key={index}>
                            <a
                                href="#"
                                className="btn btn-outline-primary btn-lg w-100 py-3 shadow-sm rounded-pill"
                                role="button"
                            >
                                {label}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* SectionBottom */}

            <div className="container my-5">
                <div className="text-center mb-5">
                    <h1 className="fw-bold text-primary">What Our Customers Say</h1>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

                            {/* Indicators */}
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>

                            {/* Carousel Items */}
                            <div className="carousel-inner">

                                {[1, 2, 3].map((_, index) => (
                                    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                        <div className="row justify-content-center">

                                            {/* First Testimonial */}
                                            <div className="col-md-6 mb-4">
                                                <div className="p-4 bg-light rounded shadow h-100">
                                                    <p className="text-muted fst-italic">
                                                        “Before DocuWare, paper invoices circulated manually for approval, making tracking difficult. Now, we monitor our cash flow in real time, knowing precisely the location of each invoice.”
                                                    </p>
                                                    <hr />
                                                    <div className="d-flex align-items-center justify-content-between mt-3">
                                                        <div>
                                                            <strong>Dustin Fisher</strong><br />
                                                            <small className="text-muted">Director of Finance</small>
                                                        </div>
                                                        <img src="images/quotations.webp" alt="Quote" width="40" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Second Testimonial */}
                                            <div className="col-md-6 mb-4">
                                                <div className="p-4 bg-light rounded shadow h-100">
                                                    <p className="text-muted fst-italic">
                                                        “It was a no-brainer. We are saving money because we’ve improved our efficiency and eliminated offsite storage costs.”
                                                    </p>
                                                    <hr />
                                                    <div className="d-flex align-items-center justify-content-between mt-3">
                                                        <div>
                                                            <strong>Dustin Fisher</strong><br />
                                                            <small className="text-muted">Director of Finance</small>
                                                        </div>
                                                        <img src="images/quotations.webp" alt="Quote" width="40" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Controls */}
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>

        </div >


            <Footer />

        </>
    )
}

export default HomePage