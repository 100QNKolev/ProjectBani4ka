import moment from 'moment';
import uuid from 'uuid';

const BASE_URL = 'https://dxrkl3git-701e.restdb.io/rest/wotbc';
const API_KEY = '6077103e28bf9b609975a1f0';

export function getEvents() {
    return fetch(BASE_URL,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'x-apikey': '6077103e28bf9b609975a1f0'
            }
        }
    )
    .then(response => response.json())
    .then(events => events.map(item => ({
        ...item,
        date: moment(item.date, "DD/MM/YYYY HH:mm").toDate(),
    })));
}

export function addEvent({title, date, description}) {
    return fetch(BASE_URL,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-apikey': '6077103e28bf9b609975a1f0'
            },
            body: JSON.stringify({
                title, date, description, id: uuid()
            })
        })
        .then(result => result.json())
        .catch(error => console.error(error));
}
