const {User} = require('../../database/models');
const {Op} = require('sequelize');


const userApi = {
    all: async(req,res) => {
        try {
            let usersDb = await User.findAll({
                include: {all: true},
                limit: 10,
                //offset: page,
                //order: [['id', 'ASC']]
            });
            let users = usersDb.map((users) => {
                let usuario = {
                  id: users.id,
                  firstName: users.firstName,
                  email: users.email,
                
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
          let usersOne = await user.findByPk(req.params.id, {
            include: {
              all: true,
            },
          });
          let data = {};
          data.id = usersOne.id;
          data.firstName = usersOne.firstName;
          data.lastName = usersOne.lastName;
          data.email = usersOne.email;
          data.numberPhone = usersOne.numberPhone;
          data.address = usersOne.address; 
          return res.send(data).status(200);
        } catch (error) {
          console.log(error)
          return res.status(500).json(error);
        }
      },
    };

    module.exports = userApi;