const jwt = require('../util/jwt.ts')
const UserMid = (req,res, next) => {
    const claims = jwt.valid(req.token)

    if(!claims) {
    res.send('Invalid Token')
}
    req.user = claims

    return next()
}

export = UserMid