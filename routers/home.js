module.exports = (router) => {
    router.get('/home/sitelist', async ctx => {
        ctx.body = {
            code:1,
            message: '成功',
            data: [
                {
                    type: '设计',
                    list:  [
                        {
                            siteName: '花瓣网',
                            cover:'https://dwz.cn/sD7I7B3K',
                            note: '设计师的天堂，灵感的集中地！',
                            id:1
                        },
                        {
                            siteName: '站酷网',
                            cover:'https://dwz.cn/sD7I7B3K',
                            note: '设计师的天堂，灵感的集中地！',
                            id:2
                        },
                        {
                            siteName: '花瓣网',
                            cover:'https://dwz.cn/sD7I7B3K',
                            note: '设计师的天堂，灵感的集中地！',
                            id:3
                        },
                        {
                            siteName: '花瓣网',
                            cover:'https://dwz.cn/sD7I7B3K',
                            note: '设计师的天堂，灵感的集中地！',
                            id:4
                        }
                    ]
                },
                {
                    type: '开发',
                    list:  [
                        {
                            siteName: '花瓣网',
                            cover:'https://dwz.cn/sD7I7B3K',
                            note: '设计师的天堂，灵感的集中地！',
                            id:1
                        },
                        {
                            siteName: '站酷网',
                            cover:'https://dwz.cn/sD7I7B3K',
                            note: '设计师的天堂，灵感的集中地！',
                            id:2
                        },
                        {
                            siteName: '花瓣网',
                            cover:'https://dwz.cn/sD7I7B3K',
                            note: '设计师的天堂，灵感的集中地！',
                            id:3
                        },
                        {
                            siteName: '花瓣网',
                            cover:'https://dwz.cn/sD7I7B3K',
                            note: '设计师的天堂，灵感的集中地！',
                            id:4
                        }
                    ]
                }
            ]
        }
    })
}