const deepmerge = require('deepmerge');

const restaurantsSpec = require('./restaurantsSpec');
const usersSpec = require('./usersSpec');
const oAuth2Spec = require('./oAuth2Spec');
const ordersSpec = require('./ordersSpec');
const config = require('config');

const swaggerSpec = {
    'swagger': '2.0',
    'info': {
        'description': '"orderMe" application swagger file',
        'version': '1.0.0',
        'title': 'Swagger orderMe',
        'termsOfService': 'http://swagger.io/terms/',
        'contact': {
            'email': 'vrafaeli@msn.com'
        },
        'license': {
            'name': 'Apache 2.0',
            'url': 'http://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    'host': config.baseUrl,
    'basePath': '/v0',
    'schemes': [
        'http', 'https' 
    ],
    'securityDefinitions': {
        'petstore_auth': {
            'type': 'oauth2',
            'authorizationUrl': 'https://petstore.swagger.io/oauth/dialog',
            'flow': 'implicit',
            'scopes': {
                'write:pets': 'modify pets in your account',
                'read:pets': 'read your pets'
            }
        },
        'api_key': {
            'type': 'apiKey',
            'name': 'X-Access-Token',
            'in': 'header'
        }
    },
    'externalDocs': {
        'description': 'Find out more about Swagger',
        'url': 'http://swagger.io'
    }
};


module.exports = deepmerge.all([swaggerSpec, restaurantsSpec, usersSpec, oAuth2Spec, ordersSpec]);
