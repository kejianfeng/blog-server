const {poolQuery} = require("../utils/db");

const {sign} = require('../utils/index')
module.exports = (router) => {
    router.post('/admin/login', async ctx => {
      // console.log()
      const {userName, password} = ctx.request.body  
      const sql = `select id, user_name as userName, mobile, email, create_time as createTime from user where user_name='${userName}' and password='${password}'`
      let result = await poolQuery(sql)
      if (result) {
        let token = sign({userName})
        ctx.cookies.set('jauth', token, {
          httpOnly: true,
          overwrite: true,
          maxAge: 3600000
        })
        ctx.body = {
          token,
          code: 200,
          message:'成功',
          data: {
            ...result[0]
          }
        }
      }else {
        ctx.body = {
          code: 501,
          message: "账号密码错误",
          data:null
        };
      }
    })
}