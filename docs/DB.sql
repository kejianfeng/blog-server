/*文章*/
use blogcenter;
create table IF NOT EXISTS `article`(   
   `id` INT NOT NULL AUTO_INCREMENT COMMENT '文章ID',
   `title` VARCHAR(255) NOT NULL COMMENT '文章标题',
   `summary` TEXT NOT NULL COMMENT '文章摘要',
   `topic` VARCHAR(255) NOT NULL COMMENT '文章主题',
   `labels` VARCHAR(255) NOT NULL COMMENT '文章标签',
   `click_sum` INT  NOT NULL DEFAULT 0 COMMENT '文章点击数',
   `like_sum` INT NOT NULL DEFAULT 0 comment '文章点赞数'
   `comment_sum` INT NOT NULL DEFAULT 0 COMMENT '文章评论数',
   `main_body` TEXT NOT NULL COMMENT '文章内容',
   `status` INT NOT NULL DEFAULT 2  COMMENT '文章状态',
   `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
   `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
   PRIMARY KEY ( id )
);

/*博客*/
use blogcenter;
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

/*图片*/
use blogcenter;
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


/*站点*/
use blogcenter;
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

/*资源*/
use blogcenter;
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

/*评论*/
/*
type 1 为文章评论 2为行博评论 3为留言页留言
*/
use blogcenter;
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
