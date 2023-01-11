import React from 'react';
import { useState } from 'react';
import Database from '../database.json';
import '../assets/css/LoginCards.css'

import Login_Icon from '../assets/icons/Login.svg';

//function DataRenderer() {
    //const [active, setActive] = useState(Database[0]);

    //const buttonClick = (e) => {
        //e.setActive(!active)
    //}

    //const enableHoverBackground = (e) => {
        //e.target.style.backgroundColor = 'var(--item-hover-bg)'
    //}

    //const disableHoverBackground = (e) => {
        //e.target.style.backgroundColor = 'transparent'
    //}

    //return (
        //<ButtonGroup>
            //{
                //Database.map((database) => {
                    //return(
                        //<div className="LoginCard">
                            //<div
                                //key={database}
                                //active={active === database}
                                //onMouseEnter={enableHoverBackground}
                                //onMouseLeave={disableHoverBackground} 
                                //onClick={() => setActive(database)}
                                //className="LoginCardItems"
                            //>
                                //<img src={Login_Icon}></img>
                                //<div className="TextZone">
                                    //<p>{database.name}</p>
                                    //<div>{database.login}</div>
                                //</div>
                            //</div>
                        //</div>
                    //)
                //})
            //}
        //</ButtonGroup>
    //)
//}

function DataRenderer() {
    const [active, setActive] = useState(null);

    function tabHandle(e) {
        setActive(e);
        console.log(e);
        e.div.target.style.backgroundColor = 'var(--item-selected-bg)'
    }

    const enableHoverBackground = (e) => {
        if (e.target != active) {
            e.target.style.backgroundColor = 'var(--item-hover-bg)'
        }
    }

    const disableHoverBackground = (e) => {
        if (e.target != active) {
            e.target.style.backgroundColor = 'transparent'
        }
    }

    return (
        <div>
            {
                Database.map((card, i) => {
                    return(
                        <div key={card.id} onClick={tabHandle} className="LoginCard">
                            <div
                                onMouseEnter={enableHoverBackground}
                                onMouseLeave={disableHoverBackground} 
                                className="LoginCardItems"
                            >
                                <img src={Login_Icon}></img>
                                <div className="TextZone">
                                    <p>{card.name}</p>
                                    <div>{card.login}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DataRenderer;