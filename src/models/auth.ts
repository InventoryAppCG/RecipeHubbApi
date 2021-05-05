import { model, Schema, Model, Document } from 'mongoose';

interface AuthModel extends Document {
    userName:String,
    email: String,
    password: String
}

const AuthSchema: Schema = new Schema({
    userName: {
        type: String,
        default: null,
        unique: true
    },
    email: {
        type: String,
        default: null,
        unique: true
    },
    password: {
        type: String,
        default: null
    },
    
},{timestamps:true});



// exporting Auth model
export const AuthModel = model<AuthModel>('Auth', AuthSchema);

// exporting interface / querying
export interface IAuthModel extends Model<AuthModel> {
    findByEmail(email, cb);
}