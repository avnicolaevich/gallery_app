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
        const { profile_image: image,
                name, location, bio,
                portfolio_url: portfolio,
                followers_count: followers,
                following_count: following,
                instagram_username: instagram,
                total_photos: photos,
                total_likes: likes,
                updated_at: updated } = user;
        if(!user) return <Preloader/>;
        console.log(user)
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
                        <img src={image.large} alt={name}/>
                    </div>
                    <div className={"user-card-info"}>
                        <p className={"name"}>{name}</p>
                        <p><span>Location: </span>{location? location : 'unknown'}</p>
                        <p>
                            <span>Biography: </span>
                            {bio ? bio : 'in the process'}
                        </p>
                        <p>
                            <span>Portfolio: </span>
                            <a href={portfolio} target={"_blank"}>{portfolio ? portfolio : 'in the process'}</a>
                        </p>
                        <p><span>Followers: </span> {followers ? followers : 'nto yet'}</p>
                        <p><span>Following: </span> {following ? following : 'not yet'}</p>
                        <p className={"instagram"}>
                            <span>Instagram: </span>
                            {instagram ? instagram : 'not yet'}
                        </p>
                        <p><span>Total number of photos: </span> {photos ? photos : 'not yet'}</p>
                        <p><span>Total number of likes: </span> {likes ? likes : 'not yet'}</p>
                        <p><span>Last updated: </span> {updated ? updated.slice(0, 10) : 'information relevant'}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(UserCard);