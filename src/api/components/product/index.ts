import { Controller } from './controller';
export const productRoutes: { [index: string]: any } = {
    '/all': {
        verb: ['get'],
        handler: Controller.getItems
    }
};
