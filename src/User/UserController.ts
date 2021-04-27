

const User = require('../models/userSchema');

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
        userName: req.user[0].fuserName,
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
       await User.UserModel.updateOne({email: req.params.email}, req.body)
      res.send(`Successfully updated ${req.params.email}`)
    } catch (err) {
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