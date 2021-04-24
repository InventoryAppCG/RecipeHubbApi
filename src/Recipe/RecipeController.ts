

const Recipe = require('../models/recipeSchema');

module.exports = {
  async create(req, res) {
    try {
      const recipeAgg = {...req.body, ownerId: req.user[0].id}
      const recipe = await Recipe.RecipeModel.create(recipeAgg);
      res.json(recipe)
    } catch (err) {
      console.log(err)
      // res.status(404).send(err)
    }
  },
  async read(req, res) {

    try {
      const recipe = await Recipe.RecipeModel.find({});
      res.json(recipe)
    } catch (err) {
      res.status(404).send(err)

    }
  },
  async update(req, res) {
    try {
       await Recipe.RecipeModel.updateOne({id: req.params.id}, req.body)
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
