export{}
const jwt = require('../util/jwt.ts')
const { UserModel } = require('../models/userSchema');
const UserMid = async (req, res, next) => {
    const claims = jwt.valid(req.headers.token)
    if (!claims) {
        throw Error('Invalid Token')
    }

    req.user = await UserModel.findOne({ "email": claims.email })

    return next()
}

export = UserMid