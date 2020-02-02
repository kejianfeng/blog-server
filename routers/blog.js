module.exports = (router) => {
    router.get('/blog/bloglist', async ctx => {
        ctx.body = {
            code:1,
            message: '成功',
            data: [
                {
                    id: 1,
                    createTime:'2016-12-09',
                    labels:'春风得意马蹄疾',
                    commentSum: 35,
                    clickSum: 108,
                    blogWords: '你肯定已经听说过函数式编程，而将函数作为一等公民的 JavaScript 天生就是一门支持函数式编程的语言，但是，你可能没有从函数式编程的角度使用过 JavaScript。 本文将针对 JavaScript 函数式编程作一些入门介绍，旨在启发，因为任何一种编程风格都是一个很庞大的话题。学习函数式编程思想，有助于我们在日常开发中编写出更优雅可维护的代码，希望读完此文你会对函数式编程有一个大概的印象并产生的兴趣。',
                    blogImg: 'https://c-ssl.duitang.com/uploads/item/201802/02/20180202020205_wts5k.thumb.700_0.jpeg'
                },
                {
                    id: 2,
                    createTime:'2016-12-09',
                    labels:'春风得意马蹄疾',
                    commentSum: 35,
                    clickSum: 108,
                    blogWords: '你肯定已经听说过函数式编程，而将函数作为一等公民的 JavaScript 天生就是一门支持函数式编程的语言，但是，你可能没有从函数式编程的角度使用过 JavaScript。 本文将针对 JavaScript 函数式编程作一些入门介绍，旨在启发，因为任何一种编程风格都是一个很庞大的话题。学习函数式编程思想，有助于我们在日常开发中编写出更优雅可维护的代码，希望读完此文你会对函数式编程有一个大概的印象并产生的兴趣。',
                    blogImg:''
                }
            ]
        }
    })
}