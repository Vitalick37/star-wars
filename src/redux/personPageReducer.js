import { dataAPI } from "../api/request";

let SET_PERSON = 'SET_PERSON';
let TOGGLE_FETCHING = 'TOGGLE_FETCHING';
let SET_REDIRECT = 'SET_REDIRECT';

let initalState = {
    person: {
        name: 1,
    },
    isError: false,
    isFetching: false,
}

const peoplePageReducer = (state = initalState, action) => {

    switch(action.type) {

        case SET_PERSON: 
            return {
                ...state, 
                person: action.person,
            }

            case TOGGLE_FETCHING: 
            return {
                ...state, 
                isFetching: action.isFetching,
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

export const setPerson = (person) => ({type: SET_PERSON, person});

export const setIsFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});

export const setRedirect = () => ({type: SET_REDIRECT});





export const getPersonThunkCreator = (personPage) => (dispatch) => {

    dispatch(setIsFetching(true))

    dataAPI.getPerson(personPage)
    .then(response => {
        dispatch(setIsFetching(false))
        dispatch(setPerson(response))
    })

    .catch(error => {
        if(error.response) {
            dispatch(setIsFetching(false))
            dispatch(setRedirect())
        }
    })

}

export default peoplePageReducer;