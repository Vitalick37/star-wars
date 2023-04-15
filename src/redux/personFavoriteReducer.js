import { omit } from "lodash";
import { getLocalStorage } from "@utils/localStorage";

let ADD_PERSON_TO_FAVORITE = 'ADD_PERSON_TO_FAVORITE';
let REMOVE_PERSON_TO_FAVORITE = 'REMOVE_PERSON_TO_FAVORITE';

let initalState = getLocalStorage('store');

const personFavoriteReducer = (state = initalState, action) => {

    switch(action.type) {

        case ADD_PERSON_TO_FAVORITE: 
            return {
                ...state, 
                ...action.payload
            }

        case REMOVE_PERSON_TO_FAVORITE: 
            return omit(state, [action.payload])
            

        default:
            return state;
    }
}

export const setPersonToFavorite = (person) => ({type: ADD_PERSON_TO_FAVORITE, payload: person});

export const removePersonFromFavorites = (personId) => ({type: REMOVE_PERSON_TO_FAVORITE, payload: personId});



export default personFavoriteReducer;