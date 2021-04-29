

const User = require('../models/userSchema')
const awss3 = require('../util/s3')

module.exports = {
  async create(req, res) {
    try {
      const user = await User.UserModel.create(req.body);
      res.send(user, 'Successfully added a user')
    } catch (err) {
      res.status(err)

    }
  },
  async read(req, res) {

    try {
      const user = await User.UserModel.find({});
      res.json(user)
    } catch (err) {
      res.status(404).send(err)

    }
  },
  async data(req, res) {
    try {
      const user = {
        userName: req.user[0].userName,
        firstName: req.user[0].firstName,
        lastName: req.user[0].lastName,
        email: req.user[0].email,
        profilePic: req.user[0].profilePic,
        numRecipes: req.user[0].numRecipes,
        bio: req.user[0].bio,
        city: req.user[0].city
      }
      res.json(user)
    } catch (err) {
      res.status(404).send(err)

    }
  },
  async update(req, res) {
    try {
      //  update AWS image for image
      const image = req.body.profilePic || null
      let userAgg = {...req.body}

      if (image == null) {
        //JSON.parse image
        const readImage = JSON.parse(image)
        //remove spacees
        const name = (req.body.userName).trim()
        //update image and store  i.e : 10023424-chicken Sandwich
        const s3Image = await awss3.uploadfile(readImage, `${req.user[0].id}-${name}`)
        //update recipeImage with s3 image
        userAgg = { ...req.body, profilePic: s3Image.Location }
      }

       await User.UserModel.updateOne({email: req.params.email}, userAgg)
      res.status(200).json(userAgg)
    } catch (err) {
      console.log(err)
      res.status(404).send('Err Updating')
    }
  },
  async delete(req, res) {
    try {
       await User.UserModel.deleteOne({email: req.params.email}, req.body)
      res.send(`Successfully deleted ${req.params.email}`)
    } catch (err) {
      res.status(404).send('Err Deleting')
    }
  },
}