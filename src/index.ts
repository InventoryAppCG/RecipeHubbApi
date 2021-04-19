

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

// Only this website can hit our api
app.use(cors({
  origin:['https://recipehubbapi.herokuapp.com/'],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))


mongoose.connect(
  process.env.MONGO_API_KEY,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
     
  }
);

app.get('/', (req,res) => {
  res.send("Unprotected Recipe Chicken Heart Beets")
})


app.listen(port, () => {
  console.log(`Recipe Chicken Heart Beets http://localhost:${port}`)
});

app = routes.register(app)

