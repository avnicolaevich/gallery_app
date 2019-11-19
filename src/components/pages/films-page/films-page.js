import React from 'react';

import GalleryCollection from "../../gallery-collection/gallery-collection";

const FilmsPage = ({id}) => {
    return (
        <GalleryCollection category={"Films"} id={id}/>
    );
};

export default FilmsPage;