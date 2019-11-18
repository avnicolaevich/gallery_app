import React, {Component} from 'react';
import GalleryService from "../../service";

import './random-photo.sass';

const service = new GalleryService();

export default class RandomPhoto extends Component {

    state = {
        randomPhoto: {}
    };

    componentDidMount() {
        service.getRandomPhoto()
            .then(randomPhoto => this.setState({randomPhoto}))
    }

    render() {
        const {urls={}, created_at='', likes=false, user={}} = this.state.randomPhoto;
        return (
            <div className={"home-page"} style={{backgroundImage: `url(${urls.full})`}}>
                <div className="home-page__collection">
                    <h1>{user.name}</h1>
                    <span>{created_at.slice(0, 10)}</span>
                </div>
                <div className={"user-likes"}><span>{likes}</span></div>
            </div>
        );
    }
};