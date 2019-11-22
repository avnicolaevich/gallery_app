import React, {Component} from 'react';
import GalleryService from "../../service";
import GalleryCollectionItem from "../gallery-collection-item/gallery-collection-item";
import Loader from "../loader/loader";

import './search.sass';

const service = new GalleryService();

export default class Search extends Component {

    state = {
        value: '',
        searchPhoto: [],
        page: 1,
        loading: false
    };

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {value, page} = this.state;
        service.getSearchPhoto(value, page)
            .then(searchPhoto => this.setState(
                {
                    searchPhoto: searchPhoto.results,
                    page: page + 1,
                    loading: false
                }
            ));
    };

    showMorePhotos = () => {
        const {page, value, searchPhoto} = this.state;
        this.setState({loading: true});
        service.getSearchPhoto(value, page)
            .then(data => {
                this.setState({
                    searchPhoto: [
                        ...searchPhoto,
                        ...data.results
                    ],
                    page: page + 1,
                    loading: false
                })
            })
    };

    render() {
        const {value, searchPhoto, loading} = this.state;
        const {history} = this.props;
        return (
            <>
                <div className={"search-wrapper"}>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <input
                            onChange={(e) => this.handleChange(e)}
                            value={value}
                            type="text"
                            name={"search"}
                            autoComplete={"off"}
                            className={"search-input"}
                            placeholder={"Search..."}/>
                        <button className={"search-input-btn"}>
                            <i className={"glyphicon glyphicon-search"}></i>
                        </button>
                    </form>
                </div>
                <GalleryCollectionItem collection={searchPhoto} history={history}/>
                <Loader loading={loading} showMorePhotos={this.showMorePhotos}/>
            </>
        );
    }
}