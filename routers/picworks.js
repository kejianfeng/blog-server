module.exports = (router) => {
    router.get('/picworks/piclist', async ctx => {
        ctx.body = {
            code:1,
            message: '成功',
            data: [
                {
                    id: 1,
                    createTime:'2016-12-09',
                    labels:'少女,搭配',
                    likeSum: 0,
                    intro: ' 希望你如山间清爽的风，清泉碰触石头，不痛不痒',
                    picUrl: 'https://s5.mogucdn.com/mlcdn/c45406/191121_84960d3ll42k421i1fe1f499cee9l_3542x4900.jpg_440x587.v1cAC.40.webp'
                },
                {
                    id: 2,
                    createTime:'2016-12-09',
                    labels:'',
                    likeSum: 8,
                    intro: ' 希望你如山间清爽的风，清泉碰触石头，不痛不痒',
                    picUrl: 'https://s10.mogucdn.com/mlcdn/c45406/200115_717g7i788igjah23i7jfh3hi91jke_200x240.jpg'
                },
                {
                    id: 3,
                    createTime:'2016-12-09',
                    labels:'少女,搭配',
                    likeSum: 56,
                    intro: ' 希望你如山间清爽的风，清泉碰触石头，不痛不痒',
                    picUrl: 'https://s5.mogucdn.com/mlcdn/c45406/191014_144gddkk07aib94d9df3khd7fdbgl_3332x4999.jpg_440x587.v1cAC.40.webp'
                },
                {
                    id: 4,
                    createTime:'2016-12-09',
                    labels:'少女',
                    likeSum: 108,
                    intro: ' 希望你如山间清爽的风，清泉碰触石头，不痛不痒',
                    picUrl: 'https://s5.mogucdn.com/mlcdn/55cf19/191102_4167eecb0jageeeja0afle1548ag5_640x960.jpg_440x587.v1cAC.40.webp'
                },
                {
                    id: 5,
                    createTime:'2016-12-09',
                    labels:'少女,搭配',
                    likeSum: 108,
                    intro: ' 希望你如山间清爽的风，清泉碰触石头，不痛不痒',
                    picUrl: 'https://s5.mogucdn.com/mlcdn/c45406/191123_7ghk9gh2358k4a51719kbidbgil46_3266x4900.jpg_440x587.v1cAC.40.webp'
                },
                {
                    id: 6,
                    createTime:'2016-12-09',
                    labels:'少女,搭配',
                    likeSum: 108,
                    intro: ' 希望你如山间清爽的风，清泉碰触石头，不痛不痒',
                    picUrl: 'https://s5.mogucdn.com/mlcdn/c45406/191101_109e76b046c7higic0iliigba5i28_2999x4499.jpg_440x587.v1cAC.40.webp'
                },
                {
                    id: 7,
                    createTime:'2016-12-09',
                    labels:'少女,搭配',
                    likeSum: 108,
                    intro: ' 希望你如山间清爽的风，清泉碰触石头，不痛不痒',
                    picUrl: 'https://s5.mogucdn.com/mlcdn/c45406/191230_4i5aa26kfe03aghk23aik8d773jaa_2000x3000.jpg_440x587.v1cAC.40.webp'
                },
                {
                    id: 8,
                    createTime:'2016-12-09',
                    labels:'少女,搭配',
                    likeSum: 108,
                    intro: ' 希望你如山间清爽的风，清泉碰触石头，不痛不痒',
                    picUrl: 'https://s5.mogucdn.com/mlcdn/c45406/191125_4i21hc963glc18108f89a62hhh3e1_2000x3000.jpg_440x587.v1cAC.40.webp'
                },
            ]
        }
    })
}