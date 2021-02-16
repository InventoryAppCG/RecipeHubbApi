
const User = require('../schema/userSchema.ts');

module.exports = {
    async index(req, res) {
      const user = await User.UserModel.create(req.body);
         res.send(user)
  
    }
}