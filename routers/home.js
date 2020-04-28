const poolQuery = require("../utils/db");
module.exports = (router) => {
    router.get('/home/sitelist', async ctx => {
        const sql = "select id, site_name, site_url, site_text, classify, site_pic from site"
        let result = await poolQuery(sql).catch(err => {
          ctx.body = {
            code: 5001,
            message: "查询出错",
            data:null
          };
          return
        })
        console.log(result)
        ctx.body = {
            code:200,
            message: '成功',
            data:result
        }
    })
    router.post("/site/add", async ctx => {
        const  {siteName,siteUrl,siteIntro, siteClassify,sitePic} = ctx.request.body
        console.log('这是', ctx.request.body)
        const sql = `INSERT INTO site(site_name, site_url,site_text, classify, site_pic) VALUES ('${siteName}','${siteUrl}', '${siteIntro}', '${siteClassify}','${sitePic}');`
        await poolQuery(sql).catch(err => {
          ctx.body = {
            code: 5001,
            message: "查询出错",
            data:null
          };
          return
        })
        console.log(sql)
        ctx.body = {
          code: 200,
          message: "成功",
          data:null
        };
      })
}