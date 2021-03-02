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



// exporting user model
export const UserModel = model<AuthModel>('Auth', AuthSchema);

// exporting interface / querying
export interface IUserModel extends Model<AuthModel> {
    findByEmail(email, cb);
}