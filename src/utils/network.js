

// запрос через промис

// export const getApiResource = (url) => {
//     fetch(url)
//         .then(res => res.json())
//         .then(body => console.log(body))
//         .catch(error => console.log(error))
// }

// тоже самое через асинхронную функцию

export const getApiResource = async (url) => {

    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('could not fetch', res.status);
            return false;
        }

        return await res.json();
    } catch(error) {
        console.error('could not fetch', error.message);
        return false;
    }
}

// вызов через промис
// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
//     .then(body => console.log(body))

// вызов через асинхронную функцию

// (async () => {
//     const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//     console.log(body);
// })();

