import React from 'react';
import GalleryCollection from "../../gallery-collection/gallery-collection";

const AnimalsPage = ({id}) => {
    return (
        <>
            <GalleryCollection category={"Animals"} id={id}/>
        </>
    );
};

export default AnimalsPage;