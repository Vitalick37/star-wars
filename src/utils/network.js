

    export const makeConcurrentRequest = async (urls) => {
        const res = await Promise.all(urls.map(res => {
            return fetch(res).then(res => res.json())
        }))
    
        return res;
    };