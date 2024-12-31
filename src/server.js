const express = require('express');
const app = express();

app.get('/', (req,res)=>{
     res.send("Welcome to the app!"); 
 });

app.listen(3000, function () {
    console.log("The app is listening on port 3000");
});