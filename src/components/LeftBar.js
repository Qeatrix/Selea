import classNames from "classnames";
import React, { useState } from "react";

import '../assets/css/LeftBar.css';
import Categories from '../assets/data/categories.json'
import store from '../store/data'

import LoginList from './LoginsList';
import AppStatus from './AppState';

import AllElements_Icon from '../assets/icons/Drawer.svg';
import Fav_Icon from '../assets/icons/Star.svg';
import Trash_Icon from '../assets/icons/Trash.svg';

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

    const categoryIcon = (data) => {
        if (data.icon == 'AllElements_Icon') {
            return AllElements_Icon;
        } else if (data.icon == 'Fav_Icon') {
            return Fav_Icon;
        } else if (data.icon == 'Trash_Icon') {
            return Trash_Icon;
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
                                <img className="CategoryIcon" src={categoryIcon(category)} alt="Login Icon"></img>
                                <p className="CategoryName">{category.name}</p>    
                            </div>    
                        </div>
                    )}
                </div>
            </div>
            {activeCategory === 0 && <LoginList store={store}/>}
        </div>
    )
}

export default LeftBar;