create table IF NOT EXISTS `blog`(   
   `id` INT NOT NULL AUTO_INCREMENT COMMENT '博客ID',
   `labels` VARCHAR(255) COMMENT '博客标签',
   `blog_pic` VARCHAR(255) NOT NULL COMMENT '博客配图',
   `click_sum` INT  NOT NULL DEFAULT 0 COMMENT '博客点击数',
   `comment_sum` INT NOT NULL DEFAULT 0 COMMENT '博客评论数',
   `main_body` TEXT NOT NULL COMMENT '博客内容',
   `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
   `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
   PRIMARY KEY ( id )
);