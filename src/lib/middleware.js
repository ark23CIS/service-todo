import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpEventNormalizer from '@middy/http-event-normalizer';
import httpErrorHandler from '@middy/http-error-handler';
import validator from '@middy/validator';

export default function(handler, validatorSchema = null, useDefaults = 'false') {
  return middy(handler)
    .use([
      httpErrorHandler(),
      httpEventNormalizer(),
      httpJsonBodyParser(),
      validator({ inputSchema: validatorSchema, useDefaults, }),
    ]);
};