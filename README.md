<b>College Management System Part </b>

in this project we deal with adding student , storing student details and implementing joins by displaying full details of a particular student

<b>Technologies</b>
<ul>
<li>
Express
</li>
<li>Mysql</li>
<li>ejs</li>
</ul>

<b>Prerequisites</b>

$ npm install express
$ npm install mysql
$ npm install ejs

Project

$ Git clone https://github.com/yashika9720/college-management-system.git

<b>Schema</b>

-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2021 at 01:50 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_practise`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `course_id` int(10) NOT NULL,
  `course_name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`course_id`, `course_name`) VALUES
(1, 'maths'),
(2, 'english'),
(3, 'electronics'),
(4, 'physics');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `department_id` int(10) NOT NULL,
  `department_name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`department_id`, `department_name`) VALUES
(1, 'CSE'),
(2, 'Civil'),
(4, 'mechanical');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `student_id` int(10) NOT NULL,
  `student_name` varchar(20) NOT NULL,
  `student_phone` int(10) NOT NULL,
  `student_address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`student_id`, `student_name`, `student_phone`, `student_address`) VALUES
(1, 'aahna', 214748364, 'jammu'),
(2, 'kamal', 214748367, 'chandigarh'),
(3, 'riya', 214743647, 'ambala'),
(4, 'priya', 247483647, 'bihar'),
(5, 'undefined', 0, 'i'),
(11, 'jjjjj', 88888000, 'kklkokok'),
(12, 'rrrrr', 2147483647, 'fgffh cfgh gfg'),
(13, 'hhhh88', 87878, '787hkhkhi'),
(14, 'kkkkkkkk', 66336633, 'jjjijj kbihiihi bsjb'),
(16, 'rrr', 43434343, 'bjkbkn kjbn'),
(17, 'ritika', 22223333, 'fdvdfvdv'),
(18, 'rahul', 112345677, 'wwerty'),
(19, 'renu', 22222223, 'fsfsfsav'),
(20, 'rohan', 6676676, 'hjguj vjjj jygyjg jgjugu '),
(21, 'priya', 12121212, 'ksfifisafmmf'),
(22, 'kamal', 23567456, 'klimo;'),
(24, 'heena', 897644, 'jld'),
(25, 'rrrr', 76543, 'kklkokok'),
(26, 'nn', 1212, 'kklkokok'),
(27, 'kkkkk', 231, 'kklkokok'),
(29, 'kkkkk', 231333333, 'kklkokok'),
(31, 'nama jan', 990787, 'iiyuyuygyy'),
(32, 'asa', 996848, 'sd'),
(34, 'nama!!!', 90988, '87878'),
(36, 'nama!!!', 909882222, '87878'),
(37, 'subha', 8790, 'poim'),
(38, 'mmm', 1234, 'ds'),
(39, 'aas', 1234567, 'sdsd'),
(40, 'ee', 456, 'sds'),
(42, 'wew', 9000, 'wdw'),
(43, 'chirag', 78, 'oo'),
(44, 'BC', 909, 'chal ja'),
(46, 'chl jaa', 2590, 'cc'),
(48, 'wegytt', 2345678, 'wewew'),
(49, 'shivam', 89900887, 'yyuoi'),
(50, '24243', 4665767, 'hfghf'),
(52, 'kkkkk', 980798, 'uu'),
(53, 'chirag', 23466, 'hkh'),
(54, 'payal', 4454545, 'jijijj'),
(55, 'piya', 2232311, 'kkkk'),
(56, 'ritu', 33451233, 'mmmlk'),
(57, 'tina', 12673, 'ssds'),
(58, 'tina', 5565656, 'sdnjsckj'),
(59, 'tina', 7878787, 'vsdc'),
(60, 'yellow', 333333, 'rrrrrr');

-- --------------------------------------------------------

--
-- Table structure for table `student_course`
--

CREATE TABLE `student_course` (
  `student_id` int(10) NOT NULL,
  `course_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_course`
--

INSERT INTO `student_course` (`student_id`, `course_id`) VALUES
(1, 1),
(1, 2),
(1, 4),
(2, 1),
(2, 2),
(2, 3),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(54, 2),
(55, 2),
(56, 2),
(57, 1),
(58, 1),
(59, 2),
(60, 1);

-- --------------------------------------------------------

--
-- Table structure for table `student_department`
--

CREATE TABLE `student_department` (
  `student_id` int(11) NOT NULL,
  `department_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_department`
--

INSERT INTO `student_department` (`student_id`, `department_id`) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 1),
(60, 1);

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `teacher_id` int(10) NOT NULL,
  `teacher_name` varchar(25) NOT NULL,
  `teacher_address` varchar(50) NOT NULL,
  `teacher_phone` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`teacher_id`, `teacher_name`, `teacher_address`, `teacher_phone`) VALUES
(1, 'vishali', 'chandigarh', 1234567890),
(2, 'rahul', 'chandigarh', 1234567899),
(3, 'renu', 'chandigarh', 1234567897),
(4, 'radhika', 'chandigarh', 1234567898);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`department_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`student_id`),
  ADD UNIQUE KEY `student_phone` (`student_phone`);

--
-- Indexes for table `student_course`
--
ALTER TABLE `student_course`
  ADD KEY `student_id` (`student_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `student_department`
--
ALTER TABLE `student_department`
  ADD KEY `student_id` (`student_id`),
  ADD KEY `department_id` (`department_id`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`teacher_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `course_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `department_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `student_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `teacher_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `student_course`
--
ALTER TABLE `student_course`
  ADD CONSTRAINT `student_course_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`),
  ADD CONSTRAINT `student_course_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`);

--
-- Constraints for table `student_department`
--
ALTER TABLE `student_department`
  ADD CONSTRAINT `student_department_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`),
  ADD CONSTRAINT `student_department_ibfk_2` FOREIGN KEY (`department_id`) REFERENCES `department` (`department_id`);
COMMIT;
