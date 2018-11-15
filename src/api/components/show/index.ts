import { Controller } from './controller';

export const tvshowRoutes: { [index: string]: any } = {
    '/shows/:genre': {
        verb: ['get'],
        handler: Controller.getItems
    }
};
