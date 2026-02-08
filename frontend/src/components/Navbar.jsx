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
    
    // Minimalist logic
    const navBackground = scroll ? 'bg-white border-bottom py-3' : (isHome ? 'bg-transparent py-4' : 'bg-white border-bottom py-3');
    const textColor = scroll || !isHome ? 'text-dark' : 'text-white';
    
    return (
        <nav className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${navBackground}`}>
            <div className="container-fluid px-lg-5">
                <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
                    <span className={`h4 fw-bold font-heading ${textColor} letter-spacing-2 text-uppercase mb-0`}>
                        PR<span className="fw-light">Design</span>
                    </span>
                </Link>

                <button className="navbar-toggler border-0 p-0" type="button" onClick={handleClick}>
                    {click ? <FaTimes className={textColor} size={20} /> : <FaBars className={textColor} size={20} />}
                </button>

                <div className={`collapse navbar-collapse ${click ? 'show bg-white p-4 mt-3 shadow-sm' : ''} justify-content-end`}>
                    <ul className="navbar-nav align-items-center gap-4">
                        {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                            <li className="nav-item" key={item}>
                                <Link 
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                                    className={`nav-link text-uppercase small fw-semibold ${click ? 'text-dark' : textColor}`}
                                    style={{ letterSpacing: '2px', fontSize: '11px' }}
                                    onClick={closeMobileMenu}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
