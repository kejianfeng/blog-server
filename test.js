
const axios = require("axios");
const fs = require('fs')
const crypto = require('crypto');

axios({
  method: "get",
  url: "https://mmbiz.qpic.cn/mmbiz_jpg/iaice9ibHiamNVU6sfREDL4d5B1kjAicAFUUBReLrNwH8ZFXa67w8gKpO5scoaibSPibcHbmibphL3DfAfjKakSRcdME0w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
  responseType: 'stream',
  responseEncoding: 'utf8',
  headers: {
    Origin: "https://mp.weixin.qq.com",
    Referer: "https://mp.weixin.qq.com/s/H7fbOEB6kvAcUJ2gsYR4iw",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36"
  }
}).then( res => {
  // let bitmap = fs.createReadStream(res.headers);
  // JSON.stringify(res.data)
  const hash = crypto.createHash('md5')
  hash.update("https://mmbiz.qpic.cn/mmbiz_jpg/iaice9ibHiamNVU6sfREDL4d5B1kjAicAFUUBReLrNwH8ZFXa67w8gKpO5scoaibSPibcHbmibphL3DfAfjKakSRcdME0w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1")
  const address = hash.digest('hex')
  console.log(address)

})
