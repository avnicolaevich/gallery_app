import React from 'react';

import GalleryCollection from "../../gallery-collection/gallery-collection";

const FoodDrink = ({id}) => {
    return(
        <GalleryCollection category={"Food&Drink"} id={id}/>
    )
};

export default FoodDrink;