const schema = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      properties: {
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
      required: ['title', 'status', 'userId'],
    },
  },
};

export default schema;