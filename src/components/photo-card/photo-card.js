import React, {Component} from 'react';
import { withRouter } from "react-router";

import Header from "../header/header";
import Preloader from "../preloader/preloader";
import GalleryService from "../../service";

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
        const { urls={}, user={}, created_at='', description='' } = photo;
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
                            <p className={"username"}>{name}</p>
                            <p className={"location"}>
                                {location ? <span>Location: <strong>{location}</strong></span> : ''}
                            </p>
                            <p className={"created-at"}>
                                {
                                    created_at ?
                                    <span>Created: <strong>{created_at.slice(0, 10)}</strong></span> : ''
                                }
                            </p>
                            <p className={"description"}>
                                {description ? <span>Description: <strong>{description}</strong></span> : ''}
                            </p>
                        </div>
                        <div className={"link"}
                           onClick={() => history.push(`/user/${username}/`)}
                        >More about:
                            <p>{name}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(PhotoCard);