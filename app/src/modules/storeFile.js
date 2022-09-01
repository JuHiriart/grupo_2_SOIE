const multer = require('multer');

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
      // cb(null, path.resolve(__dirname, '..', '..', 'public','images'));
      cb(null, './app/public/images/products')
    },

    filename: function (req, file, cb) {
      let name = ['img', new Date().getTime() , ...req.body.name.toLowerCase().split(" ")].join('-') + path.extname(file.originalname);
      cb(null, name)
    }

  });



module.exports = multer({storage});