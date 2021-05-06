import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.routes}>
            <div className={s.menu}>
                <NavLink to="/pre-junior" activeClassName={s.active}>PreJunior</NavLink>
                <NavLink to="/junior" activeClassName={s.active}>Junior</NavLink>
            </div>
            <div className={s.btn}>Menu</div>
        </div>
    );
}

export default Header;
