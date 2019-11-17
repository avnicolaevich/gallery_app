import React, {Component} from 'react';
import GalleryService from "../../service";
import GalleryCollectionItem from "../gallery-collection-item/gallery-collection-item";

import './gallery-collection.sass';

const service = new GalleryService();

export default class GalleryCollection extends Component {

    state = {
        collection: [],
        page: 1,
        loading: true
    };

    componentDidMount() {
        const {page} = this.state;
        const {id} = this.props;
        service.getPhotos(page, id)
            .then(collection => {
                this.setState({
                    collection,
                    page: page + 1,
                    loading: false
                })
            });
    };

    showMorePhotos = () => {
        const {page, collection} = this.state;
        const {id} = this.props;
        this.setState({loading: true});
        service.getPhotos(page, id)
            .then(data => {
                this.setState({
                    collection: [
                        ...collection,
                        ...data
                    ],
                    page: page + 1,
                    loading: false
                })
            })
    };

    render() {
        const {collection, loading} = this.state;
        return (
            <div className={"collection-wrapper"}>
                <h2>Collection of photos</h2>
                <GalleryCollectionItem collection={collection}/>
                <div className={"loader-wrapper"}>
                    <span
                        onClick={() => this.showMorePhotos()}
                        className={`glyphicon glyphicon-refresh loader ${loading? "active" : ""}`}>
                    </span>
                </div>
            </div>
        );
    }
};