const views = require('../modules/file.js');

module.exports = {
    home: (req, res) => {
        res.render( views(home), {
            title : 'Home',
            style : 'home'
        } );
    }
}
