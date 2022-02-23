const express = require('express')
const Customer = require('../models/customer')
const router = express.Router()

router.get('/customers', async function (req, res) {

    try{
        const customers = await Customer.findAll()

        if(customers.length === 0){
            res.status(404).send({null: 'No customer saved yet'})
        }
        else{
            res.status(200).send({customers})
        }
    }
    catch(e){
        res.status(500).send({fail: 'Could not fetch customers'})
    }
})

module.exports = router
