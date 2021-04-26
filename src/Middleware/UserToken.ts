const jwt = require('../util/jwt.ts')
const User = require('../models/userSchema');
const UserMid = async (req, res, next) => {
    console.log(req)
    const claims = jwt.valid(req.headers.token)
    if (!claims) {
        throw Error('Invalid Token')
    }
    
    req.user = await User.UserModel.find({ "email": claims.email })

    return next()
}

export = UserMid