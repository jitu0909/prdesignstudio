import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';

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
    const navBackground = scroll ? 'bg-white border-bottom py-3 shadow-sm' : (isHome ? 'bg-transparent py-4' : 'bg-white border-bottom py-3');
    const isLightMode = !(scroll || !isHome); // True if text should be white (transparent background)
    const textColor = isLightMode ? 'text-white' : 'text-dark';
    
    return (
        <nav className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${navBackground}`}>
            <div className="container-fluid px-lg-5">
                <Link to="/" className="navbar-brand d-flex align-items-center" onClick={closeMobileMenu}>
                    <Logo light={isLightMode} />
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
