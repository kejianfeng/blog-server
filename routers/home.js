const poolQuery = require("../utils/db");
module.exports = (router) => {
    router.get('/home/sitelist', async ctx => {
        const sql = "select id, site_name as siteName , site_url as siteUrl, site_text as siteText, classify, site_pic as sitePic from site"
        let result = await poolQuery(sql).catch(err => {
          ctx.body = {
            code: 501,
            message: "查询出错",
            data:null
          };
          return
        })
        ctx.body = {
            code:200,
            message: '成功',
            data:result
        }
    })
    //管理员  添加站点
    router.post("/admin/site/add", async ctx => {
        const  {siteName,siteUrl,siteText, siteClassify,sitePic} = ctx.request.body
        const sql = `INSERT INTO site(site_name, site_url,site_text, classify, site_pic) VALUES ('${siteName}','${siteUrl}', '${siteText}', '${siteClassify}','${sitePic}');`
        await poolQuery(sql)
        ctx.body = {
          code: 200,
          message: "成功",
          data:null
        };
      })
    //管理员获取站点详情
    router.post('/admin/site/detail', async ctx => {
      const  {id} = ctx.request.body
        const sql = `select site_name as siteName, site_url as siteUrl, site_text as siteText, classify, site_pic as sitePic from site where id='${id}'`
        let result = await poolQuery(sql)
        ctx.body = {
            code:200,
            message: '成功',
            data:result ? result[0]: null
        }
    })

    //管理员站点修改
    router.post("/admin/site/update", async ctx => {
      const  {id, siteName,siteUrl,siteText, siteClassify,sitePic } = ctx.request.body
      const sql = `UPDATE  site set site_name = '${siteName}', site_url='${siteUrl}', site_text='${siteText}',classify='${siteClassify}',site_pic='${sitePic}' where id='${id}';`
      let result = await poolQuery(sql)
      ctx.body = {
        code: 200,
        message: "成功",
        data:null
      };
    })

     //管理员文章删除
  router.post("/admin/site/delete", async ctx => {
    const  {id } = ctx.request.body
    const sql = `delete from site where id='${id}';`
    let result = await poolQuery(sql)
    ctx.body = {
      code: 200,
      message: "成功",
      data:null
    };
  })
}