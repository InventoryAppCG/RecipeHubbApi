import { model, Schema, Model,  Document } from 'mongoose';
import {ObjectId} from 'mongodb'

interface CommentsModel extends Document {
    recipeId: ObjectId,
    rating: [Object],
    body: [Object]
}

const CommentsSchema: Schema = new Schema({
        recipeId: {
            type: ObjectId,
            default: null
        },
        ratings: {
            type: [Object],
            default: []
        },
    }, {timestamps: true}  );



// exporting user model
export const CommentModel = model<CommentsModel>('Comments', CommentsSchema);

// exporting interface / querying
export interface IUserModel extends Model<CommentsModel> {
    findByEmail(id, cb);
}