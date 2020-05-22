
const crypto = require('crypto');
const putFile = require('../utils/upload')
module.exports = (router) => {
  router.post('/upload', async ctx => {
      const image = ctx.request.body.file
      const hash = crypto.createHash('md5')
      hash.update(image)
      const address = `${hash.digest('hex')}.jpg`
      let  type = image.substring(image.indexOf('data:image/') + 11, image.indexOf(';base64,'));
      const file = image.replace('data:image/' + type + ';base64,', '');
      const bufferFie = Buffer.from(file, 'base64')
      const result = await putFile(address, bufferFie).catch(err => {
        ctx.body = {
          code:501,
          msg:'上传出错啦'
        }
        return
      })
      if (result.res.status === 200) {
        ctx.body = {
          code:200,
          message: '成功',
          data: {
            picUrl: result.url
          }
        }
        return
      }else {
        ctx.body = {
          code:5002,
          message: '上传有误',
        }
      }
  })
}