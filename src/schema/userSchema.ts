const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId


const schema = {
    user: {
        author: ObjectId,
        username: {
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
            type: String,
            default: null
        },
    }
}

module.exports = new mongoose.Schema(schema)