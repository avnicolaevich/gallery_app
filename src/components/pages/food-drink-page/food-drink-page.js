import React from 'react';

import Header from "../../header/header";
import GalleryCollection from "../../gallery-collection/gallery-collection";

const FoodDrink = ({id}) => {
    return (
        <>
            <Header/>
            <GalleryCollection category={"Food&Drink"} id={id}/>
        </>
    )
};

export default FoodDrink;