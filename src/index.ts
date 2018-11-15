process.env.NODE_CONFIG_DIR = `${__dirname}/env`;
import * as cors from 'cors';
import { Architecture } from './core/architecture';
import { middlewaresServer } from './middlewares';

export class Server extends Architecture {
    constructor() {
        super();
        this.addOptions([{ mountPoint: '*', handler: cors() }]);
        this.useMiddlewares(middlewaresServer);
        this.setDatabase();
    }
    public static bootstrap() {
        return new Server();
    }
}
Server.bootstrap().startListen();
