const schema = {
  properties: {
    body: {
      type: 'Object',
      properties: {
        body: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            title: {
              type: 'string',
            },
            status: {
              type: 'string',
              default: 'NEW',
            },
            userId: {
              type: 'string',
            },
          },
          required: ['body'],
        }
      },
    },
  },
  required: [
    'body',
  ],
};

export default schema;