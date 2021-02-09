

module.exports = {
    register(app) {
    //all routes will be exported here
        app.use("/user/", require("./UserRoutes/index.ts"));
    }
    }