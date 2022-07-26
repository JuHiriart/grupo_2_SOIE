const {readFileSync,writeFileSync} = require ('fs');
const path = require('path');
const multer = require('multer');

const fileDir = path.resolve( __dirname, '..', 'database', 'products.json' );


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

products.storeFile = (req, file) => {

    const storage = multer.diskStorage({

        destination: function (req, file, cb) {
          // cb(null, path.resolve(__dirname, '..', '..', 'public','images'));
          cb(null, './app/public/images/products')
        },

        filename: function (req, file, cb) {
          let name = ['img', new Date().getTime() , ...req.body.name.toLowerCase().split(" ")].join('-') + path.extname(file.originalname);
          cb(null, name)
        }
      })

    return multer({storage})

}

products.put = (product) => {
  let current = products.index();
  let index = current.map(prod => prod.id).indexOf(product.id);
  current [index] = product;
  let stringified = JSON.stringify(current,{utf8: true},'\t')
  writeFileSync( fileDir, stringified );
}


module.exports = products;
