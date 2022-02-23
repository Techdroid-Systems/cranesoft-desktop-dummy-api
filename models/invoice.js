const Sequelize = require('sequelize')
var connection = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    port: 3306,
    database : 'cranesoft_erp'
};

var sequelize = new Sequelize('mysql://' + connection.user + ':' + connection.password + '@' + connection.host + ':' + connection.port + '/' + connection.database + '') 

const Invoices = sequelize.define('invoices', {
    recid: {
        type: Sequelize.INTEGER
    },
    subdomain_id: {
        type: Sequelize.STRING,
    },
    branch_id: {
        type: Sequelize.STRING
    },
    invoice_id: {
        type: Sequelize.STRING,
    },
    customer_id: {
        type: Sequelize.STRING,
    },
    orderNo: {
        type: Sequelize.STRING
    },
    transdate: {
        type: Sequelize.STRING
    },
    total_amount: {
        type: Sequelize.STRING,
    },
    paid_amount: {
        type: Sequelize.INTEGER,
    },
    due_amount: {
        type: Sequelize.STRING
    },
    previous_due: {
        type: Sequelize.STRING,
    },    
    shipping_cost: {
        type: Sequelize.STRING,
    },
    invoice: {
        type: Sequelize.STRING,
    },
    offline_invoice_no: {
        type: Sequelize.STRING,
    },
    invoice_discount: {
        type: Sequelize.STRING,
    },
    total_discount: {
        type: Sequelize.STRING,
    },
    total_tax: {
        type: Sequelize.STRING,
    },
    invoice_details: {
        type: Sequelize.STRING,
    },
    paymode: {
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
    },
    is_online: {
        type: Sequelize.STRING,
    },
}, {
    timestamps: false
})

module.exports = Invoices