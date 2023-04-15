import { useEffect } from "react";
import PeoplePage from "./PeoplePage";
import Preloader from "@components/common/Preloader/Preloader";
import { connect } from "react-redux";
import { getPeopleThunkCreator, setCurrentPage, setIsFetching } from "@redux/peoplePageReducer";



const PeoplePageAPI = (props) =>  {

    useEffect(() => {
        props.getPeople(props.currentPage);
    }, [props.currentPage])

    let onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.getPeople(pageNumber);
    }
    
        return (
            <>
                {props.isFetching ? <Preloader /> :  <PeoplePage onPageChanged={onPageChanged} {...props} />}   
            </>
            )
            

}

let mapStateToProps = (state) => {

    return {
        people: state.peoplePage.people,
        isError: state.peoplePage.isError,
        pageSize: state.peoplePage.pageSize,
        totalPeopleCount: state.peoplePage.totalPeopleCount,
        currentPage: state.peoplePage.currentPage,
        isFetching: state.peoplePage.isFetching,
        portionSize: state.peoplePage.portionSize,
    }
}

export default connect(mapStateToProps, {getPeople: getPeopleThunkCreator, setCurrentPage, setIsFetching})(PeoplePageAPI);