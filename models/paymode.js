const Sequelize = require('sequelize')
var connection = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    port: 3306,
    database : 'cranesoft_erp'
};

var sequelize = new Sequelize('mysql://' + connection.user + ':' + connection.password + '@' + connection.host + ':' + connection.port + '/' + connection.database + '') 

const Paymodes = sequelize.define('paymodes', {
    recid: {
        type: Sequelize.INTEGER
    },
    subdomain_id: {
        type: Sequelize.STRING,
    },
    pay_name: {
        type: Sequelize.STRING
    },
    paytype: {
        type: Sequelize.STRING
    },
    account: {
        type: Sequelize.STRING,
    },
    isforsystem: {
        type: Sequelize.STRING
    },
    priority: {
        type: Sequelize.STRING,
    },
    addedby: {
        type: Sequelize.STRING,
    },
    addedon: {
        type: Sequelize.STRING,
    },
    updatedby: {
        type: Sequelize.STRING,
    },
    updatedon: {
        type: Sequelize.STRING,
    },
    deletedby: {
        type: Sequelize.STRING,
    },
    deletedon: {
        type: Sequelize.STRING,
    }
}, {
    timestamps: false
})

module.exports = Paymodes