const express = require('express');
const app = express();


app.get("/",(req,res)=>{
       res.send("hey");
})

app.get('/items/:vegetable', (req, res) => {
       let veg = req.params.vegetable;
       res.send(`This is the page for ${veg}`);
})

app.listen(3000);
