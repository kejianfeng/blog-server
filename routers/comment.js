const poolQuery = require("../utils/db");
module.exports = (router) => {
    router.post("/comment/add", async ctx => {
        const  {id, type, comment,nickname,email, site, quoteComment, quoteNickname} = ctx.request.body
        let table=''
        switch (type) {
          case 1:
            table="article"
            break;
          case 2:
            table="blog"
            break
          default:
            break;
        }
        if (id) {
          const sql = `INSERT INTO comment(belong_id, type, comment, nickname, email, site, quote_comment,quote_nickname) VALUES ('${id}','${type}','${comment}', '${nickname}', '${email}', '${site}', '${quoteComment}', '${quoteNickname}');`
          const sqlUpadate = `update ${table} set comment_sum = comment_sum+1 where id='${id}'`
          await poolQuery(sql)
          await poolQuery(sqlUpadate)
        } else {
          const sql = `INSERT INTO comment(belong_id, type, comment, nickname, email, site, quote_comment,quote_nickname) VALUES (0,'${type}','${comment}', '${nickname}', '${email}', '${site}', '${quoteComment}', '${quoteNickname}');`
          await poolQuery(sql)
        }
        ctx.body = {
          code: 200,
          message: "成功",
          data:null
        };
    })

    router.get("/message/list", async ctx => {
      const sql= `select id,comment,nickname,quote_nickname as quoteNickname,quote_comment as quoteComment,date_format(create_time, '%Y-%m-%d %H:%i:%s') as createTime from comment where type=3`
      const result = await poolQuery(sql)
      ctx.body = {
        code: 200,
        message: "成功",
        data:result
      };
    })
}