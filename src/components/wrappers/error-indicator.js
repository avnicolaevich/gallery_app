import React, {Component} from 'react'

export default class ErrorIndicator extends Component{

    state = {
        error: false,
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    render(){
        const { error } = this.state;

        if(error) return <div className={"error"}>Something went wrong...</div>;

        return this.props.children
    }
}