const express = require('express')
const Product = require('../models/product')
const router = express.Router()
const { Op } = require('sequelize')

router.get('/products', async function (req, res) {

    try{
        const products = await Product.findAll()

        if(products.length == 0){
            res.status(404).send({null: 'No products saved yet'})
        }
        else{
            res.status(200).send({products})
        }
    }
    catch(e){
        res.status(500).send({fail: 'Could not fetch products'})
    }
})

router.get('/product/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const product = await Product.findAll({
            where: {
                product_name: _id
            }
        })
        if(product.length === 0){
            res.status(404).send({null: 'no products found for given ID'})
        }
        else{
            res.status(200).send({product})
        }
    }
    catch(e){
        res.status(500).send({fail: 'could not fetch single product details'})
    }
})

router.get('/product_category/:id', async (req, res) => {
    const category_id = req.params.id
    try{
        const categories = await Product.findAll({
            where: {
                category_id: category_id
            }
        })
        if(categories.length === 0){
            res.status(404).send({null: 'no products found for given category'})
        }
        else{
            res.status(200).send({categories})
        }
    }
    catch(e){
        res.status(500).send({fail: 'could not fetch products for selected category'})
    }
})

router.get('/product/search/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const product = await Product.findAll({
            where: {
                product_name: {
                    // [Op.startsWith]: `${_id}`,
                    [Op.like]: `%${_id}%`
                }
            }
        })
        if(product.length === 0){
            res.status(404).send({null: 'Product does not exist'})
        }
        else{
            res.status(200).send({product})
        }
    }
    catch(e){
        res.status(500).send({fail: 'Could not fetch product details'})
    }
})

module.exports = router
