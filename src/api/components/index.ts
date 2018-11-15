/// <reference path="../../index.d.ts"/>
import { Request, Response, NextFunction } from 'express';
import { productRoutes } from './product';
import { tvshowRoutes } from './show';

const apiRoutes: Scheme = {
  '/': {
    verb: ['get'],
    handler: (req: Request, res: Response, next: NextFunction) => {
      res.json({});
    }
  }
};
export const routesApi: Scheme = {
  ...apiRoutes,
  ...tvshowRoutes,
  ...productRoutes,
};
