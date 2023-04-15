import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import SearchPage from './SearchPage';
import Preloader from '@components/common/Preloader/Preloader';
import { connect } from "react-redux";
import { getSearchThunkCreator } from "@redux/searchReducer";

const SearchPageContainer = (props) => {

    useEffect(() => {
            props.getPeopleSearch('');
    }, [])
// console.log(props.peopleSearch);
    return (
        <>
            <SearchPage {...props} getPeopleSearch={props.getPeopleSearch} />
        </>
    )
}


let mapStateToProps = (state) => {
    return {
        peopleSearch: state.search.people,
        isError: state.personPage.isError,
    }
}

export default connect(mapStateToProps, {getPeopleSearch: getSearchThunkCreator})(SearchPageContainer);