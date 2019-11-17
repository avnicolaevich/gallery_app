import React from 'react';
import GalleryCollection from "../../gallery-collection/gallery-collection";
import RandomPhoto from "../../random-photo/random-photo";

import './home-page.sass';

const HomePage = () => {
    return (
        <>
            <RandomPhoto/>
            <GalleryCollection/>
        </>
    );
};

export default HomePage;