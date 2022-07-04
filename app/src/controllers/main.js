const views = require('../modules/file.js');
module.exports = {
    home:(req,res) => res.render(views('index'))
}