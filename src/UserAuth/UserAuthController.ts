import { model } from "mongoose";

export { }
const Auth = require('../models/auth.ts')
const bcrypt = require('bcrypt')
const User = require('../models/userSchema');
const jwt = require('../util/jwt.ts')


module.exports = {
    async create(req, res) {
        try {
            const {password, email, userName, firstName, lastName, city, bio} = req.body
            // take user password
            // hash password
            // save to auth database
            // verification: email -> password: characters/symbols, email isn't stored in db
            const saltRounds = process.env.SALT // store in env
            const hash = await bcrypt.hash(password, Number(saltRounds))
            const save = {
                email,
                userName,
                firstName,
                lastName,
                bio,
                city
            }

            await Auth.AuthModel.create({ userName, email, password: hash })
            const user = await User.UserModel.create(save);

            res.status(200).json({ user, success: true })

        } catch (err) {
            console.log(err)
            res.status(404).send(`Error Adding a User: ${err}`)
        }



    },

    async read(req, res) {
        try {
            const authUser = await Auth.AuthModel.find({})
            res.json(authUser)

        } catch (err) {
            res.status(404).send(`Error Showing auth user: ${err}`)
        }
    },
    async login(req, res) {
        try {

            // if they pass in either email or password
            const authUser = await Auth.AuthModel.findOne(req.body.query)

            // compare provided password with stored password
            const userExists = await bcrypt.compare(req.body.password, authUser.password)
            const token = await jwt.create(authUser)

            if (!userExists) {
                throw new Error('Unable to login Wrong password')
            }
            res.json({ message: "Login Succeessful", success: true, token })

        } catch (err) {
            console.log(err)
            res.status(404).send('Unable to login')
        }
    }
}