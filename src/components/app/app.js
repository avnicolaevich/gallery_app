import React, {Component} from 'react';
import RandomPhoto from "../random-photo/random-photo";
import GalleryCollection from "../gallery-collection/gallery-collection";
import Header from "../header/header";

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
                <Header/>
                <RandomPhoto/>
                <GalleryCollection/>
            </>
        );
    }
}

export default App;
