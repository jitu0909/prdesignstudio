import React from 'react';

const Logo = ({ className = "", light = false }) => {
    // Elegant interlocking/geometric monogram style
    return (
        <div className={`d-flex align-items-center ${className}`}>
            <div className="position-relative d-flex align-items-center justify-content-center border border-2 me-3" 
                 style={{ 
                     width: '45px', 
                     height: '45px', 
                     borderColor: light ? '#fff' : '#000',
                     color: light ? '#fff' : '#000'
                 }}>
                <span className="fw-bold" style={{ fontSize: '20px', letterSpacing: '-2px', fontFamily: 'Playfair Display, serif' }}>
                    PR
                </span>
            </div>
            <div className="d-flex flex-column justify-content-center">
                <span className="fw-bold text-uppercase" style={{ fontSize: '14px', letterSpacing: '2px', lineHeight: '1', color: light ? '#fff' : '#000' }}>
                    PR Design
                </span>
                <span className="text-uppercase" style={{ fontSize: '8px', letterSpacing: '4px', color: light ? '#d4af37' : '#997b2f' }}>
                    Studio
                </span>
            </div>
        </div>
    );
};

export default Logo;
