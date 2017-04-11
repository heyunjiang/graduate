-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-04-11 09:14:14
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `name`, `nickName`, `avatar`, `age`, `phone`, `email`, `address`, `isMale`, `createTime`) VALUES
(1, '何运江', '大海', 'https://avatars3.githubusercontent.com/u/15085454?v=3&s=400', 24, '18224487974', '18224487974@163.com', '中国重庆', '男', '2017-04-11'),
(4, '么么哒', '么么', 'https://t.alipayobjects.com/images/T1QUBfXo4fXXXXXXXX.png', 21, '18381045111', '121444@qq.com', 'china beijing', '1', '2017-04-11');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
