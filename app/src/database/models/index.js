'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

<<<<<<< HEAD
=======
// console.log(sequelize)

>>>>>>> sprint-06
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
<<<<<<< HEAD
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
=======
    // console.log(file)
    const model = require(path.join(__dirname, file));
    // console.log( typeof model )
    db[model.name] = model(sequelize, Sequelize.DataTypes);

    // console.log(db)

>>>>>>> sprint-06
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

<<<<<<< HEAD
=======
// console.log(Object.keys(db))

>>>>>>> sprint-06
module.exports = db;
