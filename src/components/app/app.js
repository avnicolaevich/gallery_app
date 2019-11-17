import React, {Component} from 'react';
import GalleryService from '../../service';
import RandomPhoto from "../random-photo/random-photo";
import GalleryCollection from "../gallery-collection/gallery-collection";

import './app.sass';

const service = new GalleryService();

class App extends Component {

    state = {
        randomPhoto: {},
        error: false
    };

    componentDidMount() {
        service.getRandomPhoto()
            .then(randomPhoto => this.setState({randomPhoto}))
    }

    componentDidCatch(error, errorInfo) {
        this.setState({error: true})
    }

    render() {
        const {error, randomPhoto} = this.state;
        if(error) return <div className={"error"}>Something went wrong...</div>;
        return (
            <>
                <RandomPhoto randomPhoto={randomPhoto}/>
                <GalleryCollection/>
            </>
        );
    }
}

export default App;
