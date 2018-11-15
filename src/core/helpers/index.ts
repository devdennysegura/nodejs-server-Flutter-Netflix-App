/// <reference path="../../index.d.ts" />
export const helper: Helper = {
    groupBy(list: Array<any>, keyGetter: any) {
        const map: any = {};
        list.forEach((item) => {
            const key: any = keyGetter(item);
            const collection: any = map[key];
            if (!collection) {
                map[key] = [item];
            } else {
                collection.push(item);
            }
        });
        return map;
    },
    objectToArray(obj: any, operator: any) {
        return Object.keys(obj).map(operator);
    },
    sortAB(a: SorteableValue | number, b: SorteableValue | number) {
      return (typeof b === 'number' ? b : b.value) - (typeof a === 'number' ? a : a.value);
    },
    headerLanguage(headers: any){
      return (headers['x-language'] || (headers['accept-language'] as any).split(',')[0]).split('-')[1];
    }
};
