import React, {Component} from 'react';
import { withRouter } from "react-router";

import GalleryService from "../../service";
import Preloader from "../preloader/preloader";
import Header from "../header/header";

import './photo-card.sass';

const service = new GalleryService();

class PhotoCard extends Component {

    state = {
        photo: false
    };

    componentDidMount() {
        service.getOnePhoto(this.props.id)
            .then(photo => this.setState({photo}))
    }

    render() {
        const { photo } = this.state;
        const { urls={}, user={}, created_at='', likes='', description='' } = photo;
        const { location, name, username } = user;
        const { history } = this.props;
        if(!photo) return <Preloader/>;
        return(
            <>
                <Header/>
                <div className={"photo-card"}>
                    <div
                        onClick={() => history.goBack()}
                        className="backTo"
                    >
                        <span className={"glyphicon glyphicon-circle-arrow-left"}></span>
                    </div>
                    <div className={"photo-card-image"}>
                        <img src={urls.small} alt={description}/>
                    </div>
                    <div className={"photo-card-info"}>
                        <div className={"user-info"}>
                            <h2 className={"username"}>{name}</h2>
                            <p className={"location"}>{location ? `Location: ${location}` : ''}</p>
                            <p className={"created-at"}>{ created_at ? `Created: ${created_at.slice(0, 10)}` : ''}</p>
                            <div className={"description"}>{description ? `Description: ${description}` : ''}</div>
                        </div>
                        <div className={"likes"}><span className={"likes-number"}>{likes}</span></div>
                        <span
                            className={"link"}
                            onClick={() => history.push(`/user/${username}/`)}
                        >More information about {name}</span>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(PhotoCard);