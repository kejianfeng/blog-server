const poolQuery = require("../utils/db");
module.exports = (router) => {
  //行博列表
    router.get('/blog/blogList', async ctx => {
        const {curPage, pageLimit} = ctx.request.query
        const totalSql = 'select count(id) as total from blog;'
        let {total} = (await poolQuery(totalSql))[0]
        const offset = pageLimit * (curPage - 1)
        const sql = `select id,labels,blog_pic as blogPic, main_body as mainBody,click_sum as clickSum,comment_sum as commentSum, date_format( create_time, '%Y-%m-%d' ) as createTime, date_format(update_time, '%Y-%m-%d') as updateTime from blog LIMIT ${pageLimit} OFFSET ${offset}`
        let result = await poolQuery(sql)
        if (!result) {
          ctx.body = {
            code: 401,
            message: "没有更多页啦",
            data:null
          };
        }
        ctx.body = {
          code: 200,
          message: "成功",
          data:result,
          total
        };
    })


    //管理员行博列表
    router.get('/admin/blog/blogList', async ctx => {
      const sql = `select id,labels,blog_pic as blogPic, main_body as mainBody,click_sum as clickSum,comment_sum as commentSum, date_format( create_time, '%Y-%m-%d' ) as createTime, date_format(update_time, '%Y-%m-%d') as updateTime from blog;`
      let result = await poolQuery(sql)
      if (!result) {
        ctx.body = {
          code: 401,
          message: "没有更多页啦",
          data:null
        };
      }
      ctx.body = {
        code: 200,
        message: "成功",
        data:result,
      };
  })

    //行博详情
  router.post("/blog/detail", async ctx => {
    const {id} = ctx.request.body
    const sql = `select id,labels,blog_pic as blogPic, main_body as mainBody, date_format(create_time, '%Y-%m-%d') as createTime from blog where id='${id}'`
    const sqlComment = `select id, comment, nickname,quote_nickname as quoteNickname,quote_comment as quoteComment,date_format(create_time, '%Y-%m-%d %H:%i:%s') as createTime from comment where belong_id='${id}' and type=2`
    const sqlUpadate = `update blog set click_sum = click_sum+1 where id='${id}'`
    let result = await poolQuery(sql)
    let commentResult = await poolQuery(sqlComment)
    await poolQuery(sqlUpadate)
    const data = Object.create(null)
    data.blog = result[0]
    data.comment = commentResult
    ctx.body = {
      code: 200,
      message: "成功",
      data
    };
  });

    //行博添加
    router.post("/blog/add", async ctx => {
        const  {blogPic,labels,mainBody} = ctx.request.body
        const sql = `INSERT INTO blog(blog_pic, labels, main_body) VALUES ('${blogPic}','${labels}','${mainBody}');`
        let result = await poolQuery(sql).catch(err => {
          ctx.body = {
            code: 501,
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


        //管理员行博删除
  router.post("/admin/blog/delete", async ctx => {
    const  {id } = ctx.request.body
    const sql = `delete from blog where id='${id}';`
    let result = await poolQuery(sql).catch(err => {
      ctx.body = {
        code: 501,
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