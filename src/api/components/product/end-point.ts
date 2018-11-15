import * as config from 'config';
import * as _ from 'lodash';
const SERVER_LOGGER = 'server';
const { apiBasePath } = config.get(SERVER_LOGGER);

export const endPoints = {
    'tv-show': _.template(`${apiBasePath}/shows/<%= number %>?embed[]=episodes&embed[]=cast`)
};