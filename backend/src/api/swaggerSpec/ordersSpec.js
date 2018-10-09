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
                        type: 'array',
                        items: {
                            type: 'object',
                            schema: {
                                '$ref': '#/definitions/Order'
                            }
                        }
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'Redirect to facebook log in page',
                    }
                }
            }
        },
    },
    'definitions': {
        'Order': {
            'type': 'object',
            'properties': {
            }
        }
    }
};

module.exports = spec;
