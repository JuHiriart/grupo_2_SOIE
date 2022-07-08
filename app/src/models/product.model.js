const {readFileSync,writeFileSync} = require ('fs');
const { resolve } = require('path');



const products = {
    index: () => {
        let data = readFileSync( resolve(__dirname, '..','database', 'products.json') );
        return JSON.parse(data);
    },
    add : (product) => {
        let current = this.index();
        current.push(product);
        let stringified = JSON.stringify(current,{utf8: true})
        let file = resolve(__dirname, '..','database', 'products.json');
        writeFileSync( file, stringified );
    }
}

module.exports = products ;

