import AWS from 'aws-sdk';
import middleware from '../lib/middleware';
import createErrors from 'http-errors';

const DynamoDB = new AWS.DynamoDB.DocumentClient();

async function deleteTodo(event) {
  const { id } = event.pathParameters;

  try {
    await DynamoDB.delete({
      TableName: 'TodosTable',
      Key: { id },
    }).promise();
  } catch (error) {
    console.error(error);
    throw new createErrors.InternalServerError(error);
  }

  return {
    statusCode: 204,
    body: null,
  };
}

export const handler = middleware(deleteTodo);