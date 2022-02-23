const Sequelize = require('sequelize')
var connection = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    port: 3306,
    database : 'cranesoft_erp'
};

var sequelize = new Sequelize('mysql://' + connection.user + ':' + connection.password + '@' + connection.host + ':' + connection.port + '/' + connection.database + '') 

const Categories = sequelize.define('product_categories', {
    recid: {
        type: Sequelize.INTEGER
    },
    category_id: {
        type: Sequelize.STRING
    },
    subdomain_id: {
        type: Sequelize.STRING,
    },
    productNo: {
        type: Sequelize.STRING
    },
    category_name: {
        type: Sequelize.STRING,
    },
    stockacc: {
        type: Sequelize.STRING
    },
    cosacc: {
        type: Sequelize.STRING,
    },
    salesacc: {
        type: Sequelize.INTEGER,
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

module.exports = Categories