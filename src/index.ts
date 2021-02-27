

import express from 'express'
let app = express();
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const port = process.env.PORT || 3000;
const routes = require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


// Middleware
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(
  "mongodb+srv://gman:1@learning-cluster-jurht.mongodb.net/SeniorProject?retryWrites=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.listen(port, () => {
  console.log("Recipe Chicken Heart Beets")
});



app = routes.register(app)