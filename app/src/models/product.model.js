const {readFileSync,writeFileSync} = require ('fs');
const { resolve } = require('path');
module.exports = {
    index: function(){
        let file = resolve(__dirname, '../database', 'products.json');
        let data = readFileSync(file);
        return JSON.parse(data);
    }
}