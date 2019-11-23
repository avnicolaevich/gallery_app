import React from 'react';
import {Switch, Route} from "react-router-dom";

import HomePage from "../pages/home-page/home-page";
import AllPage from "../pages/all-page/all-page";
import AnimalsPage from "../pages/animals-page/animals-page";
import FilmsPage from "../pages/films-page/films-page";
import FoodDrink from "../pages/food-drink-page/food-drink-page";
import NaturePage from "../pages/nature-page/nature-page";
import SearchPage from "../pages/search-page/search-page";
import PageNotFound from "../pages/page-not-found/page-not-found";
import PhotoCard from "../photo-card/photo-card";
import UserCard from "../user-card/user-card";

import './app.sass';

const App = () => {
    return (
        <>
            <Switch>
                <Route
                    path={"/"}
                    render={() => <HomePage/>}
                    exact
                />
                <Route
                    path={"/all/"}
                    render={({match}) => <AllPage id={match.params.id}/>}
                    exact
                />
                <Route
                    path={"/animals/:id"}
                    render={({match}) => <AnimalsPage id={match.params.id}/>}
                    exact
                />
                <Route
                    path={"/films/:id"}
                    render={({match}) => <FilmsPage id={match.params.id}/>}
                    exact
                />
                <Route
                    path={"/food&drink/:id"}
                    render={({match}) => <FoodDrink id={match.params.id}/>}
                    exact
                />
                <Route
                    path={"/nature/:id"}
                    render={({match}) => <NaturePage id={match.params.id}/>}
                    exact
                />
                <Route
                    path={"/photo/:id"}
                    render={({match}) => <PhotoCard id={match.params.id}/>}
                    exact
                />
                <Route
                    path={"/user/:username"}
                    render={({match}) => <UserCard username={match.params.username}/>}
                    exact
                />
                <Route
                    path={"/search"}
                    render={() => <SearchPage/>}
                    exact
                />
                <Route
                    render={() => <PageNotFound/>}
                />
            </Switch>
        </>
    );
};

export default App;
