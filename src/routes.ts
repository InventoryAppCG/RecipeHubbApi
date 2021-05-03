module.exports = {
    register(app) {
        app.use('/user-auth/', require('./UserAuth'));

        //middleware
        app.use(require('../src/Middleware/UserToken'))
        
        //all routes will be exported here
        app.use("/public/recipe", require("./Public/RecipePublic"));
        app.use("/recipe/", require("./Recipe"));
        app.use('/user/', require('./User'));
        app.use("/comments/", require("./Comments"));
    }
}