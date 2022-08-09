const {readFileSync,writeFileSync} = require ('fs');
const path = require('path');
const multer = require('multer');

const fileDir = path.resolve( __dirname, '..', 'database', 'users.json' );


const users = {};

users.index = () => {
    let data = readFileSync( fileDir, 'utf8' );
    return JSON.parse(data);
};

users.add = (user) => {
    let current = users.index();
    current.push(user);
    let stringified = JSON.stringify(current,{utf8: true},'\t')
    writeFileSync( fileDir, stringified );
}

users.getById = ( id ) => {
  let current = users.index();
  return current.find( user => user.id == id );
}

users.getNewId = () => {
  let current = users.index();
  if (current.length === 0) {
    return 1;
  }
  let ids = current
              .filter(user => user.id )
              .map(user => parseInt(user.id));
  return Math.max(...ids) + 1;
}


// configuracion de multer para guardar los archivos de imagen de los usuarios
users.storeFile = (req, file) => {

    const storage = multer.diskStorage({

        destination: function (req, file, cb) {
          // cb(null, path.resolve(__dirname, '..', '..', 'public','images'));
          cb(null, './app/public/images/users/avatars')
        },

        filename: function (req, file, cb) {
          let name = ['img', new Date().getTime() , ...req.body.first_name.toLowerCase().split(" ")].join('-') + path.extname(file.originalname);
          cb(null, name)
        }
      })

    return multer({storage})

}

// esta funcion chequea si el usuario existe en el archivo de usuarios
users.isValidUser = (user) => {
  let current = users.index();
  let res = current.find( u => u.email == user.email );
  // devuelve el usuario si existe, sino devuelve false
  return bcrypt.compareSync(user.password, res.password) ? res : false;
}












module.exports = users;