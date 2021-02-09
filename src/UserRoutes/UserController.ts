const UserModel = require('../models/user.ts')

module.exports = {
    async index(req, res) {
        UserModel.create(req.body)
        res.send('saved')
  
    }
}