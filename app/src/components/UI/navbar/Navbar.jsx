import React, {useContext} from 'react';
import cl from './Navbar.module.css'
import {Link} from "react-router-dom";
import MyButton from '../button/MyButton'
import {AuthContext} from '../../../context'

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    return (
        <div className={cl.navbar}>
            <MyButton onClick={() => setIsAuth(false)}>
                Выйти
            </MyButton>
            <div className={cl.navbar__links}>
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;
