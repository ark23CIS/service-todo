import AWS from 'aws-sdk';
import createErrors from 'http-errors';
import middleware from '../lib/middleware';

const DynamoDB = new AWS.DynamoDB.DocumentClient();

async function listTodos(event) {
  let todos;
  const { userId } = event.pathParameters;
  try {
    const result = await DynamoDB.query({
      TableName: 'TodosTable',
      KeyConditionExpression: 'userId = :userId',
      ExpressionAttributeValues: {
        ":userId": userId
      },
    }).promise();
    todos = result.Items;
  } catch (error) {
    console.error(error);
    throw new createErrors.InternalServerError(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(todos),
  };
}

export const handler = middleware(listTodos);
