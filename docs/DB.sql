create table IF NOT EXISTS `article`(   
   `id` INT NOT NULL AUTO_INCREMENT COMMENT '文章ID',
   `title` VARCHAR(255) NOT NULL COMMENT '文章标题',
   `summary` VARCHAR(255) NOT NULL COMMENT '文章摘要',
   `topic` VARCHAR(255) NOT NULL COMMENT '文章主题',
   `labels` VARCHAR(255) NOT NULL COMMENT '文章标签',
   `clickSum` INT NOT NULL  COMMENT '文章点击数',
   `commentSum` INT NOT NULL  COMMENT '文章评论数',
   `content` VARCHAR(255) NOT NULL  COMMENT '文章内容',
   `status` INT NOT NULL  COMMENT '文章状态',
   `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
   `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
   PRIMARY KEY ( id )
);

