
const arrayToObject = (array, key) => 
    array.reduce(
        (obj, item) => {
            obj[item[key]] = item;
            return obj;
        },
        {}
    );

const arrayToObjectAddLocaleTimestamp = (array, key) => 
    array.reduce(
        (obj, item) => {
            item.localeTimestamp = new Date(item.timestamp).toLocaleString('de');
            obj[item[key]] = item;
            return obj;
        },
        {}
    );

export default {arrayToObject, arrayToObjectAddLocaleTimestamp};