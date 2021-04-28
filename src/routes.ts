module.exports = {
    register(app) {
        //all routes will be exported here
        app.use('/user/', require('./User'));
        app.use("/recipe/", require("./Recipe"));
        app.use("/public/recipe", require("./Public/RecipePublic"));
        // app.use("/comments/", require("./Comments"));
        app.use('/user-auth/', require('./UserAuth'));
    }
}