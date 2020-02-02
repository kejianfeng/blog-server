module.exports = (router) => {
    router.get('/source/sourcelist', async ctx => {
        ctx.body = {
            code:1,
            message: '成功',
            data: [
                {
                    id: 1,
                    createTime:'2016-12-09',
                    title: 'Vue移动音乐播放器实践',
                    intro:'从基础学起到完成一个中型项目，让你快速成为一个熟用vue进行开发的极客',
                    thumbnail: 'https://www.niudana.com/uploadfile/201611/20/155400381.png',
                    sourceLink: 'http://www.baidu.com',
                    key:'hjyt'
                },
                {
                    id: 2,
                    createTime:'2016-12-09',
                    title: 'Vue移动音乐播放器实践',
                    intro:'从基础学起到完成一个中型项目，让你快速成为一个熟用vue进行开发的极客',
                    thumbnail: 'https://www.niudana.com/uploadfile/201611/20/155400381.png',
                    sourceLink: 'http://www.baidu.com',
                    key:'hjyt'
                },
                {
                    id: 3,
                    createTime:'2016-12-09',
                    title: 'Vue移动音乐播放器实践',
                    intro:'从基础学起到完成一个中型项目，让你快速成为一个熟用vue进行开发的极客',
                    thumbnail: 'https://www.niudana.com/uploadfile/201611/20/155400381.png',
                    sourceLink: 'http://www.baidu.com',
                    key:'hjyt'
                },
                {
                    id: 4,
                    createTime:'2016-12-09',
                    title: 'Vue移动音乐播放器实践',
                    intro:'从基础学起到完成一个中型项目，让你快速成为一个熟用vue进行开发的极客',
                    thumbnail: 'https://www.niudana.com/uploadfile/201611/20/155400381.png',
                    sourceLink: 'http://www.baidu.com',
                    key:'hjyt'
                },
                {
                    id: 5,
                    createTime:'2016-12-09',
                    title: 'Vue移动音乐播放器实践',
                    intro:'从基础学起到完成一个中型项目，让你快速成为一个熟用vue进行开发的极客',
                    thumbnail: 'https://www.niudana.com/uploadfile/201611/20/155400381.png',
                    sourceLink: 'http://www.baidu.com',
                    key:'hjyt'
                }
            ]
        }
    })
}