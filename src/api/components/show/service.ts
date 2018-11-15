import { ShowSchemaModel } from './model';
import { logger } from '../../../core/logger/index';

export const addShow = async ({ ...rest }: any) => {
    try {
        const show: any = await ShowSchemaModel.create({ ...rest });
        return show;
    } catch (error) {
        logger.error(`Error on signup: ${error.message}`);
        throw error;
    }
};

export const byGenre = async ({ genre }: any) => {
    try {
        const shows: any = await ShowSchemaModel.find({ 'details.genres': { $in: [genre] } });
        return shows;
    } catch (error) {
        logger.error(`Error on signup: ${error.message}`);
        throw error;
    }
};