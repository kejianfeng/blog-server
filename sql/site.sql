create table IF NOT EXISTS `site`(   
   `id` INT NOT NULL AUTO_INCREMENT COMMENT 'ID',
   `classify` VARCHAR(255) COMMENT '分类',
   `site_url` VARCHAR(255) NOT NULL COMMENT '网站地址',
   `site_name` VARCHAR(255) NOT NULL COMMENT '网站名称',
   `site_text` TEXT NOT NULL COMMENT '站点文案',
   `site_pic` TEXT NOT NULL COMMENT '站点图片',
   `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
   `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
   PRIMARY KEY ( id )
);