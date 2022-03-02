const Sequelize = require('sequelize')
const Product = require('../models/product')
const Category = require('../models/category')
const Paymode = require('../models/paymode')
const Invoice = require('../models/invoice')
const Customer = require('../models/customer')

var connection = {
    host     : '209.205.200.218',
    user     : 'modelout_modelout',
    password : 'fvDjq)CA;&Oa',
    port: 3306,
    database : 'modelout_cranesoft_cloud_db'
  };

  const initDatabaseConnection = function(){
       var sequelize = new Sequelize('mysql2://' + connection.user + ':' + connection.password + '@' + connection.host + ':' + connection.port + '/' + connection.database + '') 
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