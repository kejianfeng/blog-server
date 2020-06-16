const {poolQuery} = require("../utils/db");
module.exports = (router) => {

  /**
   * 资源列表
   */
    router.get('/source/sourceList', async ctx => {
        const sql = "select id, source_icon as sourceIcon,source_labels as sourceLabels ,source_name as sourceName, source_intro as sourceIntro from source"
        let result = await poolQuery(sql)
        ctx.body = {
          code: 200,
          message: "成功",
          data:result
        };
    })


    /**
     * 资源详情
     */
    router.post('/source/detail', async ctx => {
        const {id} = ctx.request.body
        const sql = `select id, source_icon as sourceIcon,source_name as sourceName, source_intro as sourceIntro,source_link as sourceLink,source_password as sourcePassword,source_shoot as sourceShoot, source_labels as sourceLabels from source where id='${id}'`
        let result = await poolQuery(sql)
        ctx.body = {
          code: 200,
          message: "成功",
          data:result[0]
        };
    })

    /**
     * 资源添加
     */
    router.post("/admin/source/add", async ctx => {
        const  {sourceName,sourceIntro, sourceLink,sourceIcon, sourcePassword,sourceShoot,sourceLabels } = ctx.request.body
        const sql = `INSERT INTO source(source_name, source_intro, source_link,source_icon,source_password,source_shoot, source_labels) VALUES 
        ('${sourceName}','${sourceIntro}','${sourceLink}', '${sourceIcon}', '${sourcePassword}', '${sourceShoot}', '${sourceLabels}');`
        let result = await poolQuery(sql)
        ctx.body = {
          code: 200,
          message: "成功",
          data:null
        };
        return
      })

     /**
      * 资源修改
      */
     router.post("/admin/source/update", async ctx => {
      const  {id, sourceName,sourceIntro, sourceLink,sourceIcon, sourcePassword,sourceShoot,sourceLabels } = ctx.request.body
      const sql = `UPDATE  source set source_name = '${sourceName}', source_intro='${sourceIntro}', source_link='${sourceLink}',source_icon='${sourceIcon}',source_password='${sourcePassword}', source_shoot='${sourceShoot}', source_labels='${sourceLabels}' where id='${id}';`
      await poolQuery(sql)
      ctx.body = {
        code: 200,
        message: "成功",
        data:null
      };
    })

  /**
   * 资源删除
   */
  router.post("/admin/source/delete", async ctx => {
    const  {id } = ctx.request.body
    const sql = `delete from source where id='${id}';`
    let result = await poolQuery(sql)
    ctx.body = {
      code: 200,
      message: "成功",
      data:null
    };
  })
}