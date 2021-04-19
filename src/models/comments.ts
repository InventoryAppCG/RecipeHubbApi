import { model, Schema, Model,  Document } from 'mongoose';
import {ObjectId} from 'mongodb'

interface CommentsModel extends Document {
    author: ObjectId
    ownerId: ObjectId,
    rating: Number,
    body: String
}

const CommentsSchema: Schema = new Schema({
        author: {
            type: ObjectId,
            default: null
        },
        ownerId: {
            type: ObjectId,
            default: null
        },
        rating: {
            type: Number,
            default: 0
        },
        body: {
            type: String,
            default: null
        }
});



// exporting user model
export const UserModel = model<CommentsModel>('Auth', CommentsSchema);

// exporting interface / querying
export interface IUserModel extends Model<CommentsModel> {
    findByEmail(id, cb);
}