module.exports = {
    register(app) {
        //all routes will be exported here
        app.use("/public/recipe", require("./Public/RecipePublic"));


        //middleware
        app.use(require('../src/Middleware/UserToken'))

        app.use('/user/', require('./User'));
        app.use("/recipe/", require("./Recipe"));
        app.use("/comments/", require("./Comments"));
        app.use('/user-auth/', require('./UserAuth'));
    }
}