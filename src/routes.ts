module.exports = {
    register(app) {
        // app.use(require('./auth/AuthMiddleware'))
        //all routes will be exported here
        app.use('/user/', require('./User'));
        // app.use('/public/recipe', require('./Public/RecipePublicController'))
        app.use("/recipe/", require("./Recipe"));
        // app.use("/comments/", require("./Comments"));
        app.use('/user-auth/', require('./UserAuth'));
    }
}