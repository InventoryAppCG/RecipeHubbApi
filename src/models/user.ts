
const userSchema = require('../schema/userSchema.ts')
const user = require('../util/modelHelper.ts')
const User = user.modelHelper('user', userSchema)
// #TODO create a User class
module.exports = {
create: (data) => {
    // //create user
    // //userModel
    const myData = new User({ firstName: data.first_name, lastName: data.last_name });
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

