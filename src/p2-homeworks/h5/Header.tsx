import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./RoutesItems";
import classes from "./Header.module.css";

function Header() {


    return (
        <div className={classes.dropdown}>
            <button className={classes.dropBtn}>Menu</button>
            <div className={classes.dropdownContent}>
                <NavLink className={classes.link} to={PATH.PRE_JUNIOR}>Pre Junior</NavLink>
                <NavLink className={classes.link} to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink className={classes.link} to={PATH.JUNIOR_PLUS}>Junior Plus</NavLink>
            </div>
        </div>
    )
}

export default Header
