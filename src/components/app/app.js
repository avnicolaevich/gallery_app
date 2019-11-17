import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GalleryCollection from "../gallery-collection/gallery-collection";
import Header from "../header/header";
import HomePage from "../pages/home-page/home-page";
import PageNotFound from "../pages/page-not-found/page-not-found";
import Search from "../search/search";

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
                            path={"/home"}
                            render={() => <HomePage/>}
                            exact
                        />
                        <Route
                            path={"/animal"}
                            render={() => <GalleryCollection id={3330452}/>}
                            exact
                        />
                        <Route
                            path={"/search"}
                            render={() => <Search/>}
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
