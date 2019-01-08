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
    '/show/:id': {
        verb: ['get'],
        handler: Controller.getTvShow
    },
    '/shuffle-show': {
        verb: ['get'],
        handler: Controller.getRandom
    }
};
