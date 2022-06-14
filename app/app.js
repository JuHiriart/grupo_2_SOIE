const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

const publicPath = path.join(__dirname, 'public/')
app.use(express.static(publicPath));

const server = app.listen(2000, () => {
    console.log("server is running")
})


app.get("/", function (req, res) {
    let dir = path.resolve(__dirname, "./src/index.html");
    res.sendFile(dir)
})