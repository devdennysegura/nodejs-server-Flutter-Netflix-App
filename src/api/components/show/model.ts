import * as mongoose from 'mongoose';
import { schema } from './schema';
interface IShowModel extends mongoose.Document {
    _id: String;
    id: Number;
    name: String;
    image: String;
    details: any;
}
export class ShowModel {

    private _showModel: IShowModel;

    constructor(_showModel: IShowModel) {
        this._showModel = _showModel;
    }

    get _id(): String {
        return this._showModel._id;
    }
    get id(): Number {
        return this._showModel.id;
    }
    get name(): String {
        return this._showModel.name;
    }
    get image(): String {
        return this._showModel.image;
    }
    get details(): any {
        return this._showModel.details;
    }
}
Object.seal(ShowModel);

export const ShowSchemaModel: any = mongoose.model('show', schema, 'shows', true);