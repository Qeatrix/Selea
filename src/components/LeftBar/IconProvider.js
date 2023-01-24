import React from 'react';

import DASHBOARD_ICON from '../../assets/icons/Dashboard';
import ALLELEMENTS_ICON from '../../assets/icons/AllElements';
import FAVOURITE_ICON from '../../assets/icons/Favourite';
import TRASH_ICON from '../../assets/icons/Trash';

const IconProvider = ({ name, option, fillColor }) => {
    switch (name) {
        case 'Dashboard_Icon':
            return <DASHBOARD_ICON option={option} fillColor={fillColor} className={'CategoryIcon'} />
        case 'AllElements_Icon':
            return <ALLELEMENTS_ICON option={option} fillColor={fillColor} className={'CategoryIcon'} />
        case 'Favourite_Icon':
            return <FAVOURITE_ICON option={option} fillColor={fillColor} className={'CategoryIcon'} />
        case 'Trash_Icon':
            return <TRASH_ICON option={option} fillColor={fillColor} className={'CategoryIcon'} />
        default:
            return null;
    }
}

export default IconProvider;