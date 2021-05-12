import moment from 'moment';
import uuid from 'uuid';

const BASE_URL = 'https://dxrkl3git-701e.restdb.io/rest/wotbc?max=2';

export function getEvents() {
    return fetch(BASE_URL, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-apikey': '6077103e28bf9b609975a1f0'
        },
    })
        .then(response => response.json())
        .then(events => events.map(item => ({
            ...item,
            date: moment(item.date, "DD/MM/YYYY HH:mm").toDate()
        })))
}
export function addEvent({title, date}){
return fetch(BASE_URL,{
    method: 'POST',
    header:{
        'const-type': 'application/json',
        'x-apikey': '6077103e28bf9b609975a1f0'
    },
    body: JSON.stringify({
        title,
        date,
        id:uuid()
    })
})
.then(result => result.json())
.catch(error => console.log(error))
}