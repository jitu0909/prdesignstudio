import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../constants/images';
import { FaDraftingCompass, FaHome, FaBuilding, FaTree } from 'react-icons/fa';

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
        <div className="pt-5">
            <section className="section-padding pb-5">
                <div className="container-fluid px-4 px-lg-5">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h6 className="text-uppercase text-gold letter-spacing-4 mb-3">What We Do</h6>
                        <h1 className="display-1 fw-bold mb-5">Our Services</h1>
                    </motion.div>
                </div>
            </section>

            <section className="pb-5">
                <div className="container-fluid px-4 px-lg-5">
                    <div className="row g-5">
                        {services.map((service, index) => (
                            <div className="col-lg-6" key={index}>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="h-100"
                                >
                                    <div className="mb-4 overflow-hidden position-relative group">
                                         <img src={service.img} alt={service.title} className="w-100 object-fit-cover grayscale-hover" style={{ height: '400px' }} />
                                    </div>
                                    <div className="d-flex align-items-start gap-4">
                                        <div className="text-gold mt-1">{service.icon}</div>
                                        <div>
                                            <h3 className="h2 fw-bold mb-3">{service.title}</h3>
                                            <p className="text-muted lead" style={{ fontSize: '1.1rem' }}>{service.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
