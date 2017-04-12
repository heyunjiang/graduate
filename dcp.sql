-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-04-12 09:55:19
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dcp`
--

-- --------------------------------------------------------

--
-- 表的结构 `programe`
--

CREATE TABLE IF NOT EXISTS `programe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL COMMENT '类型',
  `des` varchar(500) NOT NULL COMMENT '描述',
  `creator` varchar(20) NOT NULL COMMENT '外键，userId',
  `expectValue` varchar(500) NOT NULL,
  `expectStartTime` date NOT NULL,
  `expectEndTime` date NOT NULL,
  `status` varchar(100) NOT NULL,
  `createTime` date NOT NULL,
  `member` varchar(500) NOT NULL,
  `memberId` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `programe`
--

INSERT INTO `programe` (`id`, `name`, `type`, `des`, `creator`, `expectValue`, `expectStartTime`, `expectEndTime`, `status`, `createTime`, `member`, `memberId`) VALUES
(1, 'albumo', '个人项目', 'thinkphp做的一个毕业设计管理系统', 'heyunjiang', '能有前端相册展示、后台管理', '2017-04-13', '2017-04-29', '未开始', '2017-04-12', 'heyunjiang', '1');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `nickName` varchar(100) NOT NULL,
  `avatar` varchar(500) NOT NULL,
  `age` int(10) NOT NULL,
  `phone` varchar(13) NOT NULL,
  `email` varchar(20) NOT NULL,
  `address` varchar(200) NOT NULL,
  `isMale` varchar(10) NOT NULL,
  `createTime` date NOT NULL,
  `passworld` varchar(50) NOT NULL COMMENT '密码',
  `title` varchar(50) NOT NULL COMMENT '职位',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `name`, `nickName`, `avatar`, `age`, `phone`, `email`, `address`, `isMale`, `createTime`, `passworld`, `title`) VALUES
(1, 'heyunjiang', '大海', 'https://t.alipayobjects.com/images/T1QUBfXo4fXXXXXXXX.png', 24, '18224487974', '18224487974@163.com', '中国重庆', '男', '2017-04-12', 'e10adc3949ba59abbe56e057f20f883e', 'CEO'),
(4, '么么哒', '么么', 'https://t.alipayobjects.com/images/T1QUBfXo4fXXXXXXXX.png', 21, '18381045111', '121444@qq.com', 'china beijing', '', '2017-04-12', 'b59c67bf196a4758191e42f76670ceba', '技术总监');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
