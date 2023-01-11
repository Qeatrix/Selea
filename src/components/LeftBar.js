import React from "react";

import '../assets/css/LeftBar.css';
import Categories from '../assets/data/categories.json'

import AllElements_Icon from '../assets/icons/Login.svg';

function LeftBar() {
    //return (
        //<>
            //<div className="LeftBar">
                //<div className="Categories">
                    //<div className="Category">
                        //<div className="CategoryContainer">
                            //<img className="CategoryIcon" src={AllElements_Icon}/>
                            //<p className="CategoryName">All Elements</p>
                        //</div>
                    //</div>
                //</div>
            //</div>
        //</>

    //)

    return (
        <div className="LeftBar">
            <div className="Categories">
                {Categories.map((category) => 
                    <div key={category.id} className="Category">
                        <div className="CategoryContainer">
                            <img className="CategoryIcon" src={AllElements_Icon} alt="Login Icon"></img>
                            <p className="CategoryName">{category.name}</p>    
                        </div>    
                    </div>
                )}
            </div>
        </div>
    )
}

export default LeftBar;