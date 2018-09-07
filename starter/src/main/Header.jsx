import React from 'react';
import MainNav from './MainNav';
import Title from './Title';

import './Header.css';

const Header = () => {
    return (
        <div className="top-bar" id="topHeader">
            <Title />
			<MainNav/>
        </div>
    );
}

export default Header;
