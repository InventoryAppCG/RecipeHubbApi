import { CLIENT_RENEG_LIMIT } from "node:tls";

export { }
const Auth = require('../models/auth.ts')
const bcrypt = require('bcrypt')
const User = require('../models/userSchema');
const jwt = require('../util/jwt.ts')



module.exports = {
    async create(req, res) {
        try {
            console.log('here!')
            // jwt token (userEmail, userPassword)
            // take user password
            // hash password
            // save to auth database
            // verification: email -> password: characters/symbols, email isn't stored in db
            const password = req.body.password
            const email = req.body.email
            const userName = req.body.username
            const saltRounds = process.env.SALT // store in env
            const hash = await bcrypt.hash(password, Number(saltRounds))

            const save = {
                email,
                userName
            }

            await Auth.AuthModel.create({ email, password: hash })
            const user = await User.UserModel.create(save);

            res.status(200).json({ user, success: true })

        } catch (err) {
            console.log(err)
            res.status(404).send(`Error Adding a User: ${err}`)
        }



    },

    async read(req,res) {
        try {
        const authUser = await Auth.AuthModel.find({})
        res.json(authUser)

        } catch(err) {
            res.status(404).send(`Error Showing auth user: ${err}` )
        }
    },
    async login(req, res) {
        try {
            const authUser = await Auth.AuthModel.findOne({email: req.body.email})

          // compare provided password with stored password
          const userExists =  await bcrypt.compare(req.body.password, authUser.password)
          const token = await jwt.create(authUser)

           if(!userExists) {
               throw new Error('Unable to login')
        }
        res.json({message: "Login Succeessful", status: true, token })

        } catch(err) {
            console.log(err)
            res.status(404).send('Unable to login')
        }
    } 
}