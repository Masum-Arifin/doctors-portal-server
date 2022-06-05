// index.js- get-and-post
const express = require('express')
const cors = require('cors');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
  
app.get('/', (req, res) =>{
    res.send('Hello from Doctor uncle')
})

app.listen(port, () =>{
    console.log('Doctor App Listening to port', port);
})