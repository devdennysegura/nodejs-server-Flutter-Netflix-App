import { Controller } from './controller';

export const tvshowRoutes: { [index: string]: any } = {
    '/home': {
        verb: ['get'],
        handler: Controller.getCategories
    },
    '/shows/:genre': {
        verb: ['get'],
        handler: Controller.getItems
    },
    '/shuffle-show': {
        verb: ['get'],
        handler: Controller.getRandom
    }
};
