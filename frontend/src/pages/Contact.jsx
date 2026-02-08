import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="pt-5">
            <div className="bg-dark-custom py-5 mt-5">
                <div className="container py-5 text-center">
                    <h1 className="display-4 text-white">Contact Us</h1>
                    <p className="lead text-gold letter-spacing-2 text-uppercase">Get in Touch</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-5">
                            <h2 className="mb-4">Let's Discuss Your Project</h2>
                            <p className="text-muted mb-5">
                                Whether you're planning a new home, a renovation, or a commercial space, we'd love to hear from you. 
                                Fill out the form or visit our studio in Vadodara.
                            </p>
                            
                            <div className="d-flex mb-4">
                                <div className="bg-light p-3 me-3 text-gold h4 mb-0 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h5 className="mb-1">Our Studio</h5>
                                    <p className="text-muted small">304, Royal Complex, Alkapuri, Vadodara, Gujarat 390007</p>
                                </div>
                            </div>

                            <div className="d-flex mb-4">
                                <div className="bg-light p-3 me-3 text-gold h4 mb-0 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                    <FaPhone />
                                </div>
                                <div>
                                    <h5 className="mb-1">Phone</h5>
                                    <p className="text-muted small">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="d-flex mb-4">
                                <div className="bg-light p-3 me-3 text-gold h4 mb-0 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h5 className="mb-1">Email</h5>
                                    <p className="text-muted small">contact@prdesignstudio.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="bg-white p-5 shadow-lg">
                                <h3 className="mb-4">Send us a Message</h3>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control rounded-0" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control rounded-0" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control rounded-0" id="subject" placeholder="Subject" />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control rounded-0" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-custom w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Map Placeholder */}
            <div className="w-100 bg-light" style={{ height: '400px' }}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.70010221666!2d73.10304624388725!3d22.32210263695972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1707386221532!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
