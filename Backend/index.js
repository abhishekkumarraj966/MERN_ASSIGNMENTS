const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const port =8080

//transferring the context of app to express
const app = express();

//listing on the port 3000

app.use(express.json());

app.listen(8080, () => {
    console.log(`Server Started at ${port}`)
})

//http://localhost:3000/api/post
//http://localhost:3000/api/getAll
require('dotenv').config();

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use('/api', routes)
