module.exports = (req, res, next) => {
    if (req.headers.authorization !== process.env.AUTHORIZATION) {
        return res.send('Doesnt work')
    }
    //  res.header("Access-Control-Allow-Origin", req.header('origin'))x
    return next()
}