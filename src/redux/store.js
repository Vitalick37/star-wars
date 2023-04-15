import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import peoplePageReducer from './peoplePageReducer';
import personPageReducer from './personPageReducer';
import personFavoriteReducer from './personFavoriteReducer';
import { setLocalStorage } from "@utils/localStorage";
import searchReducer from './searchReducer';

let reducers = combineReducers({
    peoplePage: peoplePageReducer,
    personPage: personPageReducer,
    personFavorite: personFavoriteReducer,
    search: searchReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

store.subscribe(() => {
    setLocalStorage('store', store.getState().personFavorite)
})

export default store;