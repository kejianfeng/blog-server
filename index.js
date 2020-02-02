const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

const router  = new Router({
    prefix: '/api'
})

//error handling
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
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(9000)
