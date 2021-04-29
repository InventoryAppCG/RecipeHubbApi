

const Recipe = require('../models/recipeSchema');
const s3 = require('../util/s3')

module.exports = {
  async create(req, res) {
    try {
      let recipeAgg = { ...req.body, ownerId: req.user[0].id }
      const image = req.body.recipeImage || null

      if (image) {
        //JSON.parse image
        const readImage = JSON.parse(image)
        //remove spacees
        const name = req.body.name.trim()
        //update image and store  i.e : 10023424-chicken Sandwich
        const s3Image = await s3.uploadfile(readImage, `${req.user[0].id}-${name}`)
        //update recipeImage with s3 image
        recipeAgg = { ...recipeAgg, recipeImage: s3Image.Location }
      }
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
    async getRecipesById(req, res) {
      try {
        const recipes = await Recipe.RecipeModel.find({_id: req.user[0].id});
        res.status(200).json(recipes)
      } catch (err) {
        res.status(404).send(err)
  
      }
  },
  async readOne(req, res) {
    try {
      const recipe = await Recipe.RecipeModel.findOne({ _id: req.params.id });
      res.status(200).json(recipe)
    } catch (err) {
      res.status(404).send(err)
    }
  },
  async update(req, res) {
    try {
      const image = req.body.recipeImage || null
      if (image) {
        //JSON.parse image
        const readImage = JSON.parse(image)
        //remove spacees
        const name = req.body.name.trim()
        //update image and store  i.e : 10023424-chicken Sandwich
        const s3Image = await s3.uploadfile(readImage, `${req.user[0].id}-${name}`)
        //update recipeImage with s3 image
        req.body = { ...req.body, recipeImage: s3Image.Location }
      }
      await Recipe.RecipeModel.updateOne({ _id: req.params.id }, req.body)
      res.status(200).send(`Successfully updated ${req.params.id}`)

    } catch (err) {
      console.log(err)
      res.status(404).send('Err Updating')
    }
  },
  async delete(req, res) {
    try {
      await Recipe.RecipeModel.deleteOne({ id: req.params.id }, req.body)
      res.status(200).send(`Successfully deleted ${req.params.id}`)
    } catch (err) {
      res.status(404).send('Err Deleting')
    }
  },

}
