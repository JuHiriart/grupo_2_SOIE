const {readFileSync,writeFileSync} = require ('fs');
const { resolve } = require('path');



const products = {
    fileDir : resolve(__dirname, '..','database', 'products.json'),
    index: () => {
        let data = readFileSync( this.fileDir );
        return JSON.parse(data);
    },
    add : (product) => {
        let current = this.index();
        current.push(product);
        let stringified = JSON.stringify(current,{utf8: true})
        let file = this.fileDir ;
        writeFileSync( file, stringified );
    },
    getById : ( id ) => {
        let current = this.index();
        current.forEach( (product) => {
            if (product.id === id) return product;
        } );
    }
}

module.exports = products ;

