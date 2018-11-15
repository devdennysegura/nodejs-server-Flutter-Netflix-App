import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;
ObjectId.prototype.valueOf = function () {
    return this.toString();
};

export const schema: any = new Schema(
    {
        id: Number,
        name: String,
        image: String,
        details: {
            genres: Array,
            year: String,
            description: String,
            cast: Array,
            episodes: Array
        }
    }, {
        timestamps: false, versionKey: false
    });