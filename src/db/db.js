const Sequelize = require('sequelize')
const dbConfig = require('./dbConfig')

const database = new Sequelize(dbConfig)

module.exports = {
    Sequelize: Sequelize,
    sequelize: database
}