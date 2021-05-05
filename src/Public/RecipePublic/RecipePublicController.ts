//typescript bug
export{}
const { RecipeModel } = require('../../models/recipeSchema');
const { UserModel } = require('../../models/userSchema');
const { CommentModel } = require('../../models/comments');
module.exports = {
    async get(req, res) {
        try {
            // return all public recipes
            const recipes = await RecipeModel.find({ public: true })
            res.status(200).json(recipes)
        } catch (err) {
            console.log(err)
            res.send(err)
        }
    },
    async search(req, res) {
        try {
            // grab userId
            const user = req.body.query.userName ? await UserModel.findOne({ userName: req.body.query.userName }) : null
            // agg is either req.body or added userId
            let query = req.body.query
            if (user) {
                //remove userName
                const { userName, ...rest } = req.body.query
                //update ..rest with ownerId
                query = { ...rest, ownerId: user._id, public:true }
            }

            if (!user) {
                // remove null userName
                const { userName, ...rest } = req.body.query

                query = { ...rest, public:true }
            }
            // query gets passed in by frontend returns recipes 
            const recipes = await RecipeModel.find(query)



            res.status(200).json(recipes)
        } catch (err) {
            console.log(err)
            res.send(err)
        }
    },
 
}