const Sequelize = require('sequelize')
const postgres = require('postgres')
const Product = require('../models/product')
const Category = require('../models/category')
const Paymode = require('../models/paymode')
const Invoice = require('../models/invoice')
const Customer = require('../models/customer')

var connection = {
    host     : 'us-cdbr-east-05.cleardb.net',
    user     : 'bb519458bc3e76',
    password : '375b0891',
    port: 3306,
    database : 'heroku_c2a92912ce7b58a'
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