
const {data,renderCallback} = require('../modules/render')

module.exports = {
    home: renderCallback('index'),
    error: renderCallback('error'),
}
