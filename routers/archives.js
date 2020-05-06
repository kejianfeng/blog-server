const poolQuery = require("../utils/db");
// const humps = require("humps")
module.exports = router => {
  // 
  router.get("/archives/all", async ctx => {
    const sql = "select id,title, topic,labels,date_format(create_time, '%Y-%m-%d') as createTime from article"
    let result = await poolQuery(sql)
    ctx.body = {
      code: 200,
      message: "成功",
      data:result
    };
  });
};




