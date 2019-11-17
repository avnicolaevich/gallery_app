import React from 'react';

import './random-photo.sass';

const RandomPhoto = ({randomPhoto}) => {
    const {urls={}, created_at='', likes=false, description='', user={}} = randomPhoto;
    return (
        <div className={"home-page"} style={{backgroundImage: `url(${urls.full})`}}>
            <div className="home-page__collection">
                <h1>{user.name}</h1>
                <span>{created_at.slice(0, 10)}</span>
                <div>{description}</div>
            </div>
            <div className={"user-likes"}><span>{likes}</span></div>
        </div>
    );
};

export default RandomPhoto;