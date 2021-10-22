import { v4 as uuidv4 } from 'uuid';
import AWS from 'aws-sdk';
import createTodoSchema from '../lib/schemas/createTodoSchema';
import middleware from '../lib/middleware';
import createErrors from 'http-errors';

const DynamoDB = new AWS.DynamoDB.DocumentClient();

async function createTodo(event) {
  const { title, status, userId } = event.body;

  const todo = {
    id: uuidv4(),
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
    statusCode: 201,
    body: JSON.stringify(todo),
  };
}

export const handler = middleware(createTodo, createTodoSchema);