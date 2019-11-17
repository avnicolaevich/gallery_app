import React, {Component} from 'react';

import './search.sass';

export default class Search extends Component {

    state = {
        value: ''
    };

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {value} = this.state;
        this.setState({value: ''});
    };


    render() {
        const {value} = this.state;
        console.log(value)
        return (
            <div className={"search-wrapper"}>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                        onChange={(e) => this.handleChange(e)}
                        value={value}
                        type="text"
                        name={"search"}
                        className={"search-input"}
                        placeholder={"Search..."}/>
                    <button className={"search-input-btn"}>
                        <i className={"glyphicon glyphicon-search"}></i>
                    </button>
                </form>
            </div>
        );
    }
}