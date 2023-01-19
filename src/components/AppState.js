import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react-lite";
import classNames from "classnames";

import '../assets/css/AppState.css';
import '../assets/css/Main/Colors.css';
import Done_Icon from '../assets/icons/Done'
import Error_Icon from '../assets/icons/Error';
import UserData from '../store/data'

const AppState = observer(() => {
    return (
        <>
            <div className="StatusWrapper">
                {!UserData.error && <Done_Icon className="StatusIcon"/>}
                {UserData.error && <Error_Icon className="StatusIcon sync-error"/>}
                <div className="StatusContainer">
                    <div className={classNames('StatusMessage', { 'sync-error': UserData.error })}>
                        {!UserData.error && <p>Synced</p>}
                        {UserData.error && <p>Cloud Error</p>}
                    </div>
                    <div className="StatusBar">
                    </div>
                </div>
            </div>
        </>
    )
})

export default AppState;