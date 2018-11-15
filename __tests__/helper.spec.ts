process.env.NODE_CONFIG_DIR = `src/env/`;
import 'jest';
import { helper } from '../src/core/helpers/index';

const sorteableArray:Array<number> = [1 , 5, 6, 3, 2, 10, 4];
const groupableArray:Array<any> = [
  {name: 'juan', lastname: 'anselmo'},
  {name: 'denny', lastname: 'segura'},
  {name: 'juan', lastname: 'bellini'}
]
const groupedObject:any = {
  "juan": [{name: 'juan', lastname: 'anselmo'}, {name: 'juan', lastname: 'bellini'}],
  "denny": [{name: 'denny', lastname: 'segura'}]
};
const groupedArray: Array<any> = [
  { key: 'juan', value: 2 },
  { key: 'denny', value: 1 }
];
describe('Helpers test suite', () => {
  it('It should expect group object keys', () => {
    expect(helper.groupBy(groupableArray, (user:any)=> user.name)).toMatchObject(groupedObject);
  });
  it('It should expect create array from object', () => {
    const arr = helper.objectToArray(groupedObject, (key: string) => ({ key, value: groupedObject[key].length }));
    expect(arr).toEqual(expect.arrayContaining(groupedArray));
  });
  it('It should expect getting descent sorted array', () => {
    expect(sorteableArray.sort(helper.sortAB)).toEqual([10, 6, 5, 4, 3, 2, 1]);
  });
});
