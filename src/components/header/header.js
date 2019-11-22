import React from 'react';
import {NavLink} from "react-router-dom";

import './header.sass';

const categories = {
    'animals': 3330452,
    'films': 3679976,
    'foodstuffs': 4172814,
    'nature': 244339
};

const Header = () => {
    return (
        <header className={"header"}>
            <NavLink to={"/"} className={"header-logo"}>AVNicolaevich</NavLink>
            <nav className={"header-nav"}>
                <NavLink to={'/all/'} className={"header-nav-item"}><span>All</span></NavLink>
                <NavLink to={`/animals/${categories.animals}`}
                         className={"header-nav-item"}><span>Animals</span></NavLink>
                <NavLink to={`/films/${categories.films}`} className={"header-nav-item"}><span>Films</span></NavLink>
                <NavLink to={`/food&drink/${categories.foodstuffs}`}
                         className={"header-nav-item"}><span>Food&Drink</span></NavLink>
                <NavLink to={`/nature/${categories.nature}`} className={"header-nav-item"}><span>Nature</span></NavLink>
            </nav>
            <NavLink to={"/search/"} className={"header-search"}>Search</NavLink>
        </header>
    );
};

export default Header;