import React, {Component} from 'react';
import GalleryService from '../../service';
import RandomPhoto from "../random-photo/random-photo";
import GalleryCollection from "../gallery-collection/gallery-collection";

import './app.sass';

const service = new GalleryService();

class App extends Component {

    state = {
        collection: [],
        randomPhoto: {},
        page: 1
    };

    componentDidMount() {
        service.getPhotos(this.state.page)
            .then(collection => this.setState({collection}))
        service.getRandomPhoto()
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
