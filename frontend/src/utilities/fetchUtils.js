
import config from 'Config';


const fetchRelative = async (path, options = {}, queryParams) => {

    const url = new URL(config.apiHost + 'v0/' + path);
    url.search = new URLSearchParams(queryParams);

    if (!options.headers) {
        options.headers = {};
    }
    options.headers['X-Access-Token'] = localStorage.getItem('token');
    console.log('opt:', options);

    return await ((await fetch(url, options)).json());
};

export default {fetchRelative};

