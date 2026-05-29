import React from 'react';
import './Divider.css';
import dividerImg from '../assets/images/section_divider.png';

const Divider = () => {
    return (
        <div className="section-divider">
            <div className="divider-container">
                <img src={dividerImg} alt="Section Divider" className="divider-img" />
            </div>
        </div>
    );
};

export default Divider;
