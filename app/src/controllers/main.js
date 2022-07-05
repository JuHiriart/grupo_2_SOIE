const views = require('../modules/file.js');
const {data,renderCallback} = require('../modules/render')

module.exports = {
    home: renderCallback('index')
}
