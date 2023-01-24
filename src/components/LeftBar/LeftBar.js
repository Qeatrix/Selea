import classNames from "classnames";
import React, { useState } from "react";

import '../../assets/css/LeftBar.css';
import Categories from '../../assets/data/categories.json'
import store from '../../store/data'

import LoginList from './Categories/AllElements/LoginsList';
import AppStatus from '../AppState';

import IconProvider from "./IconProvider";

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
                <AppStatus/>
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
                                <IconProvider name={category.icon} option={index === activeCategory ? 'solid' : 'normal'} fillColor={index === activeCategory ? 'white' : 'black'} />
                                <p className={classNames('CategoryName', { 'active-category-name': index === activeCategory })}>{category.name}</p>    
                            </div>    
                        </div>
                    )}
                </div>
            </div>
            {activeCategory === 1 && <LoginList store={store}/>}

        </div>
    )
}

export default LeftBar;