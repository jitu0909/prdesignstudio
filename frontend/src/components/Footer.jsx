import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-5 pb-3 border-top border-secondary">
      <div className="container-fluid px-4 px-lg-5">
        <div className="row gy-5">
          <div className="col-lg-4">
            <div className="mb-4">
                <Logo light={true} />
            </div>
            <p className="text-muted small mb-4" style={{ maxWidth: '300px' }}>
              A premier architectural and interior design studio based in Vadodara, dedicated to creating spaces that inspire and endure.
            </p>
          </div>
          
          <div className="col-lg-2 col-6">
            <h6 className="text-gold text-uppercase letter-spacing-2 mb-4 small">Menu</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/" className="text-white-50 text-decoration-none small hover-white">Home</Link></li>
              <li><Link to="/about" className="text-white-50 text-decoration-none small hover-white">About</Link></li>
              <li><Link to="/services" className="text-white-50 text-decoration-none small hover-white">Services</Link></li>
              <li><Link to="/portfolio" className="text-white-50 text-decoration-none small hover-white">Portfolio</Link></li>
              <li><Link to="/contact" className="text-white-50 text-decoration-none small hover-white">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-6">
            <h6 className="text-gold text-uppercase letter-spacing-2 mb-4 small">Contact</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li className="text-white-50 small">Alkapuri, Vadodara, Gujarat</li>
              <li className="text-white-50 small">+91 98765 43210</li>
              <li className="text-white-50 small">hello@prdesignstudio.com</li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h6 className="text-gold text-uppercase letter-spacing-2 mb-4 small">Social</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-white hover-gold"><FaInstagram size={20} /></a>
              <a href="#" className="text-white hover-gold"><FaLinkedin size={20} /></a>
              <a href="#" className="text-white hover-gold"><FaFacebook size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-top border-secondary mt-5 pt-4 d-flex justify-content-between flex-wrap">
          <p className="small text-muted mb-0">&copy; {new Date().getFullYear()} PR Design Studio. All rights reserved.</p>
          <p className="small text-muted mb-0">Designed by PR Design Studio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
