const Sequelize = require('sequelize')
const dbConfig = require('./dbConfig')

const database = new Sequelize(process.env.DATABASE_URL  || dbConfig )

module.exports = {
    Sequelize: Sequelize,
    sequelize: database
}