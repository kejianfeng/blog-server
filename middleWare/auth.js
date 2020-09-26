
const {verify} = require('../utils/index')
module.exports = () => {
  return async (ctx, next) => {
    const token = ctx.cookies.get('jauth')
    const url = ctx.req.url
    console.log(token, url)
    if (/^\/api\/admin/.test(url) && !(url.indexOf('/login') > -1)) {
      try{
        const payload = verify(token)
        payload &&   await next()
      }catch(err) {
        ctx.body = {
          code: 401,
          message:'权限校验失败',
          data: null
        }
      }
    }else {
      await next()
    }
  }
  // if (/^/) {
    
  // }

}