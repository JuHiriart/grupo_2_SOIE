const {readFileSync,writeFileSync} = require ('fs');
const { resolve } = require('path');

const products = {
    index: function(){
        let file = resolve(__dirname, '../database', 'products.json');
        let data = readFileSync(file);
        return JSON.parse(data);
    }
}


let renderData = require('../modules/render');
let copy = JSON.parse(JSON.stringify(renderData));

copy.data.productList.database = products.index();

module.exports = copy.data

console.log("renderData",renderData)

console.log(
    module.exports
)