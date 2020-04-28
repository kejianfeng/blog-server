const poolQuery = require("../utils/db");
module.exports = (router) => {
    router.get('/picwork/picList', async ctx => {
        const sql = "select id,labels,pic_url as picUrl,pic_text as picText, like_sum as likeSum from pic_works"
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
    router.post("/picwork/add", async ctx => {
        const  {picture,labels,picText} = ctx.request.body
        const sql = `INSERT INTO pic_works(pic_url, labels, pic_text) VALUES ('${picture}','${labels}','${picText}');`
        console.log(sql)
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
          data:null
        };
        return
      })
}