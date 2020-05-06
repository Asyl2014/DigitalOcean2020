import React from 'react';

import UserToolbar from './UserToolbar';

function Header(props) {
    const showUserToolbar = props.showUserToolbar;
    return (
        <header>
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="/">
                    <h1>Buzzle</h1>
                </a>
                {showUserToolbar &&
                    <UserToolbar />
                }
            </nav>
        </header>
    );
}

export default Header;
