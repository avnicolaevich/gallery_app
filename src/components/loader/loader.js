import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import './loader.sass';

const Loader = ({page, loading, showMorePhotos}) => {
    return (
        <div className={ page === 1 ? "loader-wrapper disabled" : "loader-wrapper"}>
            <FontAwesomeIcon
                icon={faSpinner}
                onClick={() => showMorePhotos()}
                className={`loader ${loading? "active" : ""}`}
            />
        </div>
    );
};

export default Loader;