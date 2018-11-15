/// <reference path="../index.d.ts" />
import * as release from './release.json';
import * as development from './development.json';
import * as test from './tests.json';

export const RELEASE: string = (release as any).server.env;
export const DEVELOPMENT: string = (development as any).server.env;
export const TEST: string = (test as any).server.env;
export const AUTHOR: IAuthor = {
    name: 'Denny',
    lastname: 'Segura'
};
