import { model, Schema, Model,  Document } from 'mongoose';
import {ObjectId} from 'mongodb'

interface AuthModel extends Document {
    email: String,
    password: String
}

const AuthSchema: Schema = new Schema({
        email: {
            type: String,
            default: null
        },
        password: {
            type: String,
            default: null
        },
});



// exporting Auth model
export const AuthModel = model<AuthModel>('Auth', AuthSchema);

// exporting interface / querying
export interface IAuthModel extends Model<AuthModel> {
    findByEmail(email, cb);
}