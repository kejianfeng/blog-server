create table IF NOT EXISTS `site_classify`(   
   `id` INT NOT NULL AUTO_INCREMENT COMMENT '分类ID',
   `name` VARCHAR(255) NOT NULL COMMENT '分类名称',
   `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
   `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
   PRIMARY KEY ( id )
);