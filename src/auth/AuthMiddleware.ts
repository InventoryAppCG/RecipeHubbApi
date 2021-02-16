module.exports = (res, req, next) => {
    // if (req.headers.authorization !== process.env.AUTHORIZATION) {
    //     return res.error(res, 'Unauthorized')
    // }
    console.log( {...req.header()})
    //  res.header("Access-Control-Allow-Origin", req.header('origin'))
    return next()
}