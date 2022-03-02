const Sequelize = require('sequelize')
const Product = require('../models/product')
const Category = require('../models/category')
const Paymode = require('../models/paymode')
const Invoice = require('../models/invoice')
const Customer = require('../models/customer')

var connection = {
    host     : 'ec2-3-209-61-239.compute-1.amazonaws.com',
    user     : 'pnjdfneqzyazwy',
    password : 'd88223c48f915921cce3f14ab8e0c8bb6b14d1dd8a0dbfb3982e0aca991ea068',
    port: 5432,
    database : 'd960hlmn1bpdoj'
  };

  const initDatabaseConnection = function(){
       var sequelize = new Sequelize('mysql://' + connection.user + ':' + connection.password + '@' + connection.host + ':' + connection.port + '/' + connection.database + '') 
       console.log(sequelize)

        sequelize.authenticate().then(() => {
            console.log("========================================")
            console.log("Successfully connected to "+ connection.database)
            console.log("========================================")
            Product.sync()
            Category.sync()
            Paymode.sync()
            Invoice.sync()
            Customer.sync()
        }).catch((error) => {
            console.log("Connection to database failed")
            console.log(error)
        })
  }

  module.exports = initDatabaseConnection