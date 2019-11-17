import React, {Component} from 'react';
import GalleryService from "../../service";
import GalleryCollectionItem from "../gallery-collection-item/gallery-collection-item";

import './gallery-collection.sass';

const service = new GalleryService();

export default class GalleryCollection extends Component {

    state = {
        collection: [],
        page: 1
    };

    componentDidMount() {
        service.getPhotos(this.state.page)
            .then(collection => {
                this.setState({
                    collection,
                    page: this.state.page + 1
                })
            });
    };

    showMorePhotos = () => {
        service.getPhotos(this.state.page)
            .then(collection => {
                this.setState({
                    collection: [
                        ...this.state.collection,
                        ...collection
                    ],
                    page: this.state.page + 1
                })
            })
    };

    render() {
        const {collection} = this.state;
        return (
            <div className={"collection-wrapper"}>
                <h2>Collection of photos</h2>
                <GalleryCollectionItem collection={collection}/>
                <div className={"loader-wrapper"}>
                    <span onClick={() => this.showMorePhotos()} className={"glyphicon glyphicon-refresh loader"}></span>
                </div>
            </div>
        );
    }
};