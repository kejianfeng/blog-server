create table IF NOT EXISTS `topic`(   
   `id` INT NOT NULL AUTO_INCREMENT COMMENT '主题ID',
   `name` VARCHAR(255) NOT NULL COMMENT '主题名称',
   `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
   `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
   PRIMARY KEY ( id )
);