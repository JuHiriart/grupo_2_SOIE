const {readFileSync,writeFileSync} = require ('fs');
const { resolve } = require('path');

const fileDir = resolve( __dirname, '..', 'database', 'products.json' );



module.exports = {
    index: () => {
        let data = readFileSync( fileDir, 'utf8' );
        return JSON.parse(data);
    },
    add : (product) => {
        let current = this.index();
        current.push(product);
        let stringified = JSON.stringify(current,{utf8: true},'\t')
        writeFileSync( fileDir, stringified );
    },
    getById : ( id ) => {
        let current = this.index();
        current.forEach( (product) => {
            if (product.id === id) return product;
        } );
    }
}
