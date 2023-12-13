const express = require('express');
const app = express();
const path  = require("path");




app.get("/",(req,res)=>{

       res.send("hey");
})

app.get("/path",(req,res)=>{
       res.send(__dirname);
})

app.get('/items/:vegetable', (req, res) => {
       let veg = req.params.vegetable;
       res.send(`This is the page for ${veg}`);
})

app.listen(3000);
