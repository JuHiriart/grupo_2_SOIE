const { render } = require('ejs');
const {data,renderCallback} = require('../modules/render')

module.exports = {
    login: renderCallback('login'),
    signin: renderCallback('signin'),
}