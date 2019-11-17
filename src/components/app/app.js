import React, {Component} from 'react';
import GalleryService from '../../service';
import RandomPhoto from "../random-photo/random-photo";
import GalleryCollection from "../gallery-collection/gallery-collection";

import './app.css';

const service = new GalleryService();

class App extends Component {

    state = {
        collection: [],
        randomPhoto: {}
    };

    componentDidMount() {
        service.getResponseApi('/photos')
            .then(collection => this.setState({collection}))
        service.getResponseApi('/photos/random')
            .then(randomPhoto => this.setState({randomPhoto}))
    }

    render() {
        const {collection, randomPhoto} = this.state;
        return (
            <>
                <RandomPhoto randomPhoto={randomPhoto}/>
                <GalleryCollection collection={collection}/>
            </>
        );
    }
}

export default App;
