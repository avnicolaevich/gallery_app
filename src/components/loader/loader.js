import React from 'react';

import './loader.sass';

const Loader = ({loading, showMorePhotos}) => {
    return (
        <div className={"loader-wrapper"}>
            <span
                onClick={() => showMorePhotos()}
                className={`glyphicon glyphicon-refresh loader ${loading? "active" : ""}`}>
            </span>
        </div>
    );
};

export default Loader;