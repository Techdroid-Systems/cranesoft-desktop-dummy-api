const Sequelize = require('sequelize')
var connection = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    port: 3306,
    database : 'cranesoft_erp'
};

var sequelize = new Sequelize('mysql://' + connection.user + ':' + connection.password + '@' + connection.host + ':' + connection.port + '/' + connection.database + '') 

const Customer = sequelize.define('customers_information', {
    recid: {
        type: Sequelize.INTEGER
    },
    subdomain_id: {
        type: Sequelize.STRING
    },
    customer_id: {
        type: Sequelize.STRING,
    },
    accountid: {
        type: Sequelize.STRING
    },
    customer_name: {
        type: Sequelize.STRING,
    },
    customer_address: {
        type: Sequelize.STRING
    },
    customer_mobile: {
        type: Sequelize.STRING,
    },
    customer_email: {
        type: Sequelize.INTEGER,
    },
    sex: {
        type: Sequelize.STRING,
    },
    phone: {
        type: Sequelize.STRING,
    },
    dob: {
        type: Sequelize.STRING,
    },
    city: {
        type: Sequelize.STRING,
    },
    state: {
        type: Sequelize.STRING,
    },
    zip: {
        type: Sequelize.STRING,
    },
    country: {
        type: Sequelize.STRING,
    },
    credit_limit: {
        type: Sequelize.STRING,
    },
    addedon: {
        type: Sequelize.STRING,
    },
    addedby: {
        type: Sequelize.STRING,
    },
    updatedon: {
        type: Sequelize.STRING,
    },
    updatedby: {
        type: Sequelize.STRING,
    },
    deletedon: {
        type: Sequelize.STRING,
    },
    deletedby: {
        type: Sequelize.STRING,
    }
}, {
    timestamps: false
})

module.exports = Customer