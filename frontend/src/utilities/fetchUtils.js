
import config from 'Config';


const fetchRelative = async (path, options = {}, queryParams) => {

    const url = new URL(config.apiHost + 'v0/' + path);
    url.search = new URLSearchParams(queryParams);

    const token = localStorage.getItem('token');
    if (token) {
        if (!options.headers) {
            options.headers = {};
        }
        options.headers['X-Access-Token'] = token;
    }
    

    return await ((await fetch(url, options)).json());
};

export default {fetchRelative};

