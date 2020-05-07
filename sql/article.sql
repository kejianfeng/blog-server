create table IF NOT EXISTS `article`(   
   `id` INT NOT NULL AUTO_INCREMENT COMMENT '文章ID',
   `title` VARCHAR(255) NOT NULL COMMENT '文章标题',
   `summary` TEXT NOT NULL COMMENT '文章摘要',
   `topic` VARCHAR(255) NOT NULL COMMENT '文章主题',
   `labels` VARCHAR(255) NOT NULL COMMENT '文章标签',
   `click_sum` INT  NOT NULL DEFAULT 0 COMMENT '文章点击数',
   `like_sum` INT NOT NULL DEFAULT 0 comment '文章点赞数',
   `comment_sum` INT NOT NULL DEFAULT 0 COMMENT '文章评论数',
   `main_body` TEXT NOT NULL COMMENT '文章内容',
   `status` INT NOT NULL DEFAULT 2  COMMENT '文章状态',
   `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
   `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
   PRIMARY KEY ( id )
);