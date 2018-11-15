import { Architecture } from '../core/architecture';
import { middlewaresApi } from './middlewares';
import { routesApi } from './components';

export class Api extends Architecture {
	constructor() {
		super();
		this.mountRoutes(routesApi);
		this.useMiddlewares(middlewaresApi);
	}

	public static bootstrap(): any {
		return new Api().middlwre;
	}
}
