const views = require('../modules/file.js');
const { resolve } = require('path');

const models = {
    products: require('../models/product.model.js'),
}

const modules = require('../modules/index.js');

const db = require('../database/models');


module.exports = {

    list: async (req, res) => {

        // let products = models.products.index();

        const products = await db.Product.findAll();

        if (req.query && req.query.name) {
            products = products.filter(product => product.name.toLowerCase().indexOf(req.query.name.toLowerCase()) > -1);
        }

        res.render(views('products/productList'), {
            title: 'Productos',
            style: 'productList',
            products: products,
            userLogged: req.session.userLogged,
        });
    },

    detail: async (req, res) => {
        let product = await db.Product.findByPk(req.params.id);

        await res.render(views('products/productDetail'), {
            style: 'productDetail',
            title: `SOIE - ${product.name}`,
            product: product,
            userLogged: req.session.userLogged
        })

    },

    new: (req, res) => {
        res.render(views('products/productNew'), {
            method: '',
            title: 'Nuevo producto',
            h1: 'Nuevo Producto',
            style: 'productNew',
            product: {},
            userLogged: req.session.userLogged
        })
    },

    // este controlador lo divido en dos, uno que usa multer para subir el archivo, y otro que controla los datos del form
    store: {

        data: async (req, res) => {

            try {

                let product = req.body;

                // let errors = modules.validateProduct(product)
                let errors = [];

                if (errors.length > 0) {
                    res.render(views('products/productNew'), {
                        method: '',
                        title: 'Nuevo producto',
                        h1: 'Nuevo Producto',
                        style: 'productNew',
                        product: product,
                        errors: errors,
                        userLogged: req.session.userLogged
                    })
                }

                if (req.file) {
                    product.img = `/images/products/${req?.file?.filename ?? ''}`;
                }

                // product.id = await db.Product.max('id') + 1;

                let newProduct = await db.Product.create(product)

                res.redirect(`/products/${newProduct.id}/detail`);
            }

            catch (error) {
                console.log(error);
            }
        },

        upload: models.products.storeFile() // TODO: revisar este controlador a lo ultimo
    },

    // este controlador muestra el formulario para editar un producto
    edit: async (req, res) => {

        let product = await db.Product.findByPk(req.params.id);

        await res.render(views('products/edit'), {
            method: `/${product.id}?_method=PUT`,
            style: 'productNew',
            h1: 'Editar Producto',
            title: `Editar: ${product.name}`,
            product: product,
            userLogged: req.session.userLogged
        })
    },

    // este controlador lo divido en dos, uno que usa multer para subir el archivo, y otro que controla los datos del form
    storeEdit: {

        // manejo de datos del formulario
        data: async (req, res) => {
            let id = parseInt(req.params.id);
            let product = req.body;
            product.id = id;

            product.img = req.file ?
                `/images/products/${req.file.filename ?? ''}` :
                await db.Product.findByPk(id).img;

            await db.Product.update(product, {
                where: {
                    id: id
                }
            });

            res.redirect(`/products/${product.id}/detail`);

        },

        // manejo de archivo
        upload: models.products.storeFile(),

    },

    abm: (req, res) => {
        let products = models.products.index();
        res.render(views('products/productAbm'), {
            title: 'ABM productos',
            style: 'productAbm',
            products: products,
            userLogged: req.session.userLogged
        })
    },

    delete: async (req, res) => {
        let id = req.params.id;
        await db.Product.destroy({
            where: {
                id: id
            }
        });
        res.redirect('/products');
    },

    // // this method deletes the file from the server
    // deleteFile: (req,res) => {
    //     let id = req.params.id;
    //     let product = models.products.getById(id);
    //     let path = resolve(__dirname, '../public', product.img);
    //     fs.unlinkSync(path);
    //     models.products.delete(id);
    //     res.redirect('/products');
    // }
}