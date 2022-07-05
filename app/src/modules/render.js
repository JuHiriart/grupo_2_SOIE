const {resolve} = require('path');
const fs = require('fs');

const viewsRendering = JSON.parse(
    fs.readFileSync(
        resolve(__dirname, '..','database','viewsRendering.json') , {encoding: 'utf8'}
    )
);

module.exports.data = viewsRendering;

module.exports.renderCallback = (key, data = viewsRendering) => {
    let view = data[key];
    let dir = resolve(__dirname,'..','views', ...view.relPath, key);
    return (req,res) => { res.render(dir,view) }
}

/* console.log(
    module.exports
) */


