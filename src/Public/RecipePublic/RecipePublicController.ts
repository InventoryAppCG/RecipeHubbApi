const RecipePublic = require('../../models/recipeSchema');
module.exports = {
    async get(req, res) {
        try {
            // return all public recipes
            const recipes = await RecipePublic.RecipeModel.find({public: true})
            res.status(200).json(recipes)
        } catch(err) {
            console.log(err)
            res.send(err)
        }
    }
}