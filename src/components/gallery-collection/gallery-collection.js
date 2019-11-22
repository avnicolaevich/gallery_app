import React, {Component} from 'react';

import GalleryService from "../../service";
import GalleryCollectionHeading from "../gallery-collection-heading/gallery-collection-heading";
import GalleryCollectionItem from "../gallery-collection-item/gallery-collection-item";
import Loader from "../loader/loader";

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
        const {category, history} = this.props;
        return (
            <div className={"collection-wrapper"}>
                <GalleryCollectionHeading category={category}/>
                <GalleryCollectionItem collection={collection} history={history}/>
                <Loader loading={loading} showMorePhotos={this.showMorePhotos}/>
            </div>
        );
    }
};