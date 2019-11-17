import React from 'react';

import './gallery-collection-item.sass';

const GalleryCollectionItem = ({collection}) => {
    return (
        <div className={"collection-container"}>
            {
                collection.map(el => {
                    return(
                        <div key={el.id} className={"collection-item"}>
                            <img src={el.urls.small} alt={el.alt_description} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default GalleryCollectionItem;