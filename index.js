/**
 * 状态码
 * 401  不执行操作，返回拒绝信息
 * 501  执行操作出错
 */

const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const authMiddleWare = require('./middleWare/auth')
const app = new Koa()
const PORT = 9000
const router  = new Router({
    prefix: '/api'
})
app.use(bodyParser());
//error handling

app.use(authMiddleWare())

app.use(async (ctx, next) => {
    try{
        await next()
    }catch(err) {
        ctx.status = err.status || 500
        ctx.body = err.message
        ctx.app.emit('error', err, ctx)
    }
})


require('./routers/home')(router)
require('./routers/article')(router)
require('./routers/blog')(router)
require('./routers/picworks')(router)
require('./routers/source')(router)
require('./routers/upload')(router)
require('./routers/comment')(router)
require('./routers/archives')(router)
require('./routers/auth')(router)
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(9000)
console.log(`服务开启--->监听${PORT}端口`)
