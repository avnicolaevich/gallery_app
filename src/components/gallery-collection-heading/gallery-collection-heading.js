import React from 'react';

import './gallery-collection-heading.sass';

const GalleryCollectionHeading = ({category}) => {
    return (
        <>
            {
                category ?
                    <h2>Collection of <span>{category}</span> photos</h2> :
                    <h2>Collection of photos</h2>
            }
        </>
    );
};

export default GalleryCollectionHeading;