const {static} = require('express');
const {resolve} = require ('path');
module.exports = static(resolve(__dirname,'..','..','public'));