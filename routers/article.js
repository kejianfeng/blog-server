const poolQuery = require("../utils/db");
// const humps = require("humps")
module.exports = router => {
  // 文章列表
  router.get("/article/articleList", async ctx => {
    const sql = "select id,title, summary, topic,labels,click_sum as clickSum,comment_sum as commentSum,status, date_format(create_time, '%Y-%m-%d') as createTime, date_format(update_time,'%Y-%m-%d' ) as updateTime from article"
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
  });

  // 文章详情
  router.post("/article/detail", async ctx => {
    const {id} = ctx.request.body
    const sql = `select id,title, summary, topic,labels,click_sum as clickSum,like_sum as likeSum, comment_sum as commentSum,main_body as mainBody, status, date_format(create_time, '%Y-%m-%d') as createTime, date_format(update_time, '%Y-%m-%d') as updateTime from article where id=${id}`
    const sqlComment = `select id,comment,nickname,quote_nickname as quoteNickname,quote_comment as quoteComment,date_format(create_time, '%Y-%m-%d %H:%i:%s') as createTime from comment where belong_id=${id} and type=1`
    const sqlUpadate = `update article set click_sum = click_sum+1 where id=${id}`
    let result = await poolQuery(sql)
    let commentResult = await poolQuery(sqlComment)
    await poolQuery(sqlUpadate)
    const data = Object.create(null)
    data.article = result[0]
    data.comment = commentResult
    console.log(data)
    ctx.body = {
      code: 200,
      message: "成功",
      data
    };
  });

  // 文章添加
  router.post("/article/add", async ctx => {
    const  {title,summary, topic, labels,mainBody,status } = ctx.request.body
    const sql = `INSERT INTO article(title, summary, topic,labels,main_body,status) VALUES ('${title}', '${summary}', '${topic}', '${labels}','${mainBody}',${status});`
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

   // 文章点赞
  router.post("/article/like", async ctx => {
    const  {id} = ctx.request.body
    const sql = `update article set like_sum = like_sum+1 where id=${id}`
    await poolQuery(sql)
    ctx.body = {
      code: 200,
      message: "成功",
      data:null
    };
  })
};




