const express = require('express');
const app = express();
const path  = require("path");
const os = require("os");
const fs = require('fs');
const {exec}  = require('child_process');


app.get("/time",(req,res) => {
     

const timestamp = '20190927 10:00:00';

exec(`/bin/date --set="${timestamp}"`, (err, stdout, stderr) => {
  if (err || stderr) {
    console.error(err);
    console.log(stderr);
  } else {
    console.log(stdout);
    console.log(`Successfully set the system's datetime to ${stdout}`);
  }
})
})


app.get("/create",(req,res) => {
       fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
})
app.get("/read",(req,res) => {

const directory = './';

fs.readdir(directory, (err, files) => {
  files.forEach(file => {
    // get the details of the file 
    let fileDetails = fs.lstatSync(path.resolve(directory, file));
    // check if the file is directory 
    if (fileDetails.isDirectory()) {
      console.log('Directory: ' + file);
    } else {
      console.log('File: ' + file);
    }
  });
});
})




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
       res.send(os.version());
})
app.get("/home",(req,res) => {
        res.send(os.homedir());
})
app.get('/items/:vegetable', (req, res) => {
       let veg = req.params.vegetable;
       res.send(`This is the page for ${veg}`);
})

app.listen(3000);
