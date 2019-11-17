import React from 'react';

const GalleryCollection = ({collection}) => {
    return (
        <div className={"collection-wrapper"}>
            <h2>Collection of photos</h2>
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
        </div>
    );
};

export default GalleryCollection;