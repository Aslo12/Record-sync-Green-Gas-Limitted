import React from 'react';
import Navbar from '../../Elements/Navbar';
import Footer from '../../Elements/Footer';

function About() {
    return (
        <>
            <div className="container-fluid bg-light">
                <div className="row" style={{ height: "100px" }}>
                    <div className="col-sm-12">
                        <Navbar />
                    </div>
                </div>

                <div className="row text-muted">
                    <div className="col-lg-8 col-md-10 mx-auto mb-4 mt-5">
                        <h1 className="display-4 text-primary mb-4">About the RecordSync for Green Gas Limited Application</h1>
                        <p className="lead text-justify">
                            The RecordSync project is a strategic initiative undertaken by Green Gas Limited (GGL) in collaboration with Softpro India Computer Technologies (P) Ltd. GGL, a joint venture of GAIL (India) Limited and Indian Oil Corporation Limited, is actively involved in City Gas Distribution projects in Agra and Lucknow, Uttar Pradesh. The existing system faced significant limitations, including low functionality, manual errors, and security concerns.
                        </p>
                        <p className="text-justify">
                            The FTS project aims to address these challenges by introducing a web-based application designed to monitor the pendency of receipts and files efficiently. The system encompasses a range of features, from diarizing receipts and files to updating their status, opening new files, tracking file movement, and managing records comprehensively. The objective is to streamline and modernize the entire process, eliminating manual errors and enhancing security.
                        </p>
                        <p className="text-justify">
                            Key features of the proposed system include employee registration, authentication, profile management, dynamic file handling, expert searching, and a discussion forum. By leveraging technologies such as data encryption, SMS and email API integration, and OTP verification, the FTS project is poised to significantly improve the efficiency, accuracy, and security of file tracking within GGL's operations.
                        </p>
                        <p className="text-justify">
                            This project is not just a technological upgrade; it represents a fundamental shift in how GGL manages its critical processes, ensuring a more robust and reliable system for City Gas Distribution and Compressed Natural Gas networks in Agra and Lucknow.
                        </p>

                        <h2 className="text-primary mt-5 mb-4">Objective of this Application</h2>
                        <p className="text-justify">
                            The primary objective of the RecordSync project is to revolutionize and optimize the file and receipt management processes within Green Gas Limited's (GGL) operations. GGL, a joint venture of GAIL (India) Limited and Indian Oil Corporation Limited, is actively involved in City Gas Distribution projects in Agra and Lucknow, Uttar Pradesh. The existing manual system presented several limitations, including low functionality, susceptibility to errors, and security concerns. The FTS project is envisioned as a comprehensive web-based solution to overcome these challenges and elevate the efficiency of GGL's operations.
                        </p>
                        <p className="text-justify">
                            The core goal of FTS is to establish a seamless and integrated platform for monitoring the pendency of receipts and files. This involves the entire lifecycle of document management, from diarizing incoming receipts/files to updating their status, opening new files, tracking movement, and managing records. By introducing automation and real-time tracking, FTS aims to significantly reduce the time and effort required for these tasks, thereby enhancing overall operational efficiency.
                        </p>
                        <p className="text-justify">
                            The project further seeks to address the limitations of the existing system by introducing advanced features such as employee registration, authentication, and profile management. Additionally, the implementation of dynamic file handling, expert searching, and a discussion forum will empower GGL's personnel with advanced tools for effective file management.
                        </p>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}

export default About;
