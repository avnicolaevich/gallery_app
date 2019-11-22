import React from 'react'

import "./preloader.sass";

const Preloader = () => {
    return(
        <div className={"preloader"}>
            <div className={"preloader-item"}>
                <div></div><div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
        </div>

    )
};

export default Preloader;