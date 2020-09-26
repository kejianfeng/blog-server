const DB_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: 'ab5068791071',
    database: 'blogCenter',
    connectionLimit: 10 //最大连接数
}

const JWT_CONFIG = {
    privateKey: 'xxx',
}

module.exports = Object.freeze({
    DB_CONFIG,
    JWT_CONFIG
})