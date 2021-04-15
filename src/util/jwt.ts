const jwt = require('jsonwebtoken')
const tokenExpiration = '1y'

export = {
  create: function (user) {
    return jwt.sign(
      this.claims(user),
      this.secret(),
      { expiresIn: tokenExpiration }
    )
  },

  claims: function (user) {
    return {
      id: user._id,
    }
  },

  valid: function (token) {
    if (token) {
      // passed in as either the token or the auth header, i.e, 'Bearer {token}'
      token = token.split(' ')
      token = (token.length > 1) ? token[1] : token[0]

      const valid = jwt.verify(token, this.secret())

      // if it's valid, claims are returned
      if (typeof (valid.id) !== 'undefined') { return valid }
    }

    return false
  },

  secret: function () {
    return process.env.SECRET_KEY
  }
}