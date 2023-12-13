const express = require('express');
const app = express();
const path  = require("path");
const os = require("os");




app.get("/",(req,res)=>{

       res.send("hey");
})

app.get("/path",(req,res)=>{
       res.send(__dirname);
})
app.get("/system",(req,res) => {
        res.send(os.platform());
})
app.get("/version",(req,res) => {
       console.log(os.version());
})

app.get('/items/:vegetable', (req, res) => {
       let veg = req.params.vegetable;
       res.send(`This is the page for ${veg}`);
})

app.listen(3000);
