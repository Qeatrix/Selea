import React from 'react';
import IconProvider from './IconProvider';

const Category = ({ id, name, icon }) => {
    return (
        <div>
            <IconProvider name={icon} />
        </div>
    )
}