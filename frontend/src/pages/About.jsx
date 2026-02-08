import React from 'react';
import { FaDraftingCompass, FaUserTie, FaAward, FaBuilding } from 'react-icons/fa';

const About = () => {
    return (
        <div className="pt-5">
            {/* Page Header */}
            <div className="bg-dark-custom py-5 mt-5">
                <div className="container py-5 text-center">
                    <h1 className="display-4 text-white">About Us</h1>
                    <p className="lead text-gold letter-spacing-2 text-uppercase">Who We Are</p>
                </div>
            </div>

            {/* Main Content */}
            <section className="section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <img 
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                                alt="AR Payal Rana" 
                                className="img-fluid shadow-lg"
                            />
                        </div>
                        <div className="col-lg-7 ps-lg-5">
                            <h2 className="mb-4">Visionary Architecture by <span className="text-gold">AR Payal Rana</span></h2>
                            <p className="text-muted mb-4 lead">
                                Founded in Vadodara, PR Design Studio has emerged as a leading name in architectural innovation and interior elegance.
                            </p>
                            <p className="text-muted mb-4">
                                Our philosophy is simple: we believe that good design is not just about aesthetics, but about how a space makes you feel. 
                                Whether it's a cozy home, a functional office, or a luxurious hotel, we approach every project with a fresh perspective 
                                and a commitment to excellence.
                            </p>
                            <div className="row g-4 mt-4">
                                <div className="col-md-6">
                                    <div className="d-flex">
                                        <FaDraftingCompass className="text-gold mt-1 me-3" size={30} />
                                        <div>
                                            <h5 className="mb-2">Innovative Design</h5>
                                            <p className="text-muted small">Combining modern trends with timeless principles.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex">
                                        <FaUserTie className="text-gold mt-1 me-3" size={30} />
                                        <div>
                                            <h5 className="mb-2">Client-Centric</h5>
                                            <p className="text-muted small">Your vision is our blueprint. We listen, then we create.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row text-center g-4">
                        <div className="col-md-3 col-6">
                            <h2 className="display-4 fw-bold text-dark">50+</h2>
                            <p className="text-uppercase letter-spacing-2 small text-muted">Projects</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <h2 className="display-4 fw-bold text-dark">10+</h2>
                            <p className="text-uppercase letter-spacing-2 small text-muted">Years Exp</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <h2 className="display-4 fw-bold text-dark">25+</h2>
                            <p className="text-uppercase letter-spacing-2 small text-muted">Cities</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <h2 className="display-4 fw-bold text-dark">100%</h2>
                            <p className="text-uppercase letter-spacing-2 small text-muted">Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
