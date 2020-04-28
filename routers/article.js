const poolQuery = require("../utils/db");
// const humps = require("humps")
module.exports = router => {
  router.get("/article/articleList", async ctx => {
    const sql = "select id,title, summary, topic,labels,main_body as mainBody,click_sum as clickSum,comment_sum as commentSum,status, create_time as createTime, update_time as updateTime from article"
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
};
