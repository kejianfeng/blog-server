const poolQuery = require("../utils/db");
// const humps = require("humps")
module.exports = router => {
  // 文章列表
  router.get("/article/articleList", async ctx => {
    const {curPage, pageLimit} = ctx.request.query
    const totalSql = 'select count(id) as total from article;'
    let {total} = (await poolQuery(totalSql))[0]
    const offset = pageLimit * (curPage - 1)
    const sql = `select id,title, summary, topic,labels,click_sum as clickSum,comment_sum as commentSum,status, date_format(create_time, '%Y-%m-%d') as createTime, date_format(update_time,'%Y-%m-%d' ) as updateTime from article LIMIT ${pageLimit} OFFSET ${offset}`
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
  });

 // 管理员获取文章

  router.get("/admin/article/articleList", async ctx => {
    const sql = `select id,title, summary, topic,labels,click_sum as clickSum,comment_sum as commentSum,status, date_format(create_time, '%Y-%m-%d') as createTime, date_format(update_time,'%Y-%m-%d' ) as updateTime from article;`
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
      data:result
    };
  });


  // 文章详情
  router.post("/article/detail", async ctx => {
    const {id} = ctx.request.body
    const sql = `select id,title, summary, topic,labels,click_sum as clickSum,like_sum as likeSum, comment_sum as commentSum,main_body as mainBody, status, date_format(create_time, '%Y-%m-%d') as createTime, date_format(update_time, '%Y-%m-%d') as updateTime from article where id='${id}';`
    const sqlComment = `select id,comment,nickname,quote_nickname as quoteNickname,quote_comment as quoteComment,date_format(create_time, '%Y-%m-%d %H:%i:%s') as createTime from comment where belong_id='${id}' and type=1;`
    const sqlUpadate = `update article set click_sum = click_sum+1 where id='${id}'`
    let result = await poolQuery(sql)
    let commentResult = await poolQuery(sqlComment)
    await poolQuery(sqlUpadate)
    const data = Object.create(null)
    data.article = result[0]
    data.comment = commentResult
    ctx.body = {
      code: 200,
      message: "成功",
      data
    };
  });

  /**
   * 获取文章详情上下页
   */
  router.post("/article/guide", async ctx => {
    const {id} = ctx.request.body
    const pre = `select id, title from article where id=(select max(id) from article where id < '${id}');`
    const next = `select id, title from article where id=(select min(id) from article where id > '${id}');`
    let preRecord = await poolQuery(pre)
    let nextRecord = await poolQuery(next)
    const data = Object.create(null)
    data.pre = preRecord[0]
    data.next = nextRecord[0]
    ctx.body = {
      code: 200,
      message: "成功",
      data
    };
  });

   // 文章点赞
  router.post("/article/like", async ctx => {
    const  {id} = ctx.request.body
    const sql = `update article set like_sum = like_sum+1 where id='${id}'`
    await poolQuery(sql)
    ctx.body = {
      code: 200,
      message: "成功",
      data:null
    };
  })

   //管理员文章详情
   router.post("/admin/article/detail", async ctx => {
    const {id} = ctx.request.body
    const sql = `select id,title, summary, topic,labels,click_sum as clickSum,like_sum as likeSum, comment_sum as commentSum,main_body as mainBody, markdown, status, date_format(create_time, '%Y-%m-%d') as createTime, date_format(update_time, '%Y-%m-%d') as updateTime from article where id='${id}'`
    let result = await poolQuery(sql)
    if (result && result.length > 0) {
      ctx.body = {
        code: 200,
        message: "成功",
        data:result[0]
      };
    } else {
      ctx.body = {
        code: 501 ,
        message: "查询出错",
        data:null
      };
    }
    return
  });
  //管理员文章更新
  router.post("/admin/article/update", async ctx => {
    const  {id, title,summary, topic, labels,mainBody,markdown} = ctx.request.body
    const sql = `UPDATE  article set title = '${title}', summary='${summary}', topic='${topic}',labels='${labels}',main_body='${mainBody}' , markdown='${markdown}' where id='${id}';`
    let result = await poolQuery(sql)
    ctx.body = {
      code: 200,
      message: "成功",
      data:null
    };
  })

  //管理员文章删除
  router.post("/admin/article/delete", async ctx => {
    const  {id } = ctx.request.body
    const sql = `delete from article where id='${id}';`
    let result = await poolQuery(sql)
    ctx.body = {
      code: 200,
      message: "成功",
      data:null
    };
  })

  //管理员更新文章状态
  router.post("/admin/article/updateStatus", async ctx => {
    const  {id , status} = ctx.request.body
    const sql = `update article set status=${status} where id='${id}';`
    let result = await poolQuery(sql)
    ctx.body = {
      code: 200,
      message: "成功",
      data:null
    };
  })
    // 文章添加
    router.post("/article/add", async ctx => {
      const  {title,summary, topic, labels,mainBody,markdown,status } = ctx.request.body
      const sql = `INSERT INTO article(title, summary, topic,labels,main_body,markdown,status) VALUES ('${title}', '${summary}', '${topic}', '${labels}','${mainBody}', '${markdown}', ${status});`
      let result = await poolQuery(sql)
      ctx.body = {
        code: 200,
        message: "成功",
        data:null
      };
    })
};



//管理员部分




