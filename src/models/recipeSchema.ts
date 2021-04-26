import { model, Schema, Model,  Document } from 'mongoose';
import {ObjectId, Timestamp} from 'mongodb'

interface RecipeModel extends Document {
    name: String,
    ownerId: ObjectId,
    ingredients: [String],
    instructions: String,
    recipeImage: String,
    servingSize: Number,
    soEasyRating: Number,
    tags: [String],
    favorited: Number,
    dateCreated: Timestamp,
    public: Boolean
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
            type: Array,
            default: []
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
            type: Number,
            default: null
        },
        soEasyRating: {
            type: Number,
            default: null
        },
        tags: {
            type: Array,
            default: []
        },
        favorited: {
            type: Number,
            default: 0
        },
        dateCreated: {
            type: Date,
            default: Date.now()
        },
        public: {
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
