/// <reference path="./index.d.ts" />
import { Request, Response, NextFunction } from 'express';
import { Service } from './service';

export const Controller = {
    getItems: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result: any = await Service.getItems(req.params, {});
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    }
};
