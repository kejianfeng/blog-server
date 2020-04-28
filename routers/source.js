const poolQuery = require("../utils/db");
module.exports = (router) => {
    router.get('/source/sourceList', async ctx => {
        const sql = "select id, source_icon as sourceIcon,source_name as sourceName, source_intro as sourceIntro from source"
        let result = await poolQuery(sql).catch(err => {
          ctx.body = {
            code: 5001,
            message: "查询出错",
            data:null
          };
          return
        })
        ctx.body = {
          code: 200,
          message: "成功",
          data:result
        };
    })
    router.post('/source/detail', async ctx => {
        const {id} = ctx.request.body
        const sql = `select id, source_icon as sourceIcon,source_name as sourceName, source_intro as sourceIntro,source_link as sourceLink,source_password as sourcePassword,source_shoot as sourceShoot, source_labels as sourceLabels from source where id=${id}`
        let result = await poolQuery(sql).catch(err => {
          ctx.body = {
            code: 5001,
            message: "查询出错",
            data:null
          };
          return
        })
        ctx.body = {
          code: 200,
          message: "成功",
          data:result[0]
        };
    })
    router.post("/source/add", async ctx => {
        const  {sourceName,sourceIntro, sourceLink,sourceIcon, sourcePassword,sourceShoot,sourceLabels } = ctx.request.body
        const sql = `INSERT INTO source(source_name, source_intro, source_link,source_icon,source_password,source_shoot, source_labels) VALUES 
        ('${sourceName}','${sourceIntro}','${sourceLink}', '${sourceIcon}', '${sourcePassword}', '${sourceShoot}', '${sourceLabels}');`
        console.log(sql)
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
          code: 200,
          message: "成功",
          data:null
        };
        return
      })
}