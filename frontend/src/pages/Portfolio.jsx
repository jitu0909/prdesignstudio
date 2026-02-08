import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../constants/images';
import PageHeader from '../components/PageHeader';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Architecture', 'Hospitality'];

    const filteredProjects = filter === 'All' 
        ? images.portfolio 
        : images.portfolio.filter(item => item.category === filter);

    return (
        <div>
            <PageHeader 
                title="Our Portfolio" 
                subtitle="Selected Works" 
                image={images.portfolio[0].src} 
            />

            <section className="section-padding">
                <div className="container-fluid px-4 px-lg-5">
                    {/* Filters */}
                    <div className="d-flex flex-wrap gap-4 mb-5 pb-3 border-bottom border-dark justify-content-center">
                        {categories.map((cat, index) => (
                            <button 
                                key={index} 
                                onClick={() => setFilter(cat)}
                                className={`btn p-0 text-uppercase letter-spacing-2 fw-bold border-0 bg-transparent ${filter === cat ? 'text-gold' : 'text-dark'}`}
                                style={{ fontSize: '12px' }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Masonry-style Grid */}
                    <div className="row g-4">
                        {filteredProjects.map((project, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <motion.div 
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="mb-4"
                                >
                                    <div className="img-hover-zoom overflow-hidden mb-3 position-relative group">
                                        <img src={project.src} alt={project.title} className="w-100" style={{ height: '500px', objectFit: 'cover' }} />
                                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
                                    </div>
                                    <h4 className="fw-bold mb-1">{project.title}</h4>
                                    <p className="text-muted text-uppercase small letter-spacing-2">{project.category}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
