let obj = {}

if (process.env.DIALECT == 'postgres'){
    obj = {
        ssl: true}
}

module.exports = {
    dialect: process.env.DIALECT || 'mysql',
    host: process.env.HOST || 'localhost',
    port: process.env.DATABASE_PORT || 3306,
    username: process.env.USER || 'rafaelduartep',
    password: process.env.DATABASE_PASSWORD || '1008200239126549Fael',
    database: process.env.DATABASE || 'graficateste',
    define: {
        timestamps: true,
        underscored: false
    },
    dialectOptions: obj
}