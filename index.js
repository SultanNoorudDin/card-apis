const bodyParser = require("body-parser");
const express = require("express");
const cardRoutes = require('./route/cardRoutes')
const app = express();

//Middle wares
app.use(bodyParser.json());


//Apis 

app.use('/api',cardRoutes);



app.listen(2000,()=>{
    console.log(`Server running at 2000`);
})