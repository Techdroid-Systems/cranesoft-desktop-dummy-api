const Sequelize = require('sequelize')
const Product = require('../models/product')
const Category = require('../models/category')
const Paymode = require('../models/paymode')
const Invoice = require('../models/invoice')
const Customer = require('../models/customer')

var connection = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    port: 3306,
    database : 'cranesoft_erp'
  };

  const initDatabaseConnection = function(){
       var sequelize = new Sequelize('mysql://' + connection.user + ':' + connection.password + '@' + connection.host + ':' + connection.port + '/' + connection.database + '') 

        sequelize.authenticate().then(() => {
            console.log("========================================")
            console.log("Successfully connected to "+ connection.database)
            console.log("========================================")
            Product.sync()
            Category.sync()
            Paymode.sync()
            Invoice.sync()
            Customer.sync()
        }).catch((e) => {
            console.log("Connection to database failed")
        })
  }

  module.exports = initDatabaseConnection