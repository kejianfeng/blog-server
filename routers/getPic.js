const axios = require("axios");
const putFile = require("../utils/upload")
const fs = require("fs");
module.exports = router => {
 router.post('/upload', async ctx => {
    console.log(ctx.req)
 })
};