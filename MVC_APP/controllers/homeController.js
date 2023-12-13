const express = require('express');
const app = express();


exports.sendReqParam = (req, res) => {
    let veg = req.params.vegetable;
    res.end(`the param ${veg}`);
}