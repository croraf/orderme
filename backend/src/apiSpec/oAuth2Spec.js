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
                'summary': 'Endpoint which accepts providers OAuth2 code, and returns authentication jwt',
                'description': '',
                'parameters': [
                    {
                        in: 'query',
                        name: 'code',
                        type: 'string',
                        description: 'Facebook returned OAuth2 code, which is used on backend to query Facebook for access_token'
                    },
                    {
                        in: 'query',
                        name: 'provider',
                        type: 'string',
                        description: 'Name of the OAuth2 provider'
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'jwt as string',
                        schema: {
                            type: 'string'
                        }
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
