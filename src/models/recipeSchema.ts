import { model, Schema, Model,  Document } from 'mongoose';
import {ObjectId, Timestamp} from 'mongodb'

interface RecipeModel extends Document {
    name: String,
    ownerId: ObjectId,
    ingredients: String,
    instructions: String,
    recipeImage: String,
    servingSize: String,
    type: String,
    categories: [String],
    favorite: Number,
    dateCreated: Timestamp,
    isPublic: Boolean
}

const RecipeSchema: Schema = new Schema({
        name: {
            type: String,
            default: null
        },
        ownerId: {
            type: ObjectId,
            default: null
        },
        ingredients: {
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
            type: String,
            default: null
        },
        categories: {
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
export const RecipeModel = model<RecipeModel>('Recipes', RecipeSchema);

// exporting interface / querying
export interface IUserModel extends Model<RecipeModel> {
    findById(id, cb);
}