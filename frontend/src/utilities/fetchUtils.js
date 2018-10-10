
import config from 'Config';


const fetchRelative = async (path, options) => {

    const url = config.apiHost + 'v0/' + path;
    return await ((await fetch(url, options)).json());
};

export default {fetchRelative};

