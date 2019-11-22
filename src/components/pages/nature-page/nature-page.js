import React from 'react';

import GalleryCollection from "../../gallery-collection/gallery-collection";
import Header from "../../header/header";

const NaturePage = ({id}) => {
    return (
        <>
            <Header/>
            <GalleryCollection category={"Nature"} id={id}/>
        </>
    )
};

export default NaturePage;