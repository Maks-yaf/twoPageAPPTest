import React from 'react';
import style from './NavBar.module.css'
const NavBar = () => {
    return (
        <div className={style.navbar}>
            <h3>Best Application</h3>
            <button className={style.button}>Sign In</button>
        </div>
    );
};

export default NavBar;