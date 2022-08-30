* Sprint-06

Creación de carpeta Sequelize

1- crear un archivo llamado .sequelizerc  en el raiz. en el archivo (cambiar las rutas en funcion del proyecto) 
esto va a generar carpteas y archivos en el proyecto.

const { resolve } = require("path");

module.exports = {
  "env": "test", //ver si aplica
  "config": resolve(__dirname, "./source/database/config", "config.js"),
  "models-path": resolve(__dirname, "./source/database/models"),
  "seeders-path": resolve(__dirname, "./source/database/seeders"),
  "migrations-path": resolve(__dirname, "./source/database/migrations"),
};

2- npm install sequelize mysql2

3- npm install sequelize-cli -D (para desarrollador)

4- en el package.json , agregar en scripts , "sq-i" : "sequelize init"

5- npm run sq-i ( va a generar todas las carpetas que estan el punto 1) 

6-  en el archivo /database/config/config.js , tenemos que hacerlo como modulo export
module.exports = { 


7- en el package.json agregar en scripts, 
"sq-mg": "sequelize migration:generate --name products" 

repetir este paso para todas las tablas que necesita la estructura.

8- npm run sq-mg

9-en el package.json agregar en scripts, "sq-mg": "sequelize migration:generate --name users"
esto genera en dentro de la carpeta migrations, dos js con los nombres antes ejecutados

10- npm run sq-mg

11- modificar en las tablas generadas dentro de la carpeta src/database/migrations. 

Agregando como se creara la tabla, campos y sus definiciones.ejemplo
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("cart", {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        order: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        id_productCart: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },

        idUser: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        id_status: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        totalOrder: {
          type: Sequelize.DECIMAL,
          allowNull: false,
        },
        date: {
          type: Sequelize.DATE,
          allowNull: false,
        },



      });
    } catch (error) {
      console.log(error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cart");
  },
};

12-en el package.json agregar en scripts,
"sq-sg": "sequelize seed:generate --name products",

13 en el package.json agregar en scripts, (borra y crea la base de datos, corre los seeders)
"sq-db": "sequelize db:drop && sequelize db:create && sequelize db:migrate && sequelize db:seed:all"

14-en el config.js revisar: verificar que este corriendo xammp (mysql), y que el nombre de la base de datos. que este test configurado.
cambiar el nombre de la base de datos. "database": "soie_db",

15- ejecutar npm run sq-db  y revisar en mysql que se haya generado la base.

16- ejecutar npm run sq-sg (agregado en el punto 12).


17- configuar los modelos. video clase 31 en la carpeta src/database/models

	- usar el archivo index que esta models . 

xx- modificar el controlador , video clase 31 22:34
