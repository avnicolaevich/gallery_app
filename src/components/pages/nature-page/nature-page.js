import React from 'react';

import Header from "../../header/header";
import GalleryCollection from "../../gallery-collection/gallery-collection";

const NaturePage = ({id}) => {
    return (
        <>
            <Header/>
            <GalleryCollection category={"Nature"} id={id}/>
        </>
    )
};

export default NaturePage;