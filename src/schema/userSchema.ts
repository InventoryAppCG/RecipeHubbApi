import { model, Schema, Model,  Document } from 'mongoose';
import {ObjectId} from 'mongodb'

interface UserModel extends Document {
    author: ObjectId
    userName: string
    firstName: string,
    lastName: string,
    email: string,
    profilePic: string,
    numRecipes: number
}

const UserSchema: Schema = new Schema({
        author:{
            type: ObjectId,
            require: true
        }, 
        userName: {
            type: String,
            default: null
        },
        firstName: {
            type: String,
            default: null
        },
        lastName: {
            type: String,
            default: null
        },
        email: {
            type: String,
            default: null
        },
        profilePic: {
            type: String,
            default: null
        },
        numRecipes: {
            type: Number,
            default: null
        },
});



// exporting user model
export const UserModel = model<UserModel>('User', UserSchema);

// exporting interface / querying
export interface IUserModel extends Model<UserModel> {
    findById(id, cb);
}