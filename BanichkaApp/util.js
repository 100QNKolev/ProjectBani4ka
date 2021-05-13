import moment from 'moment';
import { interpolate } from 'react-native-reanimated';

export function formatDate(dateString) {
    const parsedDate = moment(new Date(dateString));

    if(!parsedDate.isValid()) {
        return Date.now();
    }

    return parsedDate.format('DD/MM/YYYY HH:mm');
}

export function getCountdownParts(eventDate) {
    const duration = moment.duration(moment(new Date(eventDate))
        .diff(new Date()));
    return {
        days: parseInt(duration.as('days')),
        hours: duration.get('hours'),
        minutes: duration.get('minutes'),
        seconds: duration.get('seconds')
    }
}

