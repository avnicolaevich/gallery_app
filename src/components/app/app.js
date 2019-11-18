import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../header/header";
import HomePage from "../pages/home-page/home-page";
import PageNotFound from "../pages/page-not-found/page-not-found";
import SearchPage from "../pages/search-page/search-page";
import NaturePage from "../pages/nature-page/nature-page";
import FoodDrink from "../pages/food-drink-page/food-drink-page";
import AnimalsPage from "../pages/animals-page/animals-page";
import FilmsPage from "../pages/films-page/films-page";

import './app.sass';

class App extends Component {

    state = {
        error: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({error: true})
    }

    render() {
        const {error} = this.state;
        if(error) return <div className={"error"}>Something went wrong...</div>;
        return (
            <>
                <Router>
                    <Header/>
                    <Switch>
                        <Route
                            path={"/"}
                            render={() => <HomePage/>}
                            exact
                        />
                        <Route
                            path={"/animals"}
                            render={() => <AnimalsPage id={3330452}/>}
                            exact
                        />
                        <Route
                            path={"/films"}
                            render={() => <FilmsPage id={3679976}/>}
                            exact
                        />
                        <Route
                            path={"/food&drink"}
                            render={() => <FoodDrink id={4172814}/>}
                            exact
                        />
                        <Route
                            path={"/nature"}
                            render={() => <NaturePage id={244339}/>}
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
                </Router>
            </>
        );
    }
}

export default App;
