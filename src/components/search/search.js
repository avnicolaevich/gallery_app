import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch , faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";

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
        loading: false,
        warning: false
    };

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {value, page} = this.state;
        if (!value) return this.setState({warning: 'You have not specified search parameters'});
        service.getSearchPhoto(value, page)
            .then(searchPhoto => this.setState(
                {
                    searchPhoto: searchPhoto.results,
                    page: page + 1,
                    loading: false,
                    warning: ''
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
        const {value, searchPhoto, loading, page, warning} = this.state;
        const {history} = this.props;
        return (
            <>
                <div className={"search"}>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <label htmlFor={"search-input"} className={"search-description"}>
                            An image search lets you search a pictures of all kinds,
                            from portraits and clipart images to black and white photos,
                            illustrations, line drawings, and more.
                        </label>
                        <input
                            onChange={(e) => this.handleChange(e)}
                            value={value}
                            type="text"
                            name={"search"}
                            autoComplete={"off"}
                            className={"search-input"}
                            placeholder={"Search..."}/>
                        <button className={"search-button"}>
                            <FontAwesomeIcon icon={faSearch}/>
                        </button>
                    </form>
                </div>
                <p className={warning ? "search-warning": "search-warning disabled"}>
                    <FontAwesomeIcon icon={faExclamationTriangle}/>{warning}
                </p>
                <GalleryCollectionItem collection={searchPhoto} history={history}/>
                <Loader page={page} loading={loading} showMorePhotos={this.showMorePhotos}/>
            </>
        );
    }
}