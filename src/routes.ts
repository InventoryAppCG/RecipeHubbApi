module.exports = {
    register(app) {
        //Middleware for Auth to use routes
        app.use(require('./auth/AuthMiddleware'))
        
        //all routes will be exported here
        app.use("/user/", require("./UserRoutes/index"));
    }
    }