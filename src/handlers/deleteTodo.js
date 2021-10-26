import AWS from 'aws-sdk';
import middleware from '../lib/middleware';
import createErrors from 'http-errors';

const DynamoDB = new AWS.DynamoDB.DocumentClient();

async function deleteTodo(event) {
  const { id } = event.pathParameters;

  try {
    const result = await DynamoDB.get({
      TableName: process.env.TODOS_TABLE_NAME,
      Key: { id },
    }).promise();

    if (!result.Item) {
      return {
        statusCode: 400,
      };
    }

    await DynamoDB.delete({
      TableName: process.env.TODOS_TABLE_NAME,
      Key: { id },
    }).promise();

    return {
      statusCode: 204,
    };
  } catch (error) {
    console.error(error);
    throw new createErrors.InternalServerError(error);
  }
}

export const handler = middleware(deleteTodo);