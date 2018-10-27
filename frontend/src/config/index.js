import development from './development';
import production from './production';
import defaultConfig from './default';

let config;


if (!config) {
    console.log('SETTING CONFIG TO:', process.env.NODE_ENV);

    switch (process.env.NODE_ENV) {
        case 'development':
            config = Object.assign(defaultConfig, development);
            break;
        case 'production':
            config = Object.assign(defaultConfig, production);
            break;
        default:
            config = {};
            break;
    }
}



export default config;