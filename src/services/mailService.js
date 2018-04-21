import {URL} from '../constants';

export const postEmail = (body) => {
    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify(body),
        cache: 'no-cache',
        credentials: 'omit',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        mode: 'no-cors',
        redirect: 'follow',
        referrer: 'no-referrer'
    })
};