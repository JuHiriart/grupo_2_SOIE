const { render } = require('ejs');
const views = require('../modules/file.js');
const {data,renderCallback} = require('../modules/render')

module.exports = {
    login: renderCallback('login'),
    signin: renderCallback('signin'),
}