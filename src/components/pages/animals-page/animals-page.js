import React from 'react';

import Header from "../../header/header";
import GalleryCollection from "../../gallery-collection/gallery-collection";

const AnimalsPage = ({id}) => {
    return (
        <>
            <Header/>
            <GalleryCollection category={"Animals"} id={id}/>
        </>
    )
};

export default AnimalsPage;