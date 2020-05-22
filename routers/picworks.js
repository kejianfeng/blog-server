const poolQuery = require("../utils/db");
module.exports = (router) => {
  //图片列表
  router.get("/picwork/picList", async (ctx) => {
    const {curPage, pageLimit} = ctx.request.query
    const totalSql = 'select count(id) as total from pic_works;'
    let {total} = (await poolQuery(totalSql))[0]
    const offset = pageLimit * (curPage - 1)
    const sql =
      `select id,labels,pic_url as picUrl,pic_text as picText, like_sum as likeSum from pic_works LIMIT ${pageLimit} OFFSET ${offset}`;
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
      data: result,
    };
  });

  //图片点赞
  router.post("/picwork/like", async (ctx) => {
    const { id } = ctx.request.body;
    const sql = `update pic_works set like_sum = like_sum+1 where id='${id}'`;
    await poolQuery(sql);
    ctx.body = {
      code: 200,
      message: "成功",
      data: null,
    };
  });
  //添加图片
  router.post("/picwork/add", async (ctx) => {
    const { picture, labels, picText } = ctx.request.body;
    const sql = `INSERT INTO pic_works(pic_url, labels, pic_text) VALUES ('${picture}','${labels}','${picText}');`;
    let result = await poolQuery(sql)
    ctx.body = {
      code: 200,
      message: "成功",
      data: null,
    };
    return;
  });

    /**
   * 图片删除
   */
  router.post("/admin/picwork/delete", async ctx => {
    const  {id } = ctx.request.body
    const sql = `delete from pic_works where id='${id}';`
    await poolQuery(sql)
    ctx.body = {
      code: 200,
      message: "成功",
      data:null
    };
  })
};
