import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpEventNormalizer from '@middy/http-event-normalizer';
import httpErrorHandler from '@middy/http-error-handler';
import validator from '@middy/validator';

export default function(handler, validatorSchema = null) {
  let middlewares = [
    httpErrorHandler(),
    httpEventNormalizer(),
    httpJsonBodyParser(),
  ];
  if (validatorSchema) middlewares = [...middlewares, validator({ inputSchema: validatorSchema })];
  return middy(handler).use(middlewares);
};