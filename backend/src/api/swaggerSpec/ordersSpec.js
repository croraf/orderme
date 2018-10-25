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
                        type: 'array',
                        items: {
                            type: 'object'
                        }
                    },
                    '500': {
                        description: 'Internal server error'
                    }
                }
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
                    }/* ,
                    {
                        'in': 'query',
                        'name': 'restaurantName',
                        'description': 'Restaurant name',
                        'required': true,
                        schema: {
                            'type': 'string',
                            example: 'Bistro To-Mi'
                        }
                        
                    } */
                ],
                'responses': {
                    '200': {
                        'description': 'Orders sucessfully placed',
                    }
                }
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
                }
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
