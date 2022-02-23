const express = require('express')
const Category = require('../models/category')
const router = express.Router()

router.get('/categories', async function (req, res) {

    try{
        const categories = await Category.findAll()

        if(categories.length === 0){
            res.status(404).send({null: 'No categories saved yet'})
        }
        else{
            res.status(200).send({categories})
        }
    }
    catch(e){
        res.status(500).send({fail: 'Could not fetch categories'})
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

router.get('/product/search/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const product = await Product.findAll({
            where: {
                name: {
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
