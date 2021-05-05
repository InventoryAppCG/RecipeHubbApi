import { model, Schema, Model,  Document } from 'mongoose';

interface UserModel extends Document {
    userName: String
    firstName: String,
    lastName: String,
    email: String,
    profilePic: String,
    numRecipes: Number,
    city: String,
    bio: String,
}

const UserSchema: Schema = new Schema({
        userName: {
            type: String,
            default: null,
            unique: true
        },
        firstName: {
            type: String,
            default: null,
        },
        lastName: {
            type: String,
            default: null,
        },
        city: {
            type: String,
            default: null
        },
        bio: {
            type: String,
            default: null
        },
        email: {
            type: String,
            default: null,
            unique: true
        },
        profilePic: {
            type: String,
            default: null
        },
        numRecipes: {
            type: Number,
            default: 0
        },
       
}, { timestamps: true });



// exporting user model
export const UserModel = model<UserModel>('User', UserSchema);

// exporting interface / querying
export interface IUserModel extends Model<UserModel> {
    findById(id, cb);
}