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

module.exports = router
