import React from 'react';
import { FaDraftingCompass, FaHome, FaHotel, FaPencilRuler, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <header className="vh-100 d-flex align-items-center position-relative overflow-hidden">
                <div className="position-absolute w-100 h-100" style={{ zIndex: -1 }}>
                    <div className="w-100 h-100 bg-dark position-absolute opacity-50"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                        alt="Modern Architecture" 
                        className="w-100 h-100 object-fit-cover"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                
                <div className="container position-relative z-1 text-white fade-in-up">
                    <div className="row">
                        <div className="col-lg-8">
                            <h5 className="text-uppercase text-gold mb-3 letter-spacing-3 fw-bold">AR Payal Rana</h5>
                            <h1 className="display-1 fw-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
                                Designing Dreams <br /> Into Reality
                            </h1>
                            <p className="lead mb-5 opacity-75" style={{ maxWidth: '600px' }}>
                                Premier Architectural & Interior Design Studio in Vadodara. 
                                We craft spaces that blend functionality with timeless aesthetics.
                            </p>
                            <div className="d-flex gap-3">
                                <Link to="/portfolio" className="btn btn-custom px-4 py-3">View Our Work</Link>
                                <Link to="/contact" className="btn btn-outline-light rounded-0 px-4 py-3 text-uppercase fw-bold letter-spacing-2">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* About Preview */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="position-relative ps-4 pt-4">
                                <div className="position-absolute top-0 start-0 bg-secondary-custom w-75 h-75" style={{ zIndex: 0 }}></div>
                                <img 
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                                    alt="About PR Design Studio" 
                                    className="img-fluid position-relative shadow-lg"
                                    style={{ zIndex: 1 }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-5">
                            <h6 className="text-gold text-uppercase letter-spacing-2 mb-3">About Us</h6>
                            <h2 className="display-4 mb-4">We Create Spaces That Tell Your Story</h2>
                            <p className="text-muted mb-4">
                                Led by <span className="fw-bold text-dark">AR Payal Rana</span>, PR Design Studio is a Vadodara-based firm dedicated to excellence in architecture and design. 
                                With a keen eye for detail and a passion for innovation, we transform empty spaces into vibrant living and working environments.
                            </p>
                            <div className="row mb-4">
                                <div className="col-6">
                                    <h3 className="display-5 fw-bold text-dark">50+</h3>
                                    <p className="text-muted small text-uppercase">Projects Completed</p>
                                </div>
                                <div className="col-6">
                                    <h3 className="display-5 fw-bold text-dark">100%</h3>
                                    <p className="text-muted small text-uppercase">Client Satisfaction</p>
                                </div>
                            </div>
                            <Link to="/about" className="btn btn-outline-custom">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="text-gold text-uppercase letter-spacing-2 mb-3">What We Do</h6>
                        <h2 className="display-4">Our Expertise</h2>
                    </div>

                    <div className="row g-4">
                        {[
                            { icon: <FaHome size={40} />, title: "Residential Design", desc: "Custom homes, row houses, and apartments tailored to your lifestyle." },
                            { icon: <FaDraftingCompass size={40} />, title: "2D & 3D Planning", desc: "Detailed architectural blueprints and realistic 3D visualizations." },
                            { icon: <FaPencilRuler size={40} />, title: "Interior Design", desc: "Curating elegant interiors for homes, offices, and commercial spaces." },
                            { icon: <FaHotel size={40} />, title: "Commercial Projects", desc: "Designing functional and attractive spaces for hotels, restaurants, and retail." }
                        ].map((service, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div className="bg-white p-5 h-100 shadow-sm transition-all hover-lift border-bottom border-3 border-transparent hover-border-gold text-center">
                                    <div className="text-gold mb-4">{service.icon}</div>
                                    <h4 className="h5 mb-3">{service.title}</h4>
                                    <p className="text-muted small mb-0">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Preview / Gallery */}
            <section className="section-padding">
                <div className="container-fluid px-0">
                    <div className="row g-0">
                        <div className="col-md-3">
                            <div className="position-relative group overflow-hidden" style={{ height: '300px' }}>
                                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="w-100 h-100 object-fit-cover transition-transform duration-500 hover-scale" alt="Project 1" />
                                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-0 hover-opacity-50 transition-opacity duration-300 d-flex align-items-center justify-content-center">
                                    <div className="text-center text-white p-3">
                                        <h5 className="mb-1">Modern Villa</h5>
                                        <p className="small text-uppercase letter-spacing-2">Residential</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="position-relative group overflow-hidden" style={{ height: '300px' }}>
                                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="w-100 h-100 object-fit-cover transition-transform duration-500 hover-scale" alt="Project 2" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="position-relative group overflow-hidden" style={{ height: '300px' }}>
                                <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="w-100 h-100 object-fit-cover transition-transform duration-500 hover-scale" alt="Project 3" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="position-relative group overflow-hidden" style={{ height: '300px' }}>
                                <img src="https://images.unsplash.com/photo-1616137466218-f487bc39a2f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="w-100 h-100 object-fit-cover transition-transform duration-500 hover-scale" alt="Project 4" />
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <Link to="/portfolio" className="btn btn-outline-custom">View All Projects <FaArrowRight className="ms-2" /></Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5 bg-dark-custom text-center">
                <div className="container py-5">
                    <h2 className="display-5 text-white mb-4">Ready to Build Your Dream Space?</h2>
                    <p className="lead text-white-50 mb-5">Contact us today for a consultation regarding your residential or commercial project.</p>
                    <Link to="/contact" className="btn btn-custom btn-lg">Start a Project</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
