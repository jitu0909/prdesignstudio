import React, { useState, useEffect } from 'react';
import { FaDraftingCompass, FaHome, FaHotel, FaPencilRuler, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
            subtitle: "AR Payal Rana",
            title: "Designing Dreams Into Reality",
            desc: "Premier Architectural & Interior Design Studio in Vadodara."
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
            subtitle: "Luxury Living",
            title: "Timeless Aesthetics & Comfort",
            desc: "Crafting spaces that blend functionality with elegance."
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
            subtitle: "Modern Innovation",
            title: "Sustainable & Smart Design",
            desc: "Forward-thinking architecture for the modern world."
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Slider Section */}
            <header className="hero-slider d-flex align-items-center position-relative">
                <AnimatePresence mode='wait'>
                    <motion.div 
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="position-absolute w-100 h-100"
                        style={{ zIndex: -1 }}
                    >
                        <div className="w-100 h-100 bg-dark position-absolute opacity-40" style={{ opacity: 0.4 }}></div>
                        <motion.img 
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 6, ease: "linear" }}
                            src={slides[currentSlide].image} 
                            alt="Architecture" 
                            className="w-100 h-100 object-fit-cover"
                        />
                    </motion.div>
                </AnimatePresence>
                
                <div className="container position-relative z-1 text-white">
                    <motion.div 
                        key={currentSlide}
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="row"
                    >
                        <div className="col-lg-9 col-xl-8">
                            <motion.div variants={fadeInUp} className="d-flex align-items-center mb-3">
                                <span className="bg-gold d-inline-block me-3" style={{ width: '60px', height: '2px', backgroundColor: '#d4af37' }}></span>
                                <h5 className="text-uppercase text-gold mb-0 letter-spacing-4 fw-bold small">{slides[currentSlide].subtitle}</h5>
                            </motion.div>
                            <motion.h1 variants={fadeInUp} className="display-1 fw-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
                                {slides[currentSlide].title}
                            </motion.h1>
                            <motion.p variants={fadeInUp} className="lead mb-5 opacity-75 fw-light letter-spacing-1" style={{ maxWidth: '600px' }}>
                                {slides[currentSlide].desc}
                            </motion.p>
                            <motion.div variants={fadeInUp} className="d-flex gap-3">
                                <Link to="/portfolio" className="btn btn-custom px-5 py-3 shadow-lg">View Our Work</Link>
                                <Link to="/contact" className="btn btn-outline-light px-5 py-3">Contact Us</Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Slider Indicators */}
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5 d-flex gap-2 z-2">
                    {slides.map((_, index) => (
                        <button 
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`border-0 rounded-circle transition-all duration-300 ${currentSlide === index ? 'bg-gold' : 'bg-white opacity-50'}`}
                            style={{ width: '12px', height: '12px', padding: 0, backgroundColor: currentSlide === index ? '#d4af37' : 'rgba(255,255,255,0.5)' }}
                        ></button>
                    ))}
                </div>
            </header>

            {/* About Preview - Asymmetrical Layout */}
            <section className="section-padding bg-white position-relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="position-absolute top-0 end-0 text-light opacity-10" style={{ fontSize: '20rem', fontWeight: 'bold', lineHeight: 1, zIndex: 0, fontFamily: 'Playfair Display' }}>AR</div>

                <div className="container position-relative z-1">
                    <div className="row align-items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="col-lg-6 mb-5 mb-lg-0"
                        >
                            <div className="position-relative pe-lg-5">
                                <div className="position-absolute top-0 start-0 bg-gold w-100 h-100" style={{ transform: 'translate(-20px, -20px)', zIndex: 0, opacity: 0.2 }}></div>
                                <img 
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                                    alt="About PR Design Studio" 
                                    className="img-fluid position-relative shadow-lg w-100"
                                    style={{ zIndex: 1 }}
                                />
                                <div className="position-absolute bottom-0 end-0 bg-dark text-white p-4 shadow-lg" style={{ zIndex: 2, transform: 'translate(30px, 30px)', maxWidth: '250px' }}>
                                    <h3 className="display-4 fw-bold text-gold mb-0">10+</h3>
                                    <p className="text-uppercase small letter-spacing-2 mb-0">Years of Experience</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="col-lg-6 ps-lg-5"
                        >
                            <h6 className="text-gold text-uppercase letter-spacing-4 mb-3">About The Architect</h6>
                            <h2 className="display-4 mb-4">We Create Spaces That <span className="text-gold fst-italic">Inspire</span></h2>
                            <p className="text-muted mb-4 lead">
                                Led by <span className="fw-bold text-dark">AR Payal Rana</span>, PR Design Studio is where architectural precision meets artistic vision.
                            </p>
                            <p className="text-muted mb-5">
                                We believe that every line drawn on paper translates to a lifestyle. Our approach blends contemporary design principles with functional aesthetics, creating environments that stand the test of time.
                            </p>
                            <Link to="/about" className="btn btn-outline-custom">Discover More</Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Preview - Dark Theme */}
            <section className="section-padding bg-dark-custom position-relative">
                <div className="container">
                    <div className="text-center mb-5">
                        <motion.h6 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-gold text-uppercase letter-spacing-4 mb-3"
                        >
                            Our Expertise
                        </motion.h6>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="display-4 text-white"
                        >
                            Design Services
                        </motion.h2>
                    </div>

                    <div className="row g-4">
                        {[
                            { icon: <FaHome size={40} />, title: "Residential", desc: "Bespoke homes tailored to your lifestyle." },
                            { icon: <FaDraftingCompass size={40} />, title: "Architecture", desc: "Innovative structural design and planning." },
                            { icon: <FaPencilRuler size={40} />, title: "Interior Design", desc: "Curated interiors with elegance and warmth." },
                            { icon: <FaHotel size={40} />, title: "Commercial", desc: "Functional spaces for business excellence." }
                        ].map((service, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="col-lg-3 col-md-6"
                            >
                                <div className="service-card p-5 h-100 text-center bg-white bg-opacity-10 border-0 rounded-0">
                                    <div className="text-gold mb-4 service-icon">{service.icon}</div>
                                    <h4 className="h5 mb-3 text-white">{service.title}</h4>
                                    <p className="text-white-50 small mb-0">{service.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Preview - Masonry Style */}
            <section className="section-padding bg-light">
                <div className="container-fluid px-0">
                    <div className="text-center mb-5">
                        <h6 className="text-gold text-uppercase letter-spacing-4 mb-3">Recent Works</h6>
                        <h2 className="display-4">Selected Portfolio</h2>
                    </div>
                    
                    <div className="row g-0">
                        {[
                            { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", title: "Villa Aesthetica", cat: "Residential" },
                            { img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", title: "Skyline Heights", cat: "Commercial" },
                            { img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", title: "The Onyx Office", cat: "Interior" },
                            { img: "https://images.unsplash.com/photo-1616137466218-f487bc39a2f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", title: "Serenity Home", cat: "Residential" }
                        ].map((project, index) => (
                            <div className="col-md-3" key={index}>
                                <div className="position-relative group overflow-hidden" style={{ height: '400px' }}>
                                    <img src={project.img} className="w-100 h-100 object-fit-cover hover-scale" alt={project.title} />
                                    <div className="position-absolute top-0 start-0 w-100 h-100 hover-overlay d-flex flex-column justify-content-end p-4">
                                        <h5 className="text-white mb-1 transform-y-20 transition-all duration-300 group-hover:translate-y-0">{project.title}</h5>
                                        <p className="text-gold small text-uppercase letter-spacing-2 mb-0">{project.cat}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <Link to="/portfolio" className="btn btn-outline-custom">View All Projects <FaArrowRight className="ms-2" /></Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <FaQuoteLeft className="text-gold mb-4" size={40} />
                            <h3 className="display-6 mb-4 fst-italic">"Working with PR Design Studio was an absolute pleasure. Payal's attention to detail and ability to understand our needs resulted in a home that exceeds our expectations."</h3>
                            <h5 className="fw-bold">Mr. Rajesh Patel</h5>
                            <p className="text-muted small text-uppercase letter-spacing-2">Vadodara</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5 bg-dark-custom text-center position-relative overflow-hidden">
                <div className="position-absolute w-100 h-100 top-0 start-0" style={{ opacity: 0.1 }}>
                     <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" className="w-100 h-100 object-fit-cover" alt="bg" />
                </div>
                <div className="container py-5 position-relative z-1">
                    <h2 className="display-5 text-white mb-4">Ready to Build Your Dream?</h2>
                    <p className="lead text-white-50 mb-5">Book a consultation with AR Payal Rana today.</p>
                    <Link to="/contact" className="btn btn-custom btn-lg">Start a Project</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
