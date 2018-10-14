
import config from 'Config';


const fetchRelative = async (path, options, queryParams) => {

    const url = new URL(config.apiHost + 'v0/' + path);
    url.search = new URLSearchParams(queryParams);

    return await ((await fetch(url, options)).json());
};

export default {fetchRelative};

