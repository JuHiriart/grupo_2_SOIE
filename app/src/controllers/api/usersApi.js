const {User} = require('../../database/models');
const {Op} = require('sequelize');


const userApi = {
    all: async(req,res) => {
        try {
            let usersDb = await User.findAll({
                include: [{association: "categoria"}],
                //limit: 10,
                //offset: page,
                //order: [['id', 'ASC']]
            });
            let users = usersDb.map((users) => {
                let usuario = {
                  id: users.id,
                  firstName: users.firstName,
                  lastName: users.lastName,
                  gender: users.gender,
                  email: users.email,
                  category: users.categoria.description,
                  url: "localhost:2000/api/users/" + users.id,
                };
                return usuario;
              });
              let count = users.length;

            return res.status(200).json(users);

        } catch (error) {
            console.log(error)
            return res.status(500).json(error);
        }
    },
    userId: async (req, res) => {
        try {
          let usersOne = await User.findByPk(req.params.id, {

            include: [{association: "categoria"}],
              //all: true,

          });
          let data = {};
          data.id = usersOne.id;
          data.category = usersOne.categoria.description;
          data.firstName = usersOne.firstName;
          data.lastName = usersOne.lastName;
          data.email = usersOne.email;
          data.numberPhone = usersOne.numberPhone;
          data.address = usersOne.address; 
          data.image = usersOne.image;
          return res.send(data).status(200);
        } catch (error) {
          console.log(error)
          return res.status(500).json(error);
        }
      },
    };

    module.exports = userApi;