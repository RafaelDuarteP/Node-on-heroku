let config

if (typeof process.env.DATABASE_URL === 'undefined') {
    config = {
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'rafaelduartep',
        password: '1008200239126549Fael',
        database: 'graficateste',
        define: {
            timestamps: true,
            underscored: false
        }
    }
}
else {
    config = {
        dialect: 'postgresql',
        uri: process.env.DATABASE_URL
    }
}

module.exports = config