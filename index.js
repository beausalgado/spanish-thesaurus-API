require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose'); 

async function connect(){
    try {
        await mongoose.connect(process.env.URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connect();

//   

app.use(express.json())

const entriesRouter = require('./routes/entriesRouter')
app.use('/entries', entriesRouter)

app.listen(
    process.env.PORT,
    () => console.log(`Running live on http://localhost:${process.env.PORT}`)
)

