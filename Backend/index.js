const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/player-routes')
const cors = require('cors');
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use('/players',router);


// database connection
mongoose.connect(
    "mongodb+srv://admin:73LQXFXPrQfpbh1u@cluster0.als73.mongodb.net/reviews?retryWrites=true&w=majority"
).then(()=>
    console.log("Data base is connected")).then(()=>{
        app.listen(5000)
    }).catch((err)=> console.log(err));