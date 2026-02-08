import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { images } from '../constants/images';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Minimalist Hero Section */}
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
                <div className="container position-relative z-1 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <h6 className="text-uppercase letter-spacing-4 mb-4 text-gold">Architecture + Interiors</h6>
                        <h1 className="hero-title mb-5">
                            Defining <br />
                            <span className="fst-italic fw-light">Space & Light</span>
                        </h1>
                        <Link to="/portfolio" className="btn btn-outline-light px-5 py-3 rounded-0 text-uppercase letter-spacing-2" style={{ fontSize: '12px' }}>
                            View Projects
                        </Link>
                    </motion.div>
                </div>
            </header>

            {/* Introduction - Charged Voids Inspired (Split Layout) */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="pe-lg-5"
                            >
                                <h6 className="text-uppercase text-muted letter-spacing-2 mb-4" style={{ fontSize: '11px' }}>The Philosophy</h6>
                                <h2 className="display-5 fw-bold mb-4 text-black">
                                    We create voids <br /> that are <span className="text-gold fst-italic">charged</span> with life.
                                </h2>
                                <p className="text-secondary mb-5" style={{ lineHeight: '1.9' }}>
                                    At PR Design Studio, architecture is more than just building—it's about crafting experiences. 
                                    Led by <strong className="text-dark">AR Payal Rana</strong>, we explore the possibilities of 
                                    transcendent and spiritual character in architecture, blending modern minimalism with functional luxury.
                                </p>
                                <Link to="/about" className="text-uppercase text-dark fw-bold letter-spacing-2 small border-bottom border-dark pb-1">
                                    Read Our Story
                                </Link>
                            </motion.div>
                        </div>
                        <div className="col-lg-7">
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="position-relative"
                            >
                                <img src={images.about} alt="Studio Philosophy" className="w-100 shadow-sm" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Selected Works - Grid Layout */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-end mb-5">
                        <h2 className="display-6 fw-bold mb-0">Selected Works</h2>
                        <Link to="/portfolio" className="text-muted text-uppercase letter-spacing-2 small">All Projects</Link>
                    </div>

                    <div className="row g-4">
                        {images.portfolio.map((project, index) => (
                            <div className="col-md-6" key={index}>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="img-hover-zoom position-relative mb-3"
                                >
                                    <div className="overflow-hidden">
                                        <img src={project.src} alt={project.title} className="w-100" style={{ height: '400px', objectFit: 'cover' }} />
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-gold text-uppercase letter-spacing-2 mb-1" style={{ fontSize: '10px' }}>{project.category}</p>
                                        <h3 className="h4 fw-bold mb-0">{project.title}</h3>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services List - TBC Architecture Inspired */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h2 className="display-5 fw-bold">Our Expertise</h2>
                            <p className="text-muted mt-3">Comprehensive design solutions from concept to completion.</p>
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
                                    className="service-card-minimal d-flex justify-content-between align-items-center"
                                >
                                    <div>
                                        <h4 className="fw-bold mb-1">{service.title}</h4>
                                        <p className="text-muted mb-0 small">{service.desc}</p>
                                    </div>
                                    <FaArrowRight className="text-muted opacity-50" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-5 bg-black text-white text-center">
                <div className="container py-5">
                    <h2 className="display-4 fw-bold mb-4">Let's build something iconic.</h2>
                    <Link to="/contact" className="btn btn-outline-light px-5 py-3 rounded-0 text-uppercase letter-spacing-2">
                        Start a Project
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
