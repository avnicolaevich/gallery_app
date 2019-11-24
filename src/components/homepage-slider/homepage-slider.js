import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import Preloader from "../preloader/preloader";
import GalleryService from "../../service";

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
                    <p className={"homepage-content-logo"}>
                        { `{AVNicolaevich}` }
                    </p>
                    <nav className={"homepage-content-nav"}>
                        <NavLink
                            to={'/all/'}
                            title={"All categories"}
                            className={"homepage-content-link"}>
                            <FontAwesomeIcon icon={faEye}/>
                            View all photos
                        </NavLink>
                    </nav>
                </div>
            </div>
        );
    }
};