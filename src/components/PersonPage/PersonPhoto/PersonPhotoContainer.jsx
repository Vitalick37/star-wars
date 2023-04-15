import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import PersonPhoto from './PersonPhoto';

import { connect } from "react-redux";
import { setPersonToFavorite, removePersonFromFavorites } from "@redux/personFavoriteReducer";

const PersonPhotoContainer = (props) => {


    return (
        <>
            <PersonPhoto {...props}/>
        </>
    )
}


let mapStateToProps = (state) => {
    return {
        
    }
    
}

export default connect(mapStateToProps, {setPersonToFavorite, removePersonFromFavorites})(PersonPhotoContainer);