const {readFileSync,writeFileSync} = require ('fs');
const { resolve } = require('path');
// const products = require('../controllers/products');

const fileDir = resolve( __dirname, '..', 'database', 'products.json' );


const products = {};

products.index = () => {
    let data = readFileSync( fileDir, 'utf8' );
    return JSON.parse(data);
};

products.add = (product) => {
    let current = products.index();
    current.push(product);
    let stringified = JSON.stringify(current,{utf8: true},'\t')
    writeFileSync( fileDir, stringified );
}

products.getById = ( id ) => {
    let current = products.index();
    return current.find( product => product.id == id );
}

products.getNewId = () => {
    let current = products.index();
    let ids = current
                .filter(product => product.id )
                .map(product => parseInt(product.id));
    return Math.max(...ids) + 1;
}


module.exports = products;
