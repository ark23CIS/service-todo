import AWS from 'aws-sdk';
import middleware from '../lib/middleware';
import createErrors from 'http-errors';
import updateTodoSchema from '../lib/schemas/updateTodoSchema';

const DynamoDB = new AWS.DynamoDB.DocumentClient();

async function updateTodo(event) {
  const { id, title, status, userId } = event.body;

  const todo = {
    id,
    title,
    status,
    userId,
  };

  try {
    await DynamoDB.put({
      TableName: 'TodosTable',
      Item: todo,
    }).promise();
  } catch (error) {
    console.error(error);
    throw new createErrors.InternalServerError(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(todo),
  };
}

export const handler = middleware(updateTodo, updateTodoSchema);