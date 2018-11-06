const spec = {
    'tags': [
        {
            'name': 'orders',
            'description': 'Placing orders endpoint',
            'externalDocs': {
                'description': 'Find out more',
                'url': 'http://swagger.io'
            }
        }
    ],
    'paths': {
        '/orders': {
            'get': {
                'tags': [
                    'orders'
                ],
                'summary': 'Get all orders',
                'description': '',
                'produces': [
                    'application/json'
                ],
                'responses': {
                    '200': {
                        'description': 'OK',
                        schema: {
                            type: 'array',
                            items: {
                                type: 'object'
                            }
                        }
                    },
                    '500': {
                        description: 'Internal server error'
                    }
                },
                'security': [{'api_key': []}]
            },
            'post': {
                'tags': [
                    'orders'
                ],
                'summary': 'Placing orders endpoint',
                'description': '',
                'parameters': [
                    {
                        'in': 'body',
                        'name': 'body',
                        'description': 'Order data',
                        'required': true,
                        schema: {
                            $ref: '#/definitions/Order'
                        },
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'Orders sucessfully placed',
                    }
                },
                'security': [{'api_key': []}]
            },
            'delete': {
                'tags': [
                    'orders'
                ],
                'summary': 'Delete all orders',
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
    },
    'definitions': {
        'Order': {
            'type': 'object',
            'properties': {
                restaurantId: {type: 'string', example: 'Bistro To-Mi'},
                items: {type: 'array', items: 'string', example: ['Bečki', 'Zagrebački', 'Palačinke']},
                status: {type: 'string', example: 'ORDER_ACCEPTED'}
            }
        }
    }
};

module.exports = spec;
