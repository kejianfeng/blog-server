create table IF NOT EXISTS `user`(   
   `id` INT NOT NULL AUTO_INCREMENT COMMENT '用户ID',
   `user_name` VARCHAR(255) NOT NULL COMMENT '用户名',
   `mobile` VARCHAR(255) NOT NULL COMMENT '手机号码',
   `email` VARCHAR(255)  NOT NULL DEFAULT 0 COMMENT '邮箱',
   `password` VARCHAR(255) NOT NULL COMMENT '密码'
   `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
   `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
   PRIMARY KEY ( id )
);