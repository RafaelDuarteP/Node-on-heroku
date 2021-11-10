const Sequelize = require('sequelize')
const db = require('../db')


const Pessoa = db.sequelize.define('pessoa',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nascimento:{
        type: Sequelize.DATE,
        allowNull: false
    }
})

//Pessoa.sync({force: true})

module.exports = Pessoa