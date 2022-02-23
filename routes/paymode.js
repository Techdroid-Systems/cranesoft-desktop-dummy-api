const express = require('express')
const Paymodes = require('../models/paymode')
const router = express.Router()

router.get('/paymode', async function (req, res) {

    try{
        const paymodes = await Paymodes.findAll()

        if(paymodes.length === 0){
            res.status(404).send({null: 'No paymode saved yet'})
        }
        else{
            res.status(200).send({paymodes})
        }
    }
    catch(e){
        res.status(500).send({fail: 'Could not fetch paymodes'})
    }
})

module.exports = router
