create table IF NOT EXISTS `comment`(   
   `id` INT NOT NULL AUTO_INCREMENT COMMENT 'ID',
   `belong_id` INT  COMMENT '关联ID',
   `type` INT NOT NULL  DEFAULT 1 COMMENT '评论类别',
   `comment` TEXT NOT NULL COMMENT '评论内容',
   `nickname` VARCHAR(255) NOT NULL COMMENT '昵称',
   `email` VARCHAR(255) NOT NULL COMMENT '邮箱',
   `site` VARCHAR(255)  COMMENT '个人站点',
   `quote_nickname` VARCHAR(255)  COMMENT '引用昵称',
   `quote_comment` VARCHAR(255)  COMMENT '引用评论',
   `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
   `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
   PRIMARY KEY ( id )
);