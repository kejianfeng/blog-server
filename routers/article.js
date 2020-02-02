const poolQuery = require("../utils/db");
module.exports = router => {
  router.get("/article/articleList", async ctx => {
    // const sql = 'insert into article(title) values ("啦啦啦啦")'
    // let result = await poolQuery(sql)
    ctx.body = {
      code: 1,
      message: "成功",
      data: [
        {
          id: 1,
          title: "渲染优化：重排重绘与硬件加速",
          summary:
            "你肯定已经听说过函数式编程，而将函数作为一等公民的 JavaScript 天生就是一门支持函数式编程的语言，但是，你可能没有从函数式编程的角度使用过 JavaScript。 本文将针对 JavaScript 函数式编程作一些入门介绍，旨在启发，因为任何一种编程风格都是一个很庞大的话题。学习函数式编程思想，有助于我们在日常开发中编写出更优雅可维护的代码，希望读完此文你会对函数式编程有一个大概的印象并产生的兴趣。",
          createTime: "2016-12-09",
          updateTime: "2016-12-09",
          topic: "函数式编程",
          labels: "JavaScript,进阶知识,底层机制",
          commentSum: 35,
          clickSum: 108,
          content:
            '<p style="text-align:justify;margin-left:0px;"><strong>头烂额——是夹在用户和制作方之间的视频网站们的状态。</strong></p><p style="text-align:justify;margin-left:0px;"><i>在这样的困局下，尝到了“网大（网络大电影）分账”甜头的爱奇艺，在2016年率先推出了“网剧分账”模式。</i></p><p style="text-align:justify;margin-left:0px;"><mark class="marker-green">腾讯和优酷紧随其后，全面开启了中国网剧的“分期付款”。</mark></p><p style="text-align:justify;margin-left:0px;">在分账模式方面，“爱优腾”（爱奇艺优酷腾讯）三网的计算方式各有不同，某种意义上，也标志了三个平台个性的差异。</p><p style="text-align:justify;margin-left:0px;">最早推出网剧分账的爱奇艺，对于网剧合作有三种方式，分别是：</p><p style="text-align:justify;margin-left:0px;">1. 委托承制：即爱奇艺出全资，由制作方负责内容制作，但版权归属于爱奇艺；若是有小说原创，则小说版权归属原作者，但爱奇艺享有改编权。</p><p style="text-align:justify;margin-left:0px;">2. 联合投资：爱奇艺投资所占份额不低于50%，与制作方共享包括贴片、植入广告等在内的收益。</p><p style="text-align:justify;margin-left:0px;">3. 由制作方先进行内容制作，爱奇艺后购买（与卖版权作品相似，爱奇艺较少用）。</p><p style="text-align:justify;margin-left:0px;">而对于分账模式，爱奇艺也明确强调了，“总分账金额=会员付费期分账金额+贴片广告分账期分账金额+植入广告分账金额”。</p><p style="text-align:justify;margin-left:0px;">爱奇艺的特质是看中IP。它热衷于追求IP的延展性，在看待一部剧的同时，还会去评估该剧游戏化、小说化的可能。</p><p style="text-align:justify;margin-left:0px;">相比较爱奇艺，腾讯的约于2017年推出的一套合作方式，更直接，或者说偏向保守。</p>',
          status: 1
        },
        {
          id: 2,
          title: "V8 最佳实践：从 JavaScript 变量使用姿势说起",
          summary:
            "你肯定已经听说过函数式编程，而将函数作为一等公民的 JavaScript 天生就是一门支持函数式编程的语言，但是，你可能没有从函数式编程的角度使用过 JavaScript。 本文将针对 JavaScript 函数式编程作一些入门介绍，旨在启发，因为任何一种编程风格都是一个很庞大的话题。学习函数式编程思想，有助于我们在日常开发中编写出更优雅可维护的代码，希望读完此文你会对函数式编程有一个大概的印象并产生的兴趣。",
          createTime: "2016-12-09",
          updateTime: "2016-12-09",
          topic: "函数式编程",
          labels: "JavaScript,进阶知识,底层机制",
          commentSum: 35,
          clickSum: 108,
          content:
            '<p style="text-align:justify;margin-left:0px;"><strong>头烂额——是夹在用户和制作方之间的视频网站们的状态。</strong></p><p style="text-align:justify;margin-left:0px;"><i>在这样的困局下，尝到了“网大（网络大电影）分账”甜头的爱奇艺，在2016年率先推出了“网剧分账”模式。</i></p><p style="text-align:justify;margin-left:0px;"><mark class="marker-green">腾讯和优酷紧随其后，全面开启了中国网剧的“分期付款”。</mark></p><p style="text-align:justify;margin-left:0px;">在分账模式方面，“爱优腾”（爱奇艺优酷腾讯）三网的计算方式各有不同，某种意义上，也标志了三个平台个性的差异。</p><p style="text-align:justify;margin-left:0px;">最早推出网剧分账的爱奇艺，对于网剧合作有三种方式，分别是：</p><p style="text-align:justify;margin-left:0px;">1. 委托承制：即爱奇艺出全资，由制作方负责内容制作，但版权归属于爱奇艺；若是有小说原创，则小说版权归属原作者，但爱奇艺享有改编权。</p><p style="text-align:justify;margin-left:0px;">2. 联合投资：爱奇艺投资所占份额不低于50%，与制作方共享包括贴片、植入广告等在内的收益。</p><p style="text-align:justify;margin-left:0px;">3. 由制作方先进行内容制作，爱奇艺后购买（与卖版权作品相似，爱奇艺较少用）。</p><p style="text-align:justify;margin-left:0px;">而对于分账模式，爱奇艺也明确强调了，“总分账金额=会员付费期分账金额+贴片广告分账期分账金额+植入广告分账金额”。</p><p style="text-align:justify;margin-left:0px;">爱奇艺的特质是看中IP。它热衷于追求IP的延展性，在看待一部剧的同时，还会去评估该剧游戏化、小说化的可能。</p><p style="text-align:justify;margin-left:0px;">相比较爱奇艺，腾讯的约于2017年推出的一套合作方式，更直接，或者说偏向保守。</p>',
          status: 1
        },
        {
          id: 3,
          title: "ES6 特性总结",
          summary:
            "你肯定已经听说过函数式编程，而将函数作为一等公民的 JavaScript 天生就是一门支持函数式编程的语言，但是，你可能没有从函数式编程的角度使用过 JavaScript。 本文将针对 JavaScript 函数式编程作一些入门介绍，旨在启发，因为任何一种编程风格都是一个很庞大的话题。学习函数式编程思想，有助于我们在日常开发中编写出更优雅可维护的代码，希望读完此文你会对函数式编程有一个大概的印象并产生的兴趣。",
          createTime: "2016-12-09",
          updateTime: "2016-12-09",
          topic: "函数式编程",
          labels: "JavaScript,进阶知识,底层机制",
          commentSum: 35,
          clickSum: 108,
          content:
            "你肯定已经听说过函数式编程，而将函数作为一等公民的 JavaScript 天生就是一门支持函数式编程的语言，但是，你可能没有从函数式编程的角度使用过 JavaScript。 本文将针对 JavaScript 函数式编程作一些入门介绍，旨在启发，因为任何一种编程风格都是一个很庞大的话题。学习函数式编程思想，有助于我们在日常开发中编写出更优雅可维护的代码，希望读完此文你会对函数式编程有一个大概的印象并产生的兴趣。",
          status: 1
        }
      ]
    };
  });
};
