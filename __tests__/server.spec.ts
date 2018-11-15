process.env.NODE_CONFIG_DIR = `src/env/`;
import 'jest';
import * as request from 'supertest';
import * as config from 'config';
import { Server } from '../src';

const app = Server.bootstrap().middlwre;
const configApp = config.get('server');
const baseUrl = `${(configApp as any).baseUrl}`;

describe('App express test suite', () => {
  it('It should expecting 200 http status code value when asking base url plus health route', () => {
    return request(app)
      .get(`${baseUrl}/health`)
      .expect(200);
  });
});
