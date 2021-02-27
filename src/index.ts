

import express from 'express'
import { CLIENT_RENEG_LIMIT } from 'tls';
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

console.log(process.env)
mongoose.connect(
  process.env.MONGO_API_KEY,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.listen(port, () => {
  console.log("Recipe Chicken Heart Beets")
});



app = routes.register(app)