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










module.exports = users;