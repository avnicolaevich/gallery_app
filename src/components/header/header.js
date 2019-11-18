import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import './header.sass';

class Header extends Component {
    render() {
        return (
            <div className={"header"}>
                <NavLink to={'/'} className={"item"}><span>All</span></NavLink>
                <NavLink to={'/animals'} className={"item"}><span>Animals</span></NavLink>
                <NavLink to={'/films'} className={"item"}><span>Films</span></NavLink>
                <NavLink to={'/food&drink'} className={"item"}><span>Food&Drink</span></NavLink>
                <NavLink to={'/nature'} className={"item"}><span>Nature</span></NavLink>
                <NavLink to={'/search'} className={"item"}><span>Search</span></NavLink>
            </div>
        );
    }
}

export default Header;