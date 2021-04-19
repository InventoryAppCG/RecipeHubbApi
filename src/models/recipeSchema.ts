import { model, Schema, Model,  Document } from 'mongoose';
import {ObjectId, Timestamp} from 'mongodb'

interface RecipeModel extends Document {
    author: ObjectId
    toolsNeeded: Object
    ownerId: ObjectId,
    ingridients: [Object],
    instructions: String,
    recipeImage: String,
    servingSize: String,
    type: Number,
    category: [String],
    favorite: Number,
    dateCreated: Timestamp,
    isPublic: Boolean
}

const RecipeSchema: Schema = new Schema({
        author:{
            type: ObjectId,
            require: true
        }, 
        toolsNeeded: {
            type: Object,
            default: {}
        },
        ownerId: {
            type: ObjectId,
            default: {}
        },
        ingridients: {
            type: String,
            default: null
        },
        instructions: {
            type: String,
            default: null
        },
        recipeImage: {
            type: String,
            default: null
        },
        servingSize: {
            type: String,
            default: null
        },
        type: {
            type: Number,
            default: 0
        },
        category: {
            type: Array,
            default: []
        },
        favorite: {
            type: Number,
            default: 0
        },
        dateCreated: {
            type: Date,
            default: Date.now()
        },
        isPublic: {
            type: Boolean,
            default: false
        }
       
});



// exporting user model
export const UserModel = model<RecipeModel>('Recipes', RecipeSchema);

// exporting interface / querying
export interface IUserModel extends Model<RecipeModel> {
    findById(id, cb);
}