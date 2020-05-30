let OSS = require('ali-oss')

let client = new OSS({
  region: 'oss-cn-shenzhen',
  accessKeyId: 'XXXXXX',
  accessKeySecret: 'XXXXXX',
  bucket: 'jamki',
});

async function put (fileName, file) {
  try {
    //object-name可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
    let result = await client.put(fileName, file);
    return result
  } catch (e) {
    console.log(e);
  }
}
module.exports = put;
		
