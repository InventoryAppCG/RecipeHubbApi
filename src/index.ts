const mongoose = require('mongoose')
const express = require('express');
const dotenv = require('dotenv') 
const UserModel = require('./models/user.ts')
const bodyParser = require('body-parser')
// const UserModel = require('./models/user')

mongoose.connect(
  process.env.MONGO_API_KEY,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

dotenv.config()
const app = express();
const port = process.env.PORT || 3333
app.use(bodyParser.json())


app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(port, () => {
  console.log(` Server is running at localhost:${port}`);
})

app.post('/create-user', (req, res) => {
UserModel.create(req,res)
})
