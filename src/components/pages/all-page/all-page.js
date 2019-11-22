import React from 'react';

import Header from "../../header/header";
import GalleryCollection from "../../gallery-collection/gallery-collection";

const AllPage = ({id}) => {
    return (
        <>
            <Header/>
            <GalleryCollection id={id}/>
        </>
    );
};

export default AllPage;