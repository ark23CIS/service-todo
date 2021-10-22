import { v4 as uuidv4 } from 'uuid';
import AWS from 'aws-sdk';
import createErrors from 'http-errors';
import createTodoSchema from '../lib/schemas/createTodoSchema';
import middleware from '../lib/middleware';

const DynamoDB = new AWS.DynamoDB.DocumentClient();

async function createTodo(event) {
  const { title, status, userId } = event.body;

  const todo = {
    id: uuidv4(),
    title,
    status,
    userId,
    createdAt: new Date().toISOString(),
  };

  try {
    await DynamoDB.put({
      TableName: process.env.TODOS_TABLE_NAME,
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