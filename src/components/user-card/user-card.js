import React, {Component} from 'react';
import {withRouter} from "react-router";

import Header from "../header/header";
import Preloader from "../preloader/preloader";
import GalleryService from "../../service";

import './user-card.sass';

const service = new GalleryService();

class UserCard extends Component {

    state = {
        user: false
    };

    componentDidMount() {
        service.getUserInfo(this.props.username)
            .then((user) => this.setState({user}))
    }

    render() {
        const { history } = this.props;
        const { user }  = this.state;
        const { bio='', location='', name='', profile_image={}, portfolio_url='' } = user;
        if(!user) return <Preloader/>;
        return (
            <>
                <Header/>
                <div className={"user-card"}>
                    <div
                        onClick={() => history.goBack()}
                        className="backTo"
                    >
                        <span className={"glyphicon glyphicon-circle-arrow-left"}></span>
                    </div>
                    <div className={"image"}>
                        <img src={profile_image.large} alt={name}/>
                    </div>
                    <div className={"user-card-info"}>
                        <p className={"name"}>{name}</p>
                        <p className={"location"}><span>Location:</span> {location? location : ''}</p>
                        <p className={"bio"}><span>Biography: </span>{bio ? bio : ''}</p>
                        <p className={"portfolio"}>{portfolio_url}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(UserCard);