const poolQuery = require("../utils/db");
module.exports = (router) => {
    router.get('/blog/blogList', async ctx => {
        const sql = "select id,labels,blog_pic as blogPic, main_body as mainBody,click_sum as clickSum,comment_sum as commentSum, date_format( create_time, '%Y-%m-%d' ) as createTime, date_format(update_time, '%Y-%m-%d') as updateTime from blog"
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
    router.post("/blog/add", async ctx => {
        const  {blogPic,labels,mainBody} = ctx.request.body
        const sql = `INSERT INTO blog(blog_pic, labels, main_body) VALUES ('${blogPic}','${labels}','${mainBody}');`
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
      })
}