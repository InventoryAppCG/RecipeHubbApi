import express from 'express';
import dotenv from 'dotenv'


dotenv.config()
const app = express();
const port = process.env.PORT || 3333


app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(port, () => {
  console.log(` Server is running at https://localhost:${port}`);
})
