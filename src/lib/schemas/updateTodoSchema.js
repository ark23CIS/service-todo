const schema = {
  type: 'object',
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
        createdAt: {
          type: 'string',
        },
      },
      required: ['id', 'title', 'status', 'userId', 'createdAt'],
    },
  },
};

export default schema;