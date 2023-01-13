import classNames from "classnames";
import React, { useState } from "react";

import '../assets/css/LeftBar.css';
import Categories from '../assets/data/categories.json'

import LoginList from './LoginsList';

import AllElements_Icon from '../assets/icons/Login.svg';

function LeftBar() {
    const [activeCategory, setActiveCategory] = useState(0);
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleClick = (index) => {
        setActiveCategory(index);
        setHoveredCategory(null);
    }

    const handleMouseEnter = (index) => {
        if (index !== activeCategory) {
            setHoveredCategory(index);
        }
    }

    return (
        <div className="ContentWrapper">
            <div className="LeftBar">
                <div className="Categories">
                    {Categories.map((category, index) => 
                        <div
                            key={category.id}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => setHoveredCategory(null)}
                            className="Category"
                        >
                            <div className={classNames('CategoryContainer',
                                { 'active-category': index === activeCategory },
                                { 'hovered-category': index === hoveredCategory })}
                            >
                                <img className="CategoryIcon" src={AllElements_Icon} alt="Login Icon"></img>
                                <p className="CategoryName">{category.name}</p>    
                            </div>    
                        </div>
                    )}
                </div>
            </div>
            {activeCategory === 0 && <LoginList/>}
        </div>
    )
}

export default LeftBar;