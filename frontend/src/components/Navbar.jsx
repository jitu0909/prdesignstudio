import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);
    const location = useLocation();

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const changeNav = () => {
        if (window.scrollY >= 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        return () => window.removeEventListener('scroll', changeNav);
    }, []);

    const isHome = location.pathname === '/';
    
    // Navbar background logic
    const navBackground = scroll ? 'bg-white shadow-sm py-2' : (isHome ? 'bg-transparent py-4' : 'bg-white shadow-sm py-2');
    const textColor = scroll || !isHome ? 'text-dark' : 'text-white';
    const logoColor = scroll || !isHome ? 'text-dark' : 'text-white';
    
    // Mobile menu background
    const mobileMenuBg = 'bg-white';

    return (
        <nav className={`navbar navbar-expand-lg fixed-top transition-all duration-500 ${navBackground}`}>
            <div className="container">
                <Link to="/" className="navbar-brand d-flex align-items-center" onClick={closeMobileMenu}>
                    <div className="d-flex flex-column">
                        <span className={`fw-bold h3 mb-0 font-heading ${logoColor}`} style={{ letterSpacing: '2px' }}>
                            PR<span className="text-gold">Design</span>
                        </span>
                        <span className={`small text-uppercase ${scroll || !isHome ? 'text-muted' : 'text-white-50'}`} style={{ fontSize: '0.6rem', letterSpacing: '4px' }}>
                            Studio
                        </span>
                    </div>
                </Link>

                <button className="navbar-toggler border-0" type="button" onClick={handleClick}>
                    {click ? 
                        <FaTimes className={scroll || !isHome ? 'text-dark' : 'text-dark'} size={24} /> : 
                        <FaBars className={textColor} size={24} />
                    }
                </button>

                <div className={`collapse navbar-collapse ${click ? `show ${mobileMenuBg} p-4 p-lg-0 mt-3 mt-lg-0 shadow-lg rounded-3` : ''} justify-content-end`}>
                    <ul className="navbar-nav align-items-center">
                        {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                            <li className="nav-item mx-2" key={item}>
                                <Link 
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                                    className={`nav-link text-uppercase fw-bold small ${click ? 'text-dark' : textColor}`}
                                    style={{ letterSpacing: '1.5px', fontSize: '12px' }}
                                    onClick={closeMobileMenu}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                        <li className="nav-item ms-lg-4 mt-4 mt-lg-0">
                            <Link 
                                to="/contact" 
                                className={`btn ${scroll || !isHome || click ? 'btn-custom' : 'btn-outline-light'} rounded-0 px-4`}
                                onClick={closeMobileMenu}
                            >
                                Get a Quote
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
