

module.exports = {
    register(app) {
        //Middleware for Auth
        app.use(function (req, res, next) {
            console.log(req.headers)
            console.log(req.header)
        })
        // app.use(require('./auth/AuthMiddleware.ts'))
        //all routes will be exported here
        app.use("/user/", require("./UserRoutes/index.ts"));
    }
    }