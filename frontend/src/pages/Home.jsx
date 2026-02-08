import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { images } from '../constants/images';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Minimalist Hero Section - Full Screen & Centered */}
            <header className="vh-100 position-relative d-flex align-items-center justify-content-center bg-black">
                <div className="position-absolute w-100 h-100 opacity-60">
                     <motion.img 
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.6 }}
                        transition={{ duration: 1.5 }}
                        src={images.hero[0]} 
                        className="w-100 h-100 object-fit-cover" 
                        alt="Hero Architecture" 
                    />
                </div>
                {/* Full width container, no padding constraints for maximum impact */}
                <div className="container-fluid position-relative z-1 text-center text-white px-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="d-flex flex-column align-items-center justify-content-center"
                    >
                        <h6 className="text-uppercase letter-spacing-4 mb-4 text-gold">Architecture + Interiors</h6>
                        <h1 className="hero-title mb-5 w-100 px-3" style={{ maxWidth: '1400px' }}>
                            Defining <br />
                            <span className="fst-italic fw-light">Space & Light</span>
                        </h1>
                        <Link to="/portfolio" className="btn btn-outline-light px-5 py-3 rounded-0 text-uppercase letter-spacing-2" style={{ fontSize: '12px' }}>
                            View Projects
                        </Link>
                    </motion.div>
                </div>
            </header>

            {/* Introduction - Full Width Split (Edge to Edge) */}
            <section className="bg-white">
                <div className="container-fluid p-0">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6 p-5 p-lg-6 d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="px-lg-5"
                                style={{ maxWidth: '700px' }}
                            >
                                <h6 className="text-uppercase text-muted letter-spacing-2 mb-4" style={{ fontSize: '11px' }}>The Philosophy</h6>
                                <h2 className="display-4 fw-bold mb-4 text-black">
                                    We create voids <br /> that are <span className="text-gold fst-italic">charged</span> with life.
                                </h2>
                                <p className="text-secondary mb-5 lead" style={{ lineHeight: '1.9' }}>
                                    At PR Design Studio, architecture is more than just building—it's about crafting experiences. 
                                    Led by <strong className="text-dark">AR Payal Rana</strong>, we explore the possibilities of 
                                    transcendent and spiritual character in architecture, blending modern minimalism with functional luxury.
                                </p>
                                <Link to="/about" className="btn btn-custom px-4 py-3">
                                    Read Our Story
                                </Link>
                            </motion.div>
                        </div>
                        <div className="col-lg-6 h-100">
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="h-100"
                            >
                                <img src={images.about} alt="Studio Philosophy" className="w-100 h-100 object-fit-cover" style={{ minHeight: '80vh' }} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Selected Works - Full Width Grid (Removed padding constraints) */}
            <section className="section-padding bg-light">
                <div className="container-fluid px-0"> 
                    <div className="container-fluid px-4 px-lg-5 mb-5">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-end border-bottom border-dark pb-4">
                            <h2 className="display-3 fw-bold mb-0">Selected Works</h2>
                            <Link to="/portfolio" className="text-black text-uppercase letter-spacing-2 small fw-bold mt-3 mt-md-0">View All Projects <FaArrowRight className="ms-2"/></Link>
                        </div>
                    </div>

                    <div className="row g-0">
                        {images.portfolio.slice(0, 4).map((project, index) => (
                            <div className="col-md-6" key={index}>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="img-hover-zoom position-relative group"
                                >
                                    <Link to="/portfolio" className="d-block overflow-hidden">
                                        <img src={project.src} alt={project.title} className="w-100 grayscale-hover" style={{ height: '700px', objectFit: 'cover' }} />
                                    </Link>
                                    <div className="position-absolute bottom-0 start-0 w-100 p-5 bg-gradient-to-t from-black via-transparent to-transparent text-white">
                                        <h3 className="h3 fw-bold mb-1">{project.title}</h3>
                                        <p className="text-white-50 text-uppercase letter-spacing-2 mb-0" style={{ fontSize: '11px' }}>{project.category}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services List - Clean & Minimal */}
            <section className="section-padding bg-white">
                <div className="container-fluid px-4 px-lg-5">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h2 className="display-4 fw-bold">Our Expertise</h2>
                            <p className="text-muted mt-3 lead">Comprehensive design solutions from concept to completion.</p>
                        </div>
                        <div className="col-lg-8">
                            {[
                                { title: "Architecture", desc: "Sustainable and innovative structural design." },
                                { title: "Interior Design", desc: "Curating spaces that reflect your personality." },
                                { title: "Landscape", desc: "Harmonizing nature with built environments." },
                                { title: "Project Management", desc: "Ensuring precision in every detail." }
                            ].map((service, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="service-card-minimal d-flex justify-content-between align-items-center border-top border-dark py-5"
                                >
                                    <div>
                                        <h3 className="fw-bold mb-2">{service.title}</h3>
                                        <p className="text-muted mb-0">{service.desc}</p>
                                    </div>
                                    <FaArrowRight className="text-dark" size={24} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA - Full Width */}
            <section className="py-5 bg-black text-white text-center">
                <div className="container py-5">
                    <h2 className="display-2 fw-bold mb-4">Let's build something iconic.</h2>
                    <Link to="/contact" className="btn btn-outline-light px-5 py-4 rounded-0 text-uppercase letter-spacing-2 mt-3">
                        Start a Project
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
