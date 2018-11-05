const spec = {
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
                'security': [{'api_key': []}]
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
                'security': [{'api_key': []}]
            },
            'delete': {
                'tags': [
                    'restaurants'
                ],
                'summary': 'Delete all restaurants',
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
                'security': [{'api_key': []}]
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
                },
                'security': [{'api_key': []}]
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
                },
                'security': [{'api_key': []}]
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
                },
                'security': [{'api_key': []}]
            },
        }
    },
    'definitions': {
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
    }
};

module.exports = spec;
