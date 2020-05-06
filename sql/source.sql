create table IF NOT EXISTS `source`(   
   `id` INT NOT NULL AUTO_INCREMENT COMMENT 'ID',
   `source_labels` VARCHAR(255)  COMMENT '标签',
   `source_name` VARCHAR(255) NOT NULL COMMENT '资源名称',
   `source_intro` VARCHAR(255) NOT NULL COMMENT '资源介绍',
   `source_link` VARCHAR(255) NOT NULL COMMENT '资源连接',
   `source_icon` VARCHAR(255) NOT NULL COMMENT '资源图标',
   `source_password` VARCHAR(255)  COMMENT '资源密码',
   `source_shoot` VARCHAR(255) NOT NULL COMMENT '资源截图',
   `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
   `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
   PRIMARY KEY ( id )
);