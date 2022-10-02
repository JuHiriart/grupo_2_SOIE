const {Product} = require('../../database/models');
const {Op} = require('sequelize');


const productsApi = {
    all: async(req,res) => {
        try {
            let usersDb = await Product.findAll({
                include: {all: true},
                //limit: 10,
                //offset: page,
                //order: [['id', 'ASC']]
            });
            let products = usersDb.map((Product) => {
                let products = {
                  id: Product.id,
                  description: Product.description,
                  name: Product.name,
                  price: Product.price,
                  off: Product.off,
                
                };
                return products;
              });
              let count = Product.length;
            return res.status(200).json(products);

        } catch (error) {
            console.log(error)
            return res.status(500).json(error);
        }
    },
    productId: async (req, res) => {
        try {
          let productOne = await Product.findByPk(req.params.id, {
            include: {
              all: true,
            },
          });
          let data = {};
          data.id = Product.id;
          data.name= Product.name;
          data.description= Product.description;
          data.off= Product.off;
          
          return res.send(data).status(200);
        } catch (error) {
          console.log(error)
          return res.status(500).json(error);
        }
      },
    };

    module.exports = productsApi;