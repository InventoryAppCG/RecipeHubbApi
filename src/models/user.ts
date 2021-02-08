
const userSchema = require('../schema/userSchema.ts')
const user = require('../util/modelHelper.ts')
const User = user.modelHelper('user', userSchema)

module.exports = {
create: (req,res) => {
    // //create user
    // //userModel
    const myData = new User({ first_name: req.body.first_name, last_name: req.body.last_name });
    myData
      .save()
      .then(item => {
        res.send("item saved to database. Go back to App");
      })
      .catch((item, err) => {
        res.status(400).send(`unable to save to database ${item}`);
      });
},
read: () => {
    // read user
},
update: () => {
    // update user
}

}

