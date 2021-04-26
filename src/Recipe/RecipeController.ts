

const Recipe = require('../models/recipeSchema');

module.exports = {
  async create(req, res) {
    try {
      const recipeAgg = {...req.body, ownerId: req.user[0].id}
      const recipe = await Recipe.RecipeModel.create(recipeAgg);
      res.status(200).json(recipe)

    } catch (err) {
      console.log(err)
      res.status(404).send(err)
    }
  },
  async read(req, res) {
    try {
      const recipes = await Recipe.RecipeModel.find({});
      res.status(200).json(recipes)
    } catch (err) {
      res.status(404).send(err)

    }
  },
  async readOne(req, res) {
    try {
      const recipe = await Recipe.RecipeModel.findOne({_id: req.params.id});
      res.status(200).json(recipe)
    } catch (err) {
      res.status(404).send(err)
    }
  },
  async update(req, res) {
    console.log(req.body)
    try {
       await Recipe.RecipeModel.updateOne({_id: req.params.id}, req.body)
      res.send(`Successfully updated ${req.params.id}`)
    } catch (err) {
      res.status(404).send('Err Updating')
    }
  },
  async delete(req, res) {
    try {
       await Recipe.RecipeModel.deleteOne({id: req.params.id}, req.body)
      res.send(`Successfully deleted ${req.params.id}`)
    } catch (err) {
      res.status(404).send('Err Deleting')
    }
  },
}
