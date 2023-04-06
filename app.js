require("dotenv").config();
const express = require("express");
const cors = require("cors");


const app = express()
const port = process.env.PORT || 4000;
const token = process.env.API_KEY

//  MIDDLEWARES
app.use(cors());

app.get('/api', (req, res) => {
  res.status(200).json({ token })
})

app.listen(port, () => console.log(`Server started on port ${port}`))
