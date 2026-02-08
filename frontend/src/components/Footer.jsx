import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark-custom pt-5 pb-3">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-4">
                        <h3 className="text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>PR<span className="text-gold">Design</span> Studio</h3>
                        <p className="text-white-50 mb-4">
                            Creating spaces that inspire. We specialize in modern architecture, interior design, and sustainable living solutions across Vadodara and Gujarat.
                        </p>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-white-50 hover-text-gold transition"><FaInstagram size={20} /></a>
                            <a href="#" className="text-white-50 hover-text-gold transition"><FaFacebookF size={20} /></a>
                            <a href="#" className="text-white-50 hover-text-gold transition"><FaLinkedinIn size={20} /></a>
                            <a href="#" className="text-white-50 hover-text-gold transition"><FaWhatsapp size={20} /></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: '2px' }}>Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/" className="text-white-50 text-decoration-none hover-text-white">Home</Link></li>
                            <li className="mb-2"><Link to="/about" className="text-white-50 text-decoration-none hover-text-white">About Us</Link></li>
                            <li className="mb-2"><Link to="/services" className="text-white-50 text-decoration-none hover-text-white">Services</Link></li>
                            <li className="mb-2"><Link to="/portfolio" className="text-white-50 text-decoration-none hover-text-white">Portfolio</Link></li>
                            <li className="mb-2"><Link to="/contact" className="text-white-50 text-decoration-none hover-text-white">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: '2px' }}>Services</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2 text-white-50">Architectural Design</li>
                            <li className="mb-2 text-white-50">Interior Design</li>
                            <li className="mb-2 text-white-50">3D Visualization</li>
                            <li className="mb-2 text-white-50">Landscape Design</li>
                            <li className="mb-2 text-white-50">Turnkey Projects</li>
                        </ul>
                    </div>

                    <div className="col-lg-3">
                        <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: '2px' }}>Contact</h5>
                        <ul className="list-unstyled">
                            <li className="mb-3 d-flex text-white-50">
                                <FaMapMarkerAlt className="me-3 mt-1 text-gold" />
                                <span>304, Royal Complex, Alkapuri,<br />Vadodara, Gujarat 390007</span>
                            </li>
                            <li className="mb-3 d-flex text-white-50">
                                <FaPhone className="me-3 mt-1 text-gold" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="mb-3 d-flex text-white-50">
                                <FaEnvelope className="me-3 mt-1 text-gold" />
                                <span>contact@prdesignstudio.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-secondary opacity-25 my-5" />

                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0 text-white-50 small">&copy; {new Date().getFullYear()} PR Design Studio. All Rights Reserved.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
                        <p className="mb-0 text-white-50 small">Designed by <span className="text-gold">TechTeam</span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
