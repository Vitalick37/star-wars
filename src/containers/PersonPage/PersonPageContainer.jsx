import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import PersonPage from './PersonPage';
import Preloader from '@components/common/Preloader/Preloader';
import { connect } from "react-redux";
import { getPersonThunkCreator, setIsFetching } from "@redux/personPageReducer";

const PersonPageContainer = (props) => {

    const { id } = useParams();

    const [personFavorite, setPersonFavorite] = useState(false);

    useEffect(() => {

            props.getPerson(id);

            setPersonFavorite(!!props.personFavoriteDate[id]);

    }, [id])

    return (
        <>
            {props.isFetching ? <Preloader /> :  <PersonPage {...props} id={id} personFavorite={personFavorite} setPersonFavorite={setPersonFavorite}/>}
        </>
    )
}

PersonPageContainer.propTypes = {
    text: PropTypes.string,
}

let mapStateToProps = (state) => {
    return {
        person: state.personPage.person,
        isFetching: state.personPage.isFetching,
        isError: state.personPage.isError,
        personFavoriteDate: state.personFavorite,
    }
}

export default connect(mapStateToProps, {getPerson: getPersonThunkCreator, setIsFetching})(PersonPageContainer);