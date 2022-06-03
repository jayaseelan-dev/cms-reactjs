import React from 'react';

import './Header.scss';

export default function Header(props) {
    const displayStyle = {
        'justifyContent': props?.username ? 'space-between' : 'center'
    };

    return (
        <header className="app-header" style={displayStyle}>
            <h4>Corporate Management System</h4>
            { props?.username && <h5>{ props.username }</h5> }
        </header>
    );
}