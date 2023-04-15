import { dataAPI } from "../api/request";

let SET_PEOPLE = 'SET_PEOPLE';
let SET_REDIRECT = 'SET_REDIRECT';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_PEOPLE_COUNT = 'SET_PEOPLE_COUNT';
let TOGGLE_FETCHING = 'TOGGLE_FETCHING';

let initalState = {
    people: [],
    isError: false,
    pageSize: 10,
    totalPeopleCount: null,
    currentPage: 1,
    isFetching: false,
    portionSize: 3,
}

const peoplePageReducer = (state = initalState, action) => {

    switch(action.type) {

        case SET_PEOPLE: 
            return {
                ...state, 
                people: action.people
            }

        case SET_REDIRECT: 
            return {
                ...state, 
                isError: true,
            }

        case SET_CURRENT_PAGE: 
            return {
                ...state, 
                currentPage: action.currentPage,
            }

        case SET_PEOPLE_COUNT: 
            return {
                ...state, 
                totalPeopleCount: action.totalPeopleCount,
            }

        case TOGGLE_FETCHING: 
            return {
                ...state, 
                isFetching: action.isFetching,
            }

        default:
            return state;
    }
}

export const setPeople = (people) => ({type: SET_PEOPLE, people});

export const setRedirect = () => ({type: SET_REDIRECT});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setPeopleCount = (totalPeopleCount) => ({type: SET_PEOPLE_COUNT, totalPeopleCount});

export const setIsFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});



export const getPeopleThunkCreator = (currentPage) => (dispatch) => {

    dispatch(setIsFetching(true))

    dataAPI.getPeople(currentPage)
    .then(response => {
        dispatch(setIsFetching(false))
        dispatch(setPeople(response.results))
        dispatch(setPeopleCount(response.count))
    })

    .catch(error => {
        if(error.response) {
            dispatch(setIsFetching(false))
            dispatch(setRedirect())
        }
    })

}

export default peoplePageReducer;