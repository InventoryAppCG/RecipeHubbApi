import { model, Schema, Model,  Document } from 'mongoose';
import {ObjectId} from 'mongodb'

interface UserModel extends Document {
    author: ObjectId
    userName: String
    firstName: String,
    lastName: String,
    email: String,
    profilePic: String,
    numRecipes: Number
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
            default: 0
        },
});



// exporting user model
export const UserModel = model<UserModel>('User', UserSchema);

// exporting interface / querying
export interface IUserModel extends Model<UserModel> {
    findById(id, cb);
}