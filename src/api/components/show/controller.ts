import { Request, Response, NextFunction } from 'express';
import { byGenre } from './service';

export const Controller = {
    getItems: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result: any = await byGenre(req.params);
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    }
};
