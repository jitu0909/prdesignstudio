import React from 'react';
import { FaHome, FaBuilding, FaCouch, FaRulerCombined, FaTree, FaTools } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaHome size={50} />,
            title: "Residential Architecture",
            desc: "From bungalows to row houses and apartments, we design homes that reflect your personality and lifestyle."
        },
        {
            icon: <FaBuilding size={50} />,
            title: "Commercial Spaces",
            desc: "Designing hotels, restaurants, and office complexes that optimize space and enhance business value."
        },
        {
            icon: <FaCouch size={50} />,
            title: "Interior Design",
            desc: "Transforming interiors with bespoke furniture planning, lighting, and decor selection for a cohesive look."
        },
        {
            icon: <FaRulerCombined size={50} />,
            title: "2D & 3D Planning",
            desc: "High-precision architectural drawings and immersive 3D walkthroughs to visualize the project before construction."
        },
        {
            icon: <FaTree size={50} />,
            title: "Landscape Design",
            desc: "Integrating nature with architecture through thoughtful landscape planning for gardens and outdoor spaces."
        },
        {
            icon: <FaTools size={50} />,
            title: "Turnkey Solutions",
            desc: "End-to-end project management from conceptualization to final execution, ensuring peace of mind."
        }
    ];

    return (
        <div className="pt-5">
            <div className="bg-dark-custom py-5 mt-5">
                <div className="container py-5 text-center">
                    <h1 className="display-4 text-white">Our Services</h1>
                    <p className="lead text-gold letter-spacing-2 text-uppercase">What We Offer</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="row g-4">
                        {services.map((service, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="card h-100 border-0 shadow-sm p-4 text-center hover-lift transition-all">
                                    <div className="text-gold mb-4">{service.icon}</div>
                                    <h3 className="h4 mb-3">{service.title}</h3>
                                    <p className="text-muted">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-light section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h2 className="mb-4">Why Choose <span className="text-gold">PR Design Studio?</span></h2>
                            <ul className="list-unstyled">
                                <li className="mb-3 d-flex align-items-center">
                                    <span className="text-gold h5 me-3 mb-0">01.</span>
                                    <span>Expertise in both traditional and modern Gujarati architecture.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <span className="text-gold h5 me-3 mb-0">02.</span>
                                    <span>Cost-effective sustainable design solutions.</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <span className="text-gold h5 me-3 mb-0">03.</span>
                                    <span>Timely delivery and transparent communication.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <img 
                                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                                alt="Office Interior" 
                                className="img-fluid shadow" 
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
