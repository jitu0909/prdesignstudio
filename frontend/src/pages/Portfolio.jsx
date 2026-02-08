import React from 'react';

const Portfolio = () => {
    const projects = [
        { id: 1, img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", title: "Luxury Apartment", cat: "Interior" },
        { id: 2, img: "https://images.unsplash.com/photo-1600596542815-2495db9dc2c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", title: "Modern Bungalow", cat: "Architecture" },
        { id: 3, img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", title: "Cozy Living Room", cat: "Interior" },
        { id: 4, img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", title: "City Hotel Lobby", cat: "Commercial" },
        { id: 5, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", title: "Minimalist Kitchen", cat: "Interior" },
        { id: 6, img: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", title: "Corporate Office", cat: "Commercial" },
    ];

    return (
        <div className="pt-5">
            <div className="bg-dark-custom py-5 mt-5">
                <div className="container py-5 text-center">
                    <h1 className="display-4 text-white">Our Portfolio</h1>
                    <p className="lead text-gold letter-spacing-2 text-uppercase">Selected Works</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="row g-4">
                        {projects.map((project) => (
                            <div className="col-lg-4 col-md-6" key={project.id}>
                                <div className="position-relative group overflow-hidden shadow-sm" style={{ height: '350px' }}>
                                    <img 
                                        src={project.img} 
                                        alt={project.title} 
                                        className="w-100 h-100 object-fit-cover transition-transform duration-500 hover-scale" 
                                    />
                                    <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-dark text-white">
                                        <h5 className="mb-1">{project.title}</h5>
                                        <span className="badge bg-gold text-dark rounded-0">{project.cat}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
