import React from 'react';
import './styles.css';

const NavPill = () => {
    return (
        <div className="nav-pill-wrapper">
            <div className="nav-indicator-glow"></div>
            <div className="nav-pill">
                <a href="#" className="nav-toggle work w-inline-block">
                    <div className="text-nav-toggle">Work</div>
                </a>
                <a data-w-id="b60fd352-a0aa-70fb-ab78-6a5d05bbacd8" href="/info" className="nav-toggle w-inline-block">
                    <div className="text-nav-toggle">Info</div>
                </a>
                <div className="nav-indicator-pill"></div>
            </div>
        </div>
    );
}

export default NavPill;