import React, {Component} from 'react';

import './header.sass';

class Header extends Component {
    render() {
        return (
            <div className={"header"}>
                <div className="item active">All</div>
                <div className="item">Animals</div>
                <div className="item">Films</div>
                <div className="item">Food&Drink</div>
                <div className="item">Nature</div>
            </div>
        );
    }
}

export default Header;