const Sequelize = require('sequelize')
var connection = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    port: 3306,
    database : 'cranesoft_erp'
};

var sequelize = new Sequelize('mysql://' + connection.user + ':' + connection.password + '@' + connection.host + ':' + connection.port + '/' + connection.database + '') 

const Products = sequelize.define('product_informations', {
    recid: {
        type: Sequelize.INTEGER
    },
    subdomain_id: {
        type: Sequelize.STRING,
    },
    product_id: {
        type: Sequelize.STRING
    },
    productNo: {
        type: Sequelize.STRING
    },
    category_id: {
        type: Sequelize.STRING,
    },
    product_name: {
        type: Sequelize.STRING
    },
    item_type: {
        type: Sequelize.STRING,
    },
    pprice: {
        type: Sequelize.INTEGER,
    },
    avgprice: {
        type: Sequelize.STRING
    },
    vendor: {
        type: Sequelize.STRING,
    },    
    sprice: {
        type: Sequelize.STRING,
    },
    unit: {
        type: Sequelize.STRING,
    },
    tax0: {
        type: Sequelize.STRING,
    },
    requestlevel: {
        type: Sequelize.STRING,
    },
    requestqty: {
        type: Sequelize.STRING,
    },
    serial_no: {
        type: Sequelize.STRING,
    },
    product_model: {
        type: Sequelize.STRING,
    },
    product_details: {
        type: Sequelize.STRING,
    },
    image: {
        type: Sequelize.STRING,
    },
    currency: {
        type: Sequelize.STRING,
    },
    vendor_id: {
        type: Sequelize.STRING,
    },
    tax1: {
        type: Sequelize.STRING,
    },
    tax2: {
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

module.exports = Products