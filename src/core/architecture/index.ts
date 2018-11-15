/// <reference path="../../index.d.ts" />
import * as express from 'express';
import * as http from 'http';
import { RequestHandler } from 'express-serve-static-core';
import * as config from 'config';
import { logger } from './../logger';
import * as mongoose from 'mongoose';

const CONFIG_SERVER = 'server';
const settings = config.get(CONFIG_SERVER);

class ExpressApp implements DynamicSignature {
  public middlwre: express.Application;
  constructor() {
    this.middlwre = express();
  }
}

export abstract class Architecture {
  private static port = process.env.PORT || Architecture.normalizePort(`${(settings as any).port}`) || 9001;
  public middlwre: any;
  public timeout: number;
  constructor() {
    this.middlwre = new ExpressApp().middlwre;
    this.middlwre.disable('x-powered-by');
    this.timeout = 5000;
  }
  public use(...arg: any[]) {
    this.middlwre.use(...arg);
    return this;
  }
  public set(setting: string, val: any) {
    this.middlwre.set(setting, val);
    return this;
  }
  public listen(handle: any, listeningListener: Function | undefined) {
    this.middlwre.listen(handle, listeningListener);
  }
  public get(pathRoute: string | RegExp | (string | RegExp)[], req: RequestHandler) {
    this.middlwre.get(pathRoute, req);
  }
  public addLocals(name: string, local: any) {
    this.middlwre.locals[`${name}`] = local;
  }
  public mountRoutes(routes: any) {
    Object.keys(routes).forEach((key) => {
      for (const verb of routes[key].verb) {
        this.middlwre[verb](key, routes[key].handler);
      }
    });
  }
  public useMiddlewares(middlewares: any) {
    Object.keys(middlewares).forEach((key) => {
      this.middlwre.use(middlewares[key].mountPoint, middlewares[key].handler);
    });
  }
  public addOptions(options: any) {
    Object.keys(options).forEach((key) => {
      this.middlwre.use(options[key].mountPoint, options[key].handler);
    });
  }
  public setStatics(options: any) {
    Object.keys(options).forEach((key) => {
      this.middlwre.use(options[key].virtualPath, express.static(options[key].realPath));
    });
  }
  public setStatic(middlwrPath: string): void {
    this.middlwre.use(`${(settings as any).baseUrl}`, express.static(middlwrPath));
  }
  public setViewsEngine(viewEngine: string, dirname: string): void {
    this.middlwre.set('view engine', viewEngine);
    this.middlwre.set('views', dirname);
  }
  public static normalizePort(val: number | string): number | string | boolean {
    const port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port)) return false;
    else if (port >= 0) return port;
    else return false;
  }
  public setServerTimeOut(time: number){
      this.timeout = time;
  }
  public setDatabase() {
    const _dbUrl = (settings as any).dbUrl;
    const _dbDebugMode = (settings as any).debugMode;
    const useNewUrlParser = (settings as any).mongoClient;
    mongoose.Promise = global.Promise;
    mongoose.set('debug', _dbDebugMode); // debug mode on
    try {
      mongoose.connect(_dbUrl, { useNewUrlParser });
    } catch (err) {
      mongoose.createConnection(_dbUrl, { useNewUrlParser });
    }
    mongoose.connection
      .once('open', () => logger.info(`Listening mongoDB`))
      .on('error', (e: any) => {
        logger.error(`mongoDB Error: ${e.message}`);
        throw e;
      });
  }
  public onError(error: NodeJS.ErrnoException): void {
    const addr: any = (this.middlwre.settings['address'] || {}).addr;
    const port: number = (this.middlwre.settings['address'] || {}).port;
    if (error.syscall !== 'listen') throw error;
    const bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
      case 'EACCES':
        logger.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        logger.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  private onListening() {
    const addr: any = this.middlwre.settings['address'].addr;
    const port: number = this.middlwre.settings['address'].port;
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${port}`;
  }
  public startListen() {
    const httpService = http.createServer(this.middlwre);
    httpService.timeout = this.timeout;
    this.middlwre.set('port', Architecture.port);
    httpService.listen(Architecture.port);
    this.middlwre.set('address', httpService.address());
    httpService.on('listening', this.onListening.bind(this));
    httpService.on('error', this.onError.bind(this));
    logger.info(`Listening on ${Architecture.port} in ${(settings as any).env} enviroment`);
  }
}
