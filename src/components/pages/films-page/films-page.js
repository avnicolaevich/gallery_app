import React from 'react';

import Header from "../../header/header";
import GalleryCollection from "../../gallery-collection/gallery-collection";

const FilmsPage = ({id}) => {
    return (
        <>
            <Header/>
            <GalleryCollection category={"Films"} id={id}/>
        </>
    )
};

export default FilmsPage;