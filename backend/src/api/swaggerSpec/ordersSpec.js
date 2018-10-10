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
                            type: 'object',
                        }
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'Orders sucessfully placed',
                    }
                }
            }
        },
    },
    'definitions': {
        'Order': {
            'type': 'object',
            'properties': {
                restaurantId: {type: 'string', example: 'Bistro To-Mi'}
            }
        }
    }
};

module.exports = spec;
