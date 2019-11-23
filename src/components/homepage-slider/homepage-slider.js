import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import GalleryService from "../../service";
import Preloader from "../preloader/preloader";
import './homepage-slider.sass';

const service = new GalleryService();

export default class HomepageSlider extends Component {

    state = {
        photo: false
    };

    componentDidMount() {
        service.getRandomPhoto()
            .then(photo => this.setState({photo}))
    }

    render() {
        const {urls} = this.state.photo;
        if(!urls) return <Preloader/>;
        return (
            <div className={"homepage"} style={{backgroundImage: `url(${urls.regular})`}}>
                <div className={"homepage-content"}>
                    <p className={"homepage-logo"}>AVNicolaevich</p>
                    <nav className={"homepage-nav"}>
                        <NavLink to={'/all/'} title={"All categories"} className={"homepage-link"}>View all photos</NavLink>
                    </nav>
                </div>
            </div>
        );
    }
};