create table IF NOT EXISTS `pic_works`(   
   `id` INT NOT NULL AUTO_INCREMENT COMMENT 'ID',
   `labels` VARCHAR(255) COMMENT '标签',
   `pic_url` VARCHAR(255) NOT NULL COMMENT '作品地址',
   `like_sum` INT  NOT NULL DEFAULT 0 COMMENT '点赞数',
   `comment_sum` INT NOT NULL DEFAULT 0 COMMENT '评论数',
   `pic_text` TEXT NOT NULL COMMENT '图片文案',
   `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
   `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
   PRIMARY KEY ( id )
);