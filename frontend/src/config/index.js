import development from './development';
import production from './production';

let config;


if (!config) {
    console.log('SETTING CONFIG TO:', process.env.NODE_ENV);

    switch (process.env.NODE_ENV) {
        case 'development':
            config = development;
            break;
        case 'production':
            config = production;
            break;
        default:
            config = {};
            break;
    }
}



export default config;