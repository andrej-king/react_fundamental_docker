import React from 'react';
import cl from './Navbar.module.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={cl.navbar}>
            <div className={cl.navbar__links}>
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;
