import React from 'react';
import Search from "../../search/search";

import './search-page.sass';
import Header from "../../header/header";

const SearchPage = ({history}) => {
    return (
        <>
            <Header/>
            <Search history={history}/>
        </>
    )
};

export default SearchPage;