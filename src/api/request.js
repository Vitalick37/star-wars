import axios from "axios";

const instance = axios.create({
    baseURL: 'https://swapi.dev/api/',
    });

export const dataAPI = {

    getData() {
        return instance.get()
            .then(response => response.data)
    },

    getPeople(currentPage) {
        return instance.get(`people/?page=${currentPage}`)
            .then(response => response.data)
    },

    getPerson(personPage) {
        return instance.get(`people/${personPage}`)
            .then(response => response.data)
    },

    getPeopleSearch(paramSearch) {
        return instance.get(`people/?search=${paramSearch}`)
            .then(response => response.data)
    },

}
