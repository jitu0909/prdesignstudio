import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../constants/images';
import { FaDraftingCompass, FaHome, FaBuilding, FaTree, FaArrowRight } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';

const Services = () => {
    const services = [
        {
            icon: <FaHome size={40} />,
            title: "Residential Architecture",
            desc: "From bespoke private villas to modern apartment complexes, we design homes that are a sanctuary for their inhabitants.",
            img: images.services[0]
        },
        {
            icon: <FaBuilding size={40} />,
            title: "Commercial & Corporate",
            desc: "Designing workspaces and commercial hubs that foster productivity, collaboration, and brand identity.",
            img: images.services[1]
        },
        {
            icon: <FaDraftingCompass size={40} />,
            title: "Interior Design",
            desc: "Detailed interior planning, furniture selection, and styling to create cohesive and beautiful indoor environments.",
            img: images.services[2]
        },
        {
            icon: <FaTree size={40} />,
            title: "Landscape & Urban Planning",
            desc: "Integrating built forms with the natural environment to create sustainable and breathable spaces.",
            img: images.services[3]
        }
    ];

    return (
        <div>
            <PageHeader 
                title="Our Services" 
                subtitle="What We Do" 
                image={images.services[2]} 
            />

            <section className="section-padding">
                <div className="container-fluid px-4 px-lg-5">
                    {services.map((service, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`row g-0 align-items-center mb-5 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
                        >
                            <div className="col-lg-6">
                                <div className="img-hover-zoom overflow-hidden">
                                    <img src={service.img} alt={service.title} className="w-100 object-fit-cover" style={{ height: '500px' }} />
                                </div>
                            </div>
                            <div className="col-lg-6 p-5">
                                <div className="text-gold mb-4">{service.icon}</div>
                                <h2 className="display-4 fw-bold mb-4">{service.title}</h2>
                                <p className="lead text-muted mb-4">{service.desc}</p>
                                <button className="btn btn-link text-black text-uppercase letter-spacing-2 fw-bold p-0 text-decoration-none">
                                    Learn More <FaArrowRight className="ms-2" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
