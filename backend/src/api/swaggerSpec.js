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
    'host': 'localhost:3000',
    'basePath': '/v0',
    'tags': [
        {
            'name': 'restaurants',
            'description': 'Everything about Restaurants',
            'externalDocs': {
                'description': 'Find out more',
                'url': 'http://swagger.io'
            }
        }
    ],
    'schemes': [
        'http'
    ],
    'paths': {
        '/restaurants': {
            'post': {
                'tags': [
                    'restaurants'
                ],
                'summary': 'Create a new restaurant',
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
                        'description': 'Restaurant object that needs to be added',
                        'required': true,
                        'schema': {
                            '$ref': '#/definitions/Restaurant'
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
                    'restaurants'
                ],
                'summary': 'Get all restaurants',
                'description': '',
                'produces': [
                    'application/json'
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
            'delete': {
                'tags': [
                    'restaurants'
                ],
                'summary': 'Delete all restaurants',
                'description': '',
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
            }
        },
        
        '/restaurants/{name}': {
            'get': {
                'tags': [
                    'restaurants'
                ],
                'summary': 'Get specified restaurant',
                'description': '',
                'produces': [
                    'application/json'
                ],
                'parameters': [
                    {
                        'name': 'name',
                        'in': 'path',
                        'description': 'The name of the restaurant to get',
                        'required': true,
                        'type': 'string'
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'successful operation',
                        'schema': {
                            'type': 'string'
                        },
                        'headers': {
                            'X-Rate-Limit': {
                                'type': 'integer',
                                'format': 'int32',
                                'description': 'calls per hour allowed by the user'
                            },
                            'X-Expires-After': {
                                'type': 'string',
                                'format': 'date-time',
                                'description': 'date in UTC when token expires'
                            }
                        }
                    },
                    '400': {
                        'description': 'Restaurant name supplied not in the system'
                    }
                }
            },
            'delete': {
                'tags': [
                    'restaurants'
                ],
                'summary': 'Deletes the specified restaurant',
                'description': '',
                'parameters': [
                    {
                        'name': 'name',
                        'in': 'path',
                        'description': 'The name of the restaurant to delete',
                        'required': true,
                        'type': 'string'
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'successful operation',
                        'schema': {
                            'type': 'string'
                        },
                        'headers': {
                            'X-Rate-Limit': {
                                'type': 'integer',
                                'format': 'int32',
                                'description': 'calls per hour allowed by the user'
                            },
                            'X-Expires-After': {
                                'type': 'string',
                                'format': 'date-time',
                                'description': 'date in UTC when token expires'
                            }
                        }
                    },
                    '400': {
                        'description': 'Restaurant name supplied not in the system'
                    }
                }
            },
            'put': {
                'tags': [
                    'restaurants'
                ],
                'summary': 'Update restaurant\'s data',
                'description': '',
                'consumes': 'application/json',
                'produces': [
                    'application/json'
                ],
                'parameters': [
                    {
                        'name': 'name',
                        'in': 'path',
                        'description': 'The name of the restaurant to get',
                        'required': true,
                        'type': 'string'
                    },
                    {
                        'in': 'body',
                        'name': 'body',
                        'description': 'Updater restaurant object',
                        'required': true,
                        'schema': {
                            '$ref': '#/definitions/Restaurant'
                        }
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'successful operation',
                        'schema': {
                            'type': 'string'
                        },
                        'headers': {
                            'X-Rate-Limit': {
                                'type': 'integer',
                                'format': 'int32',
                                'description': 'calls per hour allowed by the user'
                            },
                            'X-Expires-After': {
                                'type': 'string',
                                'format': 'date-time',
                                'description': 'date in UTC when token expires'
                            }
                        }
                    },
                    '400': {
                        'description': 'Restaurant name supplied not in the system'
                    }
                }
            },
        },
        /* 
        '/user/login': {
            'get': {
                'tags': [
                    'user'
                ],
                'summary': 'Logs user into the system',
                'description': '',
                'operationId': 'loginUser',
                'produces': [
                    'application/xml',
                    'application/json'
                ],
                'parameters': [
                    {
                        'name': 'username',
                        'in': 'query',
                        'description': 'The user name for login',
                        'required': true,
                        'type': 'string'
                    },
                    {
                        'name': 'password',
                        'in': 'query',
                        'description': 'The password for login in clear text',
                        'required': true,
                        'type': 'string'
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'successful operation',
                        'schema': {
                            'type': 'string'
                        },
                        'headers': {
                            'X-Rate-Limit': {
                                'type': 'integer',
                                'format': 'int32',
                                'description': 'calls per hour allowed by the user'
                            },
                            'X-Expires-After': {
                                'type': 'string',
                                'format': 'date-time',
                                'description': 'date in UTC when token expires'
                            }
                        }
                    },
                    '400': {
                        'description': 'Invalid username/password supplied'
                    }
                }
            }
        },
        '/user/logout': {
            'get': {
                'tags': [
                    'user'
                ],
                'summary': 'Logs out current logged in user session',
                'description': '',
                'operationId': 'logoutUser',
                'produces': [
                    'application/xml',
                    'application/json'
                ],
                'parameters': [],
                'responses': {
                    'default': {
                        'description': 'successful operation'
                    }
                }
            }
        },
        '/user/{username}': {
            'get': {
                'tags': [
                    'user'
                ],
                'summary': 'Get user by user name',
                'description': '',
                'operationId': 'getUserByName',
                'produces': [
                    'application/xml',
                    'application/json'
                ],
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
                    'user'
                ],
                'summary': 'Updated user',
                'description': 'This can only be done by the logged in user.',
                'operationId': 'updateUser',
                'produces': [
                    'application/xml',
                    'application/json'
                ],
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
                    'user'
                ],
                'summary': 'Delete user',
                'description': 'This can only be done by the logged in user.',
                'operationId': 'deleteUser',
                'produces': [
                    'application/xml',
                    'application/json'
                ],
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
        } */
    },
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
            'name': 'api_key',
            'in': 'header'
        }
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
            },
            'xml': {
                'name': 'User'
            }
        }, */
        'Restaurant': {
            'type': 'object',
            'required': [
                'name'
            ],
            'properties': {
                /* 'id': {
                    'type': 'integer',
                    'format': 'int64'
                }, */
                'name': {
                    'type': 'string',
                    'example': 'Chello Example'
                },
                'status': {
                    'type': 'string',
                    'description': 'Restaurant status',
                    'enum': [
                        'open',
                        'pending',
                        'closed'
                    ]
                }
            }
        }
    },
    'externalDocs': {
        'description': 'Find out more about Swagger',
        'url': 'http://swagger.io'
    }
};

module.exports = swaggerSpec;
