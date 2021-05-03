export{}
const { CommentModel } = require('../models/comments')

module.exports = {
    async get(req,res) {
        try {
        if(!req.params.id) {
            throw Error("No recipeId provided")
        }
        let comments = await CommentModel.find({recipeId: req.params.id})
            if (comments.length > 0){

                //get ratings array
                const ratings = comments.ratings
    
                //adding rating value together
                let total = 0
                for (let comment of comments){
                    total += comment.rating
                }
                // get the average
                const average = total / comments.length
    
    
                // append average to the comments data
                comments = { comments: [...comments], average: average}
            }

            res.status(200).json(comments)
        
        } catch(err) {
            console.log(err)
            res.status(404).send(err)

        }
    },
    async store(req, res) {
        try {
            const comments = await CommentModel.create(req.body)

            res.status(200).json(comments)

        } catch(err) {
            console.log(err)
            res.status(404).send(err)
        }
    },

    async delete(req, res) {
        try {
          await CommentModel.deleteOne({ _id: req.params.id })
          res.status(200).send(`Successfully deleted ${req.params.id}`)
        } catch (err) {
          res.status(404).send('Err Deleting')
        }
    },
}