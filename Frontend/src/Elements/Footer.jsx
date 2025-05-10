import React from 'react';

export default function Footer() {
  return (
    <div className="container-fluid bg-dark text-light py-5">
      <div className="row text-center text-md-start">
        {/* Explore DocuWare Section */}
        <div className="col-lg-3 col-md-6 mb-4">
          <h4 className="fw-bold mb-3 text-primary">Explore DocuWare</h4>
          <ul className="list-unstyled">
            <li><a href="" className="text-decoration-none text-light hover:text-primary transition-all">Contact us for a free demo</a></li>
            <li><a href="" className="text-decoration-none text-light hover:text-primary transition-all">Solutions for your team</a></li>
            <li><a href="" className="text-decoration-none text-light hover:text-primary transition-all">Platform and products</a></li>
            <li><a href="" className="text-decoration-none text-light hover:text-primary transition-all">Customer case studies</a></li>
            <li><a href="" className="text-decoration-none text-light hover:text-primary transition-all">Resources for ECM</a></li>
            <li><a href="" className="text-decoration-none text-light hover:text-primary transition-all">Careers with DocuWare</a></li>
            <li><a href="" className="text-decoration-none text-light hover:text-primary transition-all">Glossary of terms</a></li>
            <li><a href="" className="text-decoration-none text-light hover:text-primary transition-all">Gender Neutral Communications</a></li>
          </ul>
        </div>

        {/* Partner Resources Section */}
        <div className="col-lg-3 col-md-6 mb-4">
          <h4 className="fw-bold mb-3 text-primary">Partner Resources</h4>
          <ul className="list-unstyled">
            <li><a href="" className="text-decoration-none text-light hover:text-primary transition-all">Become a DocuWare Partner</a></li>
            <li><a href="" className="text-decoration-none text-light hover:text-primary transition-all">Find a DocuWare Partner</a></li>
            <li><a href="" className="text-decoration-none text-light hover:text-primary transition-all">My Account</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="col-lg-3 col-md-6 mb-4">
          <h4 className="fw-bold mb-3 text-primary">Legal</h4>
          <ul className="list-unstyled">
            <li><a href="" className="text-decoration-none text-light hover:text-primary transition-all">Terms of Use</a></li>
            <li><a href="" className="text-decoration-none text-light hover:text-primary transition-all">Data Privacy</a></li>
            <li><a href="" className="text-decoration-none text-light hover:text-primary transition-all">General Business Terms</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="col-lg-3 col-md-6 mb-4">
          <h4 className="fw-bold mb-3 text-primary">Contact Us</h4>
          <ul className="list-unstyled">
            <li><a href="" className="text-decoration-none text-light hover:text-primary transition-all">Contact DocuWare</a></li>
            <li><a href="" className="text-decoration-none text-light hover:text-primary transition-all">Office Locations</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="row mt-5 border-top pt-3">
        <div className="col-12 text-center">
          <p className="text-muted mb-0">© {new Date().getFullYear()} DocuWare. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
