const express = require('express')
const Invoice = require('../models/invoice')
const router = express.Router()

router.get('/invoices', async function (req, res) {

    try{
        const invoices = await Invoice.findAll()

        if(invoices.length === 0){
            res.status(404).send({null: 'No invoices saved yet'})
        }
        else{
            res.status(200).send({invoices})
        }
    }
    catch(e){
        res.status(500).send({fail: 'Could not fetch invoices'})
    }
})

router.get('/lastinvoice', async (req, res) => {
    try{
        const invoice = await Invoice.max('invoice_id')
        if(invoice.length === 0){
            res.status(404).send({null: 'no invoice found'})
        }
        else{
            res.status(200).send({invoice})
        }
    }
    catch(e){
        res.status(500).send({fail: 'could not fetch invoice'})
    }
})

module.exports = router
