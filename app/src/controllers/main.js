const views = require('../modules/file.js');
module.exports = {
    home:(req,res) => res.sendFile(views('index.html'))
}