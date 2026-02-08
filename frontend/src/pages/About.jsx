import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../constants/images';

const About = () => {
    return (
        <div className="pt-5">
            {/* Header */}
            <section className="section-padding pb-0">
                <div className="container-fluid px-4 px-lg-5">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h6 className="text-uppercase text-gold letter-spacing-4 mb-3">Who We Are</h6>
                        <h1 className="display-1 fw-bold mb-5">PR Design Studio</h1>
                    </motion.div>
                </div>
            </section>

            {/* Main Content - Split */}
            <section className="section-padding pt-4">
                <div className="container-fluid px-0">
                    <div className="row g-0">
                        <div className="col-lg-6">
                             <motion.img 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                src={images.about} 
                                alt="Our Studio" 
                                className="w-100 h-100 object-fit-cover" 
                                style={{ minHeight: '80vh' }}
                            />
                        </div>
                        <div className="col-lg-6 p-5 p-lg-6 bg-light d-flex align-items-center">
                            <div style={{ maxWidth: '650px' }}>
                                <h2 className="display-5 fw-bold mb-4">Crafting Spaces with <span className="text-gold">Soul</span></h2>
                                <p className="lead text-secondary mb-4">
                                    Founded by <strong>AR Payal Rana</strong>, PR Design Studio is a Vadodara-based multidisciplinary practice. 
                                    We believe that architecture is not just about walls and roofs, but about how light, space, and materials come together to evoke emotion.
                                </p>
                                <p className="text-muted mb-5">
                                    Our approach is deeply rooted in the context of the site and the needs of our clients. 
                                    Whether it's a luxury residence, a corporate office, or a boutique hotel, we bring a unique perspective that blends 
                                    contemporary design principles with timeless aesthetics.
                                </p>
                                
                                <div className="row g-4 mt-4">
                                    <div className="col-6">
                                        <h3 className="display-4 fw-bold text-black mb-0">50+</h3>
                                        <p className="text-uppercase letter-spacing-2 small text-muted">Projects Completed</p>
                                    </div>
                                    <div className="col-6">
                                        <h3 className="display-4 fw-bold text-black mb-0">10+</h3>
                                        <p className="text-uppercase letter-spacing-2 small text-muted">Years Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Team/Leader Section */}
             <section className="section-padding bg-white">
                <div className="container-fluid px-4 px-lg-5">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <h2 className="display-4 fw-bold mb-4">AR Payal Rana</h2>
                            <h5 className="text-gold text-uppercase letter-spacing-2 mb-4">Principal Architect</h5>
                            <p className="text-muted lead">
                                "Design is an exploration. Every project is an opportunity to discover something new about the way we live and interact with our environment."
                            </p>
                        </div>
                        <div className="col-lg-7">
                             <div className="bg-light p-5 text-center">
                                <h3 className="text-muted fst-italic">"Simplicity is the ultimate sophistication."</h3>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
