import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import * as random from 'mongoose-simple-random';

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
schema.plugin(random);