const {static} = require('express');
const {join} = require ('path');
module.exports = static(join(__dirname, '../public'));