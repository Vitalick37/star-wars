import { dataAPI } from "../api/request";

let SET_PERSON = 'SET_PERSON';
let TOGGLE_FETCHING = 'TOGGLE_FETCHING';
let SET_REDIRECT = 'SET_REDIRECT';

let initalState = {}

const searchReducer = (state = initalState, action) => {

    switch(action.type) {

        case SET_PERSON: 
            return {
                ...state, 
                people: action.people,
            }

            case SET_REDIRECT: 
            return {
                ...state, 
                isError: true,
            }

        default:
            return state;
    }
}

export const setPeopleSearch = (people) => ({type: SET_PERSON, people});

export const setRedirect = () => ({type: SET_REDIRECT});





export const getSearchThunkCreator = (paramSearch) => (dispatch) => {

    dataAPI.getPeopleSearch(paramSearch)
    .then(response => {
        dispatch(setPeopleSearch(response))
    })

    .catch(error => {
        if(error.response) {
            dispatch(setRedirect())
        }
    })

}

export default searchReducer;