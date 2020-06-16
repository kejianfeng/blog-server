const {poolQuery} = require("../utils/db");
// const humps = require("humps")
module.exports = router => {
  /**
   * 获取所有文章数据
   */
  router.get("/archives/all", async ctx => {
    const sql = "select id,title, topic,labels,date_format(create_time, '%Y-%m-%d') as createTime from article"
    let result = await poolQuery(sql)
    ctx.body = {
      code: 200,
      message: "成功",
      data:result
    };
  });
  /**
   * 获取文章主题列表
   */
  router.get('/admin/archives/getTopic', async ctx => {
    const sql = "select id, name from topic"
    let result = await poolQuery(sql)
    ctx.body = {
      code: 200,
      message: "成功",
      data:result
    };
  })

  /**
   * 添加文章主题
   */
  router.post('/admin/archives/addTopic/', async ctx => {
    const {name} =  ctx.request.body
    const duplicateSql = `select count(*) from topic where name ='${name}';`
    const sql = `INSERT INTO topic(name) VALUES ('${name}');`;
    const count = await poolQuery(duplicateSql)
    if (count[0]['count(*)'] > 0) {
      ctx.body = {
        code: 401,
        message: "该主题已存在",
        data:null
      };
      return
    }
    await poolQuery(sql)
    ctx.body = {
      code: 200,
      message: "成功",
      data:null
    };
    return
  })

  /**
   * 获取站点分类列表
   */
  router.get('/admin/archives/getSiteClassify', async ctx => {
    const sql = "select id, name from site_classify"
    let result = await poolQuery(sql)
    ctx.body = {
      code: 200,
      message: "成功",
      data:result
    };
  })

  /**
   * 添加站点分类
   */
  router.post('/admin/archives/addSiteClassify', async ctx => {
    const {name} =  ctx.request.body
    const duplicateSql = `select count(*) from site_classify where name ='${name}';`
    const sql = `INSERT INTO site_classify(name) VALUES ('${name}');`;
    const count = await poolQuery(duplicateSql)
    if (count[0]['count(*)'] > 0) {
      ctx.body = {
        code: 401,
        message: "该分类已存在",
        data:null
      };
      return
    }
    await poolQuery(sql)
    ctx.body = {
      code: 200,
      message: "成功",
      data:null
    };
    return
  })

   /**
   * 获取站点概况
   */
  router.get('/archives/getOverview', async ctx => {
    const articleSql = "select count(id) as aticleNum from article"
    const commentSql = "select count(id) as messaggeNum from comment"
    const sourceSql = "select count(id) as sourceNum from source"

    let arr = []
    arr.push(poolQuery(articleSql))
    arr.push(poolQuery(commentSql))
    arr.push(poolQuery(sourceSql))
    let result = await Promise.all(arr)
    let overView = {}
    result.forEach(item => {
      overView = Object.assign(overView, item[0])
    });
    ctx.body = {
      code: 200,
      message: "成功",
      data:overView
    };
  })



};




