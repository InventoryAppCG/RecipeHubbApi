export { }
const { CommentModel } = require('../models/comments')

module.exports = {
    async get(req, res) {
        try {
            if (!req.params.id) {
                throw Error("No recipeId provided")
            }
            let comments = await CommentModel.findOne({ recipeId: req.params.id })

            if (comments && Object.entries(comments).length !== 0) {


                //get ratings array
                const ratings = comments.ratings
                
                // get length of rating aray of objects
                const length = comments.ratings.length

                if(length !== 0) {
                //adding rating value together
                const total = ratings.reduce((accumulator, currentValue) => accumulator.rated + currentValue.rated)

                // get the average
                const average = total / length


                // append average to the comments data
                comments = { ...comments._doc, average: average }
                }
            }

            res.status(200).json(comments)

        } catch (err) {
            console.log(err)
            res.status(404).send(err)

        }
    },
    async store(req, res) {
        try {
            const comments = await CommentModel.create(req.body)

            res.status(200).json(comments)

        } catch (err) {
            console.log(err)
            res.status(404).send(err)
        }
    }
}