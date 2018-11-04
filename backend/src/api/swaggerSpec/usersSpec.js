const spec = {
    'tags': [
        {
            'name': 'users',
            'description': 'Everything about Users',
            'externalDocs': {
                'description': 'Find out more',
                'url': 'http://swagger.io'
            }
        }
    ],
    'paths': {
        '/users': {
            'post': {
                'tags': [
                    'users'
                ],
                'summary': 'Create a new user',
                'description': '',
                'consumes': [
                    'application/json',
                ],
                'produces': [
                    'application/json'
                ],
                'parameters': [
                    {
                        'in': 'body',
                        'name': 'body',
                        'description': 'User object that needs to be added',
                        'required': true,
                        'schema': {
                            '$ref': '#/definitions/User'
                        }
                    }
                ],
                'responses': {
                    '405': {
                        'description': 'Invalid input'
                    }
                },
                'security': [
                    {
                        'petstore_auth': [
                            'write:pets',
                            'read:pets'
                        ]
                    }
                ]
            },
            'get': {
                'tags': [
                    'users'
                ],
                'summary': 'Get all users',
                'description': '',
                'produces': [
                    'application/json'
                ],
                'responses': {
                    '200': {
                        'description': 'OK',
                        type: 'array',
                        items: {
                            type: 'object'
                        }
                    },
                    '405': {
                        'description': 'Invalid input'
                    },
                    '500': {
                        description: 'Internal server error'
                    }
                },
                'security': [
                    {
                        'petstore_auth': [
                            'write:pets',
                            'read:pets'
                        ]
                    }
                ]
            },
            'delete': {
                'tags': [
                    'users'
                ],
                'summary': 'Delete all users',
                'description': '',
                'responses': {
                    '200': {
                        description: 'All deleted. Returns number of deleted',
                        'schema': {
                            type: 'integer',
                        }
                    },
                    '405': {
                        'description': 'Invalid input'
                    }
                },
                'security': [
                    {
                        'petstore_auth': [
                            'write:pets',
                            'read:pets'
                        ]
                    }
                ]
            }
        },
        '/users/{username}': {
            'get': {
                'tags': [
                    'users'
                ],
                'summary': 'Get user by user name',
                'description': '',
                'operationId': 'getUserByName',
                'produces': 'application/json',
                'parameters': [
                    {
                        'name': 'username',
                        'in': 'path',
                        'description': 'The name that needs to be fetched. Use user1 for testing. ',
                        'required': true,
                        'type': 'string'
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'successful operation',
                        'schema': {
                            '$ref': '#/definitions/User'
                        }
                    },
                    '400': {
                        'description': 'Invalid username supplied'
                    },
                    '404': {
                        'description': 'User not found'
                    }
                }
            },
            'put': {
                'tags': [
                    'users'
                ],
                'summary': 'Updated user',
                'description': 'This can only be done by the logged in user.',
                'operationId': 'updateUser',
                'produces': 'application/json',
                'parameters': [
                    {
                        'name': 'username',
                        'in': 'path',
                        'description': 'name that need to be updated',
                        'required': true,
                        'type': 'string'
                    },
                    {
                        'in': 'body',
                        'name': 'body',
                        'description': 'Updated user object',
                        'required': true,
                        'schema': {
                            '$ref': '#/definitions/User'
                        }
                    }
                ],
                'responses': {
                    '400': {
                        'description': 'Invalid user supplied'
                    },
                    '404': {
                        'description': 'User not found'
                    }
                }
            },
            'delete': {
                'tags': [
                    'users'
                ],
                'summary': 'Delete user',
                'description': 'This can only be done by the logged in user.',
                'operationId': 'deleteUser',
                'produces': 'application/json',
                'parameters': [
                    {
                        'name': 'username',
                        'in': 'path',
                        'description': 'The name that needs to be deleted',
                        'required': true,
                        'type': 'string'
                    }
                ],
                'responses': {
                    '400': {
                        'description': 'Invalid username supplied'
                    },
                    '404': {
                        'description': 'User not found'
                    }
                }
            }
        }
    },
    'definitions': {
        'User': {
            'type': 'object',
            'properties': {
                'id': {
                    'type': 'string'
                },
                'name': {
                    'type': 'string'
                },
                'token': {
                    'type': 'string'
                },
            },
            'xml': {
                'name': 'User'
            }
        }
    }
};

module.exports = spec;
