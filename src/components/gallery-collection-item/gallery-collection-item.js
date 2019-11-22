import React from 'react';
import { withRouter } from "react-router";

import './gallery-collection-item.sass';

const GalleryCollectionItem = ({collection, history}) => {
    return (
        <div className={"collection-container"}>
            {
                collection.map(el => {
                    return(
                        <div
                            onClick={() => history.push(`/photo/${el.id}`)}
                            key={el.id}
                            className={"collection-item"}>
                            <figure>
                                <img src={el.urls.small} alt={el.alt_description} />
                            </figure>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default withRouter(GalleryCollectionItem);