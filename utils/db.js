const mysql = require('mysql')
const utils = require('util')
const {DB_CONFIG}  = require('../config.js')

const pool = mysql.createPool(DB_CONFIG)

pool.getConnection((err, connection) => {
    console.log('开始链接')
    if(err) {
        console.log('------出错啦------')
        console.log(err)
    }
    if(connection) connection.release()
    return
})

pool.query = utils.promisify(pool.query) //把query查询promise化，且遵循 node回调函数参数规范，第一个参数是err,后面才是参数

const poolquery = async (sql) => {
    const result = await pool.query(sql)
    return result
}

module.exports = poolquery

