import { Request, Response, NextFunction } from 'express';
import { categories, byGenre, byId, shuffle } from './service';

export const Controller = {
    getItems: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result: any = await byGenre(req.params);
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    },
    getCategories: async (_: Request, res: Response, next: NextFunction) => {
        try {
            const result: any = await categories();
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    },
    getRandom: async (_: Request, res: Response, next: NextFunction) => {
        try {
            const result: any = await shuffle();
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    },
    getTvShow: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result: any = await byId(req.params);
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    }
};
