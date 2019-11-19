import React from 'react';

import GalleryCollection from "../../gallery-collection/gallery-collection";

const NaturePage = ({id}) => {
    return(
        <GalleryCollection category={"Nature"} id={id}/>
    )
};

export default NaturePage;