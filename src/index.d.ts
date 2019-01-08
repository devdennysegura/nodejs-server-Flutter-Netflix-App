declare module '*.json' {
    const value: any;
    export default value;
}
declare module 'json!*' {
    const value: any;
    export default value;
}
declare module 'express-healthcheck';
declare module 'compression';
declare module 'http-status';
declare module 'mongoose';
declare module 'mongoose-simple-random';
declare module 'i18n';
declare module 'winston';

interface SorteableValue {
  key: string;
  value: number;
}
interface Scheme {
     [index: string]: any;
}
interface IAuthor{
    name: string;
    lastname: string;
}
interface Helper {
    groupBy(list: any[], keyGetter: any): any;
    objectToArray(obj: any, operator: any): any[];
    sortAB(a: any, b: any): number;
    headerLanguage(headers: any): any;
}
declare class ErrorService {
	private isTrustedError: boolean;
	private status: number;
	private code: string;
	private language: string;
	private message: string;
	private node_stack: any;
	constructor(value: any);
	public Item(): any;
}
declare class TranslationsService {
    public static getTranslationData(locale: string, path: string): any;
}
interface DynamicSignature {
  [key: string]: any;
}
declare class ExpressApp implements DynamicSignature {
    public middlwre: express.Application;
    constructor();
}
declare abstract class Architecture {
    private static port: any;
    public middlwre: any;
    public timeout: number;
    constructor();
    public use(...arg: any[]): Architecture;
    public set(setting: string, val: any): Architecture;
    public listen(handle: any, listeningListener: Function | undefined): void;
    public get(pathRoute: string | RegExp | (string | RegExp)[], req: RequestHandler): void;
    public addLocals(name: string, local: any): void;
    public mountRoutes(routes: any): void;
    public useMiddlewares(middlewares: any): void;
    public addOptions(options: any): void;
    public setStatics(options: any): void;
    public setStatic(middlwrPath: string): void;
    public setViewsEngine(viewEngine: string, dirname: string): void;
    public setServerTimeOut(time: number): void;
    public onError(error: NodeJS.ErrnoException): void;
    public startListen(): void;
    public static normalizePort(val: number | string): number | string | boolean;
    private onListening(): void;
}
declare class Server extends Architecture {
    constructor();
    public static bootstrap(): Server;
}
