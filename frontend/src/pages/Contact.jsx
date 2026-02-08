import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { images } from '../constants/images';
import PageHeader from '../components/PageHeader';

const Contact = () => {
    return (
        <div>
            <PageHeader 
                title="Contact Us" 
                subtitle="Get in Touch" 
                image={images.services[0]} 
            />

            <section className="section-padding">
                <div className="container-fluid px-0">
                    <div className="row g-0">
                        {/* Contact Info */}
                        <div className="col-lg-5 bg-black text-white p-5 p-lg-6 d-flex flex-column justify-content-center">
                            <h2 className="display-5 fw-bold mb-5">Let's discuss your <br /><span className="text-gold">Vision.</span></h2>
                            
                            <div className="mb-5">
                                <p className="text-uppercase text-gold letter-spacing-2 small mb-2">Visit Us</p>
                                <div className="d-flex gap-3">
                                    <FaMapMarkerAlt className="mt-1" />
                                    <p className="lead mb-0">PR Design Studio <br /> Alkapuri, Vadodara <br /> Gujarat, India - 390007</p>
                                </div>
                            </div>

                            <div className="mb-5">
                                <p className="text-uppercase text-gold letter-spacing-2 small mb-2">Contact</p>
                                <div className="d-flex gap-3 align-items-center mb-3">
                                    <FaPhone />
                                    <p className="lead mb-0">+91 98765 43210</p>
                                </div>
                                <div className="d-flex gap-3 align-items-center">
                                    <FaEnvelope />
                                    <p className="lead mb-0">hello@prdesignstudio.com</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-uppercase text-gold letter-spacing-2 small mb-3">Follow Us</p>
                                <div className="d-flex gap-4">
                                    <a href="#" className="text-white h4"><FaInstagram /></a>
                                    <a href="#" className="text-white h4"><FaLinkedin /></a>
                                    <a href="#" className="text-white h4"><FaFacebook /></a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-lg-7 p-5 p-lg-6 bg-white">
                            <form>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="text-uppercase small letter-spacing-2 fw-bold mb-2">First Name</label>
                                            <input type="text" className="form-control rounded-0 border-0 border-bottom border-dark p-3 bg-transparent" placeholder="John" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="text-uppercase small letter-spacing-2 fw-bold mb-2">Last Name</label>
                                            <input type="text" className="form-control rounded-0 border-0 border-bottom border-dark p-3 bg-transparent" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className="text-uppercase small letter-spacing-2 fw-bold mb-2">Email Address</label>
                                            <input type="email" className="form-control rounded-0 border-0 border-bottom border-dark p-3 bg-transparent" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className="text-uppercase small letter-spacing-2 fw-bold mb-2">Message</label>
                                            <textarea className="form-control rounded-0 border-0 border-bottom border-dark p-3 bg-transparent" rows="5" placeholder="Tell us about your project..."></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-5">
                                        <button type="submit" className="btn btn-custom px-5 py-3 w-100">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
