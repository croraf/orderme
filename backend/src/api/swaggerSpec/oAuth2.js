const spec = {
    'tags': [
        {
            'name': 'auth',
            'description': 'OAuth2 authentication endpoint',
            'externalDocs': {
                'description': 'Find out more',
                'url': 'http://swagger.io'
            }
        }
    ],
    'paths': {
        '/auth': {
            'get': {
                'tags': [
                    'auth'
                ],
                'summary': 'Initial authentication endpoint',
                'description': '',
                /* 'parameters': [
                ], */
                'responses': {
                    '303': {
                        'description': 'Redirect to facebook log in page',
                    }
                }
            }
        },
    },
    'definitions': {
        /* 'User': {
            'type': 'object',
            'properties': {
                'id': {
                    'type': 'integer',
                    'format': 'int64'
                },
                'username': {
                    'type': 'string'
                },
                'firstName': {
                    'type': 'string'
                },
                'lastName': {
                    'type': 'string'
                },
                'email': {
                    'type': 'string'
                },
                'password': {
                    'type': 'string'
                },
                'phone': {
                    'type': 'string'
                },
                'userStatus': {
                    'type': 'integer',
                    'format': 'int32',
                    'description': 'User Status'
                }
            }
        } */
    }
};

module.exports = spec;
