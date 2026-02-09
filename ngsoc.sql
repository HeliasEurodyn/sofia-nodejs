-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: database
-- Generation Time: Feb 09, 2026 at 12:55 PM
-- Server version: 11.5.2-MariaDB-ubu2404
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ngsoc`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` bigint(20) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `security_impact` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `title`, `description`, `security_impact`) VALUES
(1, 'Payroll Department', 'The Payroll Department is responsible for managing employee compensation, including salary calculations, bonuses, deductions, and the timely execution of payroll payments. It handles sensitive personal and financial data and ensures compliance with internal policies and legal regulations related to employment and taxation.', 'A security violation in the Payroll Department could result in unauthorized access to sensitive employee data, financial fraud, incorrect or delayed salary payments, and violations of data protection regulations. Such an incident may lead to financial losses, legal penalties, reputational damage, and a loss of employee trust in the organization.'),
(2, 'Human Resources Department', 'The Human Resources Department manages employee lifecycle processes, including recruitment, onboarding, performance management, training, and employee relations. It maintains sensitive personal, contractual, and performance-related information and ensures compliance with labor laws and internal policies.', 'A security violation in the Human Resources Department could expose confidential employee data, including personal identifiers and employment records. This may result in regulatory non-compliance, legal liabilities, reputational damage, and reduced employee confidence in the organization’s ability to protect personal information.'),
(3, 'Finance Department', 'The Finance Department oversees the organization’s financial operations, including budgeting, accounting, financial reporting, and cash flow management. It ensures financial accuracy, regulatory compliance, and the integrity of financial records.', 'A security breach in the Finance Department could lead to financial fraud, manipulation of financial data, unauthorized transactions, and loss of financial control. Such incidents may cause significant financial losses, audit failures, regulatory penalties, and long-term damage to organizational credibility.'),
(4, 'Information Technology Department', 'The Information Technology Department is responsible for managing the organization’s IT infrastructure, systems, networks, and applications. It ensures system availability, data integrity, and secure access to digital resources across the organization.', 'A security violation in the IT Department could compromise critical systems, enable unauthorized access across multiple departments, and disrupt business operations. The impact may include widespread service outages, data breaches, operational downtime, and increased recovery and remediation costs.'),
(5, 'Sales Department', 'The Sales Department manages customer relationships, sales activities, contracts, and revenue generation. It handles customer data, pricing information, and commercial agreements critical to business growth.', 'A security incident in the Sales Department could result in exposure of customer data, leakage of pricing strategies, or loss of competitive advantage. This may lead to customer trust erosion, contractual disputes, financial losses, and reputational harm.'),
(6, 'Operations Department', 'The Operations Department oversees day-to-day business activities, process execution, and service delivery. It ensures operational efficiency, continuity, and coordination between different organizational units.', 'A security breach in the Operations Department could disrupt critical business processes, affect service availability, and compromise operational data. The consequences may include production delays, service interruptions, customer dissatisfaction, and increased operational risk.');

-- --------------------------------------------------------

--
-- Table structure for table `graph_template`
--

CREATE TABLE `graph_template` (
  `id` varchar(36) NOT NULL,
  `created_by` varchar(36) DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT NULL,
  `modified_by` varchar(36) DEFAULT NULL,
  `modified_on` timestamp NULL DEFAULT NULL,
  `node_html_label` text DEFAULT NULL,
  `elements_style` text DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `is_default` int(11) DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Dumping data for table `graph_template`
--

INSERT INTO `graph_template` (`id`, `created_by`, `created_on`, `modified_by`, `modified_on`, `node_html_label`, `elements_style`, `name`, `is_default`, `sort_order`) VALUES
('54331114-5dbd-4b57-ad8d-53070dfc5c49', NULL, NULL, NULL, NULL, 'Z2V0Tm9kZUh0bWxMYWJlbCgpIHsKICByZXR1cm4gWwogICAgewogICAgICBxdWVyeTogJ25vZGUnLAogICAgICBoYWxpZ246ICdjZW50ZXInLAogICAgICB2YWxpZ246ICdjZW50ZXInLAogICAgICB0cGw6IChkYXRhKSA9PiB7CiAgICAgICAgY29uc3Qgbm9kZVByb3BzID0gZGF0YS5uZW80ak5vZGU/LnByb3BlcnRpZXM7CiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG5vZGVQcm9wcykgfHwgbm9kZVByb3BzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnOwoKICAgICAgICAvLyAtLS0tLS0tLSBCYXNlU2NvcmUgQ29sb3IgTG9naWMgLS0tLS0tLS0KICAgICAgICBjb25zdCBiYXNlU2NvcmVQcm9wID0gbm9kZVByb3BzLmZpbmQocCA9PiBwLm5hbWUgPT09ICdiYXNlU2NvcmUnICYmIHAudmFsdWUgIT09IHVuZGVmaW5lZCk7CiAgICAgICAgY29uc3QgYmFzZVNjb3JlID0gYmFzZVNjb3JlUHJvcCA/IE51bWJlcihiYXNlU2NvcmVQcm9wLnZhbHVlKSA6IG51bGw7CgogICAgICAgIC8vIM6Rzr0gzrTOtc69IM+Fz4DOrM+Bz4fOtc65IHNjb3JlID0gzrPOus+BzrkKICAgICAgICBsZXQgaWNvbkNvbG9yID0gIiM4MDgwODAiOwoKICAgICAgICBpZiAoYmFzZVNjb3JlICE9PSBudWxsICYmICFpc05hTihiYXNlU2NvcmUpKSB7CiAgICAgICAgICAvLyAwIOKGkiDPgM+BzqzPg865zr3OvyAoIzAwRkYwMCkgLCAxMCDihpIgzrrPjM66zrrOuc69zr8gKCNGRjAwMDApCiAgICAgICAgICBjb25zdCByID0gTWF0aC5yb3VuZCgoYmFzZVNjb3JlIC8gMTApICogMjU1KTsgICAgICAgICAvLyDOsc+Az4wgMOKGkjI1NQogICAgICAgICAgY29uc3QgZyA9IE1hdGgucm91bmQoKDEgLSBiYXNlU2NvcmUgLyAxMCkgKiAyNTUpOyAgICAgLy8gzrHPgM+MIDI1NeKGkjAKICAgICAgICAgIGljb25Db2xvciA9IGByZ2IoJHtyfSwke2d9LDApYDsgICAgICAgICAgICAgICAgICAgICAgLy8gzrrOr8+Ez4HOuc69zr8gz4PPhM63IM68zq3Pg863CiAgICAgICAgfQoKICAgICAgICAvLyAtLS0tLS0tLSBFeGlzdGluZyBIVE1MIHNlY3Rpb25zICjOtM61zr0gzrHOu867zqzOts61zrkgz4TOr8+Azr/PhM6xIM61zrTPjikgLS0tLS0tLS0KCiAgICAgICAgY29uc3QgZmFJY29uUHJvcCA9IG5vZGVQcm9wcy5maW5kKChwKSA9PiBwLm5hbWUgPT09ICdmYUljb24nICYmIHAudmFsdWUpOwogICAgICAgIGxldCBmYUljb24gPSBmYUljb25Qcm9wID8gZmFJY29uUHJvcC52YWx1ZSA6ICdmYS1yZWd1bGFyIGZhLWNpcmNsZS1kb3QnOwoKICAgICAgICBjb25zdCBuYW1lSHRtbENvbnRlbnQgPSBub2RlUHJvcHMKICAgICAgICAgIC5maWx0ZXIoKHApID0+IHAubmFtZSA9PT0gJ25hbWUnICYmIHAudmFsdWUpCiAgICAgICAgICAubWFwKChwKSA9PiBgPGRpdiBzdHlsZT0iZm9udC1zaXplOjE1cHg7Ij48aSBjbGFzcz0iJHtmYUljb259Ij48L2k+IDxiPiR7cC52YWx1ZX08L2I+PC9kaXY+YCkKICAgICAgICAgIC5qb2luKCcnKTsKCiAgICAgICAgY29uc3QgY3BlSHRtbENvbnRlbnQgPSBub2RlUHJvcHMKICAgICAgICAgIC5maWx0ZXIoKHApID0+IHAubmFtZSA9PT0gJ25nc29jQ3BlJyAmJiBwLnZhbHVlKQogICAgICAgICAgLm1hcCgocCkgPT4gewogICAgICAgICAgICBjb25zdCB2YWx1ZSA9IFN0cmluZyhwLnZhbHVlKTsKICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PjxiPkNwZTo8L2I+ICR7cC52YWx1ZX08L2Rpdj5gOwogICAgICAgICAgfSkKICAgICAgICAgIC5qb2luKCcnKTsKCiAgICAgICAgY29uc3QgaHJDdmVIdG1sQ29udGVudCA9IG5vZGVQcm9wcwogICAgICAgICAgLmZpbHRlcigocCkgPT4gcC5uYW1lID09PSAnaGlnaFJpc2tDdmUnICYmIHAudmFsdWUpCiAgICAgICAgICAubWFwKChwKSA9PiB7CiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gU3RyaW5nKHAudmFsdWUpOwogICAgICAgICAgICByZXR1cm4gYDxkaXY+PGI+Q3ZlOjwvYj4gJHtwLnZhbHVlfTwvZGl2PmA7CiAgICAgICAgICB9KQogICAgICAgICAgLmpvaW4oJycpOwoKICAgICAgIGNvbnN0IGN2ZXNQcmV2ID0gbm9kZVByb3BzCiAgICAgICAgICAuZmlsdGVyKChwKSA9PiBwLm5hbWUgPT09ICdjdmVJZHMnICYmIHAudmFsdWUpCiAgICAgICAgICAubWFwKChwKSA9PiB7CiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gU3RyaW5nKHAudmFsdWUpOwogICAgICAgICAgICBsZXQgY3Zlc1ByZXYgPSB2YWx1ZS5sZW5ndGggPiAzMCA/IGAke3ZhbHVlLnNsaWNlKDAsIDMwKX0uLi5gIDogdmFsdWU7CiAgICAgICAgICAgIGlmKGN2ZXNQcmV2ID09ICcnKWN2ZXNQcmV2ID0gJy0nCiAgICAgICAgICAgIHJldHVybiBjdmVzUHJldjsKICAgICAgICAgIH0pCiAgICAgICAgICAuam9pbignJyk7CgogICAgICAgY29uc3QgY3Zlc1RvdGFsPSBub2RlUHJvcHMKICAgICAgICAgIC5maWx0ZXIoKHApID0+IHAubmFtZSA9PT0gJ3RvdGFsQ3ZlcycgJiYgcC52YWx1ZSkKICAgICAgICAgIC5tYXAoKHApID0+IHsKICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBTdHJpbmcocC52YWx1ZSk7CiAgICAgICAgICAgIHJldHVybiB2YWx1ZTsKICAgICAgICAgIH0pCiAgICAgICAgICAuam9pbignJyk7CgogICAgICAgY29uc3QgY3Zlc0h0bWxDb250ZW50ID0gYDxkaXYgc3R5bGU9ImZvbnQtc2l6ZTogOHB4OyI+PGI+Q3Zlcygke2N2ZXNUb3RhbH0pOjwvYj4gJHtjdmVzUHJldn08L2Rpdj5gOwoKICAgICAgIGNvbnN0IGJTY29yZT0gbm9kZVByb3BzLmZpbHRlcigocCkgPT4gcC5uYW1lID09PSAnYmFzZVNjb3JlJyAmJiBwLnZhbHVlKQogICAgICAgICAgLm1hcCgocCkgPT4gcC52YWx1ZSkuam9pbignJyk7CgogICAgICAgY29uc3QgaW1wYWN0U2NvcmU9IG5vZGVQcm9wcy5maWx0ZXIoKHApID0+IHAubmFtZSA9PT0gJ2ltcGFjdFNjb3JlJyAmJiBwLnZhbHVlKQogICAgICAgICAgLm1hcCgocCkgPT4gcC52YWx1ZSkuam9pbignJyk7CgogICAgICAgY29uc3QgZXhwbG9pdGFiaWxpdHlTY29yZT0gbm9kZVByb3BzLmZpbHRlcigocCkgPT4gcC5uYW1lID09PSAnZXhwbG9pdGFiaWxpdHlTY29yZScgJiYgcC52YWx1ZSkKICAgICAgICAgIC5tYXAoKHApID0+IHAudmFsdWUpLmpvaW4oJycpOwoKICAgICAgIGNvbnN0IHNjb3Jlc0h0bWxDb250ZW50ID0gYDxkaXY+PGI+U2NvcmVzKEJhc2UvSW1wYWN0L0V4cGxvaXQpOjwvYj4gJHtiU2NvcmV9LyAke2ltcGFjdFNjb3JlfS8gJHtleHBsb2l0YWJpbGl0eVNjb3JlfSA8L2Rpdj5gOwogICAgICAgCiAgICAgICBjb25zdCBodG1sQ29udGVudCA9IG5hbWVIdG1sQ29udGVudCArIGNwZUh0bWxDb250ZW50ICsgaHJDdmVIdG1sQ29udGVudCArIHNjb3Jlc0h0bWxDb250ZW50ICsgY3Zlc0h0bWxDb250ZW50OwogICAgICAKCgogICAgICAgIHJldHVybiBgCiAgICAgICAgICA8ZGl2IHN0eWxlPSIKICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjkpOwogICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgICAgICAgIHBhZGRpbmc6IDRweDsKICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4OwogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMik7CiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICR7aWNvbkNvbG9yfTsKICAgICAgICAgICI+CiAgICAgICAgCiAgICAgICAgICAgICR7aHRtbENvbnRlbnR9CiAgICAgICAgICA8L2Rpdj4KICAgICAgICBgOwogICAgICB9LAogICAgfSwKICBdOwp9Cg==', 'Z2V0RWxlbWVudFN0eWxlKCkgewogICByZXR1cm4gWwogICAgIHsKICAgICAgICJzZWxlY3RvciI6ICJub2RlIiwKICAgICAgICJzdHlsZSI6IHsKICAgICAgICAgImJhY2tncm91bmQtY29sb3IiOiAiI0ZGNTczMyIsCiAgICAgICAgICJ3aWR0aCI6IDUwLAogICAgICAgICAiaGVpZ2h0IjogNTAKICAgICAgIH0KICAgICB9LAogICAgIHsKICAgICAgICJzZWxlY3RvciI6ICIuaGlnaGxpZ2h0ZWQiLAogICAgICAgInN0eWxlIjogewogICAgICAgICAiYm9yZGVyLXdpZHRoIjogIjNweCIsCiAgICAgICAgICJib3JkZXItY29sb3IiOiAiIzI4OTFlMiIKICAgICAgIH0KICAgICB9LAogICAgIHsKICAgICAgICJzZWxlY3RvciI6ICJlZGdlIiwKICAgICAgICJzdHlsZSI6IHsKICAgICAgICAgIndpZHRoIjogMiwKICAgICAgICAgImZvbnQtc2l6ZSI6IDEyLAogICAgICAgICAidGFyZ2V0LWFycm93LXNoYXBlIjogInRyaWFuZ2xlIiwKICAgICAgICAgImxhYmVsIjogImRhdGEobGFiZWwpIiwKICAgICAgICAgInRleHQtdmFsaWduIjogInRvcCIsCiAgICAgICAgICJ0ZXh0LWhhbGlnbiI6ICJjZW50ZXIiLAogICAgICAgICAiY3VydmUtc3R5bGUiOiAiYmV6aWVyIgogICAgICAgfQogICAgIH0KICAgXTsKfQ==', 'Risk', 1, 4),
('a548027a-0de4-4c51-a51e-b3a884a4522e', NULL, NULL, NULL, NULL, 'Z2V0Tm9kZUh0bWxMYWJlbCgpIHsKICByZXR1cm4gWwogICAgewogICAgICBxdWVyeTogJ25vZGUnLAogICAgICBoYWxpZ246ICdjZW50ZXInLAogICAgICB2YWxpZ246ICdjZW50ZXInLAogICAgICB0cGw6IChkYXRhKSA9PiB7CiAgICAgICAgY29uc3Qgbm9kZVByb3BzID0gZGF0YS5uZW80ak5vZGU/LnByb3BlcnRpZXM7CiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG5vZGVQcm9wcykgfHwgbm9kZVByb3BzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnOwoKICAgICAgICAvLyBNb3ZlIHRoZSAibmFtZSIgcHJvcGVydHkgdG8gdGhlIGZyb250IGlmIGl0IGV4aXN0cwogICAgICAgIGNvbnN0IHNvcnRlZFByb3BzID0gWy4uLm5vZGVQcm9wc10uc29ydCgoYSwgYikgPT4gewogICAgICAgICAgaWYgKGE/Lm5hbWUgPT09ICduYW1lJykgcmV0dXJuIC0xOwogICAgICAgICAgaWYgKGI/Lm5hbWUgPT09ICduYW1lJykgcmV0dXJuIDE7CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICB9KTsKCiAgICAgICAgY29uc3QgaHRtbENvbnRlbnQgPSBzb3J0ZWRQcm9wcwogICAgICAgICAgLm1hcCgocHJvcCkgPT4gewogICAgICAgICAgICBpZiAoIXByb3A/Lm5hbWUgfHwgcHJvcC52YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJyc7CiAgICAgICAgICAgIHJldHVybiBgPGRpdj48Yj4ke3Byb3AubmFtZX06PC9iPiAke3Byb3AudmFsdWV9PC9kaXY+YDsKICAgICAgICAgIH0pCiAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pCiAgICAgICAgICAuam9pbignJyk7CgogICAgICAgIHJldHVybiBgCiAgICAgICAgICA8ZGl2IHN0eWxlPSIKICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjkpOwogICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgICAgICAgIHBhZGRpbmc6IDRweDsKICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4OwogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMik7CiAgICAgICAgICAiPgogICAgICAgICAgICA8aSBjbGFzcz0iZmEtcmVndWxhciBmYS1jaXJjbGUtZG90IgogICAgICAgICAgICAgICBzdHlsZT0icG9zaXRpb246IGFic29sdXRlOyB0b3A6IDVweDsgbGVmdDogNXB4OyBjb2xvcjogIzMxNmE4YzsiPgogICAgICAgICAgICA8L2k+CiAgICAgICAgICAgICR7aHRtbENvbnRlbnR9CiAgICAgICAgICA8L2Rpdj4KICAgICAgICBgOwogICAgICB9LAogICAgfSwKICBdOwp9Cg==', 'Z2V0RWxlbWVudFN0eWxlKCkgewogICByZXR1cm4gWwogICAgIHsKICAgICAgICJzZWxlY3RvciI6ICJub2RlIiwKICAgICAgICJzdHlsZSI6IHsKICAgICAgICAgImJhY2tncm91bmQtY29sb3IiOiAiI0ZGNTczMyIsCiAgICAgICAgICJ3aWR0aCI6IDUwLAogICAgICAgICAiaGVpZ2h0IjogNTAKICAgICAgIH0KICAgICB9LAogICAgIHsKICAgICAgICJzZWxlY3RvciI6ICIuaGlnaGxpZ2h0ZWQiLAogICAgICAgInN0eWxlIjogewogICAgICAgICAiYm9yZGVyLXdpZHRoIjogIjNweCIsCiAgICAgICAgICJib3JkZXItY29sb3IiOiAiIzI4OTFlMiIKICAgICAgIH0KICAgICB9LAogICAgIHsKICAgICAgICJzZWxlY3RvciI6ICJlZGdlIiwKICAgICAgICJzdHlsZSI6IHsKICAgICAgICAgIndpZHRoIjogMiwKICAgICAgICAgImZvbnQtc2l6ZSI6IDEyLAogICAgICAgICAidGFyZ2V0LWFycm93LXNoYXBlIjogInRyaWFuZ2xlIiwKICAgICAgICAgImxhYmVsIjogImRhdGEobGFiZWwpIiwKICAgICAgICAgInRleHQtdmFsaWduIjogInRvcCIsCiAgICAgICAgICJ0ZXh0LWhhbGlnbiI6ICJjZW50ZXIiLAogICAgICAgICAiY3VydmUtc3R5bGUiOiAiYmV6aWVyIiwKICAgICAgICAgInRleHQtYmFja2dyb3VuZC1jb2xvciI6ICIjZmZmIiwKICAgICAgICAgInRleHQtYmFja2dyb3VuZC1vcGFjaXR5IjogMSwKICAgICAgICAgInRleHQtYmFja2dyb3VuZC1wYWRkaW5nIjogIjJweCIsCiAgICAgICAgICJ0ZXh0LXJvdGF0aW9uIjogImF1dG9yb3RhdGUiLAogICAgICAgfQogICAgIH0KICAgXTsKfQ==', 'All Properties', 0, 1),
('af29d90e-9f88-4b21-a0df-4fabacfd385f', NULL, NULL, NULL, NULL, 'Z2V0Tm9kZUh0bWxMYWJlbCgpIHsKICAgcmV0dXJuIFsKICAgICB7CiAgICAgICBxdWVyeTogJ25vZGUnLAogICAgICAgaGFsaWduOiAnY2VudGVyJywKICAgICAgIHZhbGlnbjogJ2NlbnRlcicsCiAgICAgICB0cGw6IChkYXRhKSA9PiB7CgogICAgICAgICAgY29uc3Qgbm9kZVByb3BzID0gZGF0YS5uZW80ak5vZGUgJiYgZGF0YS5uZW80ak5vZGUucHJvcGVydGllczsKICAgICAgICAgIGlmICghbm9kZVByb3BzIHx8ICFBcnJheS5pc0FycmF5KG5vZGVQcm9wcykpIHsKICAgICAgICAgICAgcmV0dXJuICcnOwogICAgICAgICAgfQoKICAgICAgICAgIGNvbnN0IGltYWdlSHRtbENvbnRlbnQgPSBub2RlUHJvcHMKICAgICAgICAgICAgLmZpbHRlcigocHJvcCkgPT4gcHJvcC5uYW1lID09PSAnbmdzb2NJbWFnZScgJiYgcHJvcC52YWx1ZSkKICAgICAgICAgICAgLm1hcCgocHJvcCkgPT4gewogICAgICAgICAgICAgIGlmICghcHJvcCB8fCAhcHJvcC5uYW1lIHx8IHByb3AudmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuICcnOwogICAgICAgICAgICAgIHJldHVybiBgCiAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgIDxpbWcgc3JjPSJodHRwczovL25nLXNvYy5ldXJvZHluLmNvbS9hcGkvZ3JhcGgvaW1hZ2VzLyR7cHJvcC52YWx1ZX0iIAogICAgICAgICAgICAgICAgICAgICBhbHQ9IiR7cHJvcC52YWx1ZX0iCiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPSJtYXgtd2lkdGg6MzBweDsgYm9yZGVyLXJhZGl1czo0cHg7Ii8+CiAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIGAKICAgICAgICAgICAgfSkKICAgICAgICAgICAgLmZpbHRlcigobGluZSkgPT4gbGluZSAhPT0gJycpCiAgICAgICAgICAgIC5qb2luKCcnKTsKCiAgICAgICAgICBjb25zdCBuYW1lSHRtbENvbnRlbnQgPSBub2RlUHJvcHMKICAgICAgICAgICAgLmZpbHRlcigocHJvcCkgPT4gcHJvcC5uYW1lID09PSAnbmFtZScgJiYgcHJvcC52YWx1ZSkKICAgICAgICAgICAgLm1hcCgocHJvcCkgPT4gewogICAgICAgICAgICAgIGlmICghcHJvcCB8fCAhcHJvcC5uYW1lIHx8IHByb3AudmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuICcnOwogICAgICAgICAgICAgIHJldHVybiBgPGRpdj48Yj5OYW1lOjwvYj4gJHtwcm9wLnZhbHVlfTwvZGl2PmAKICAgICAgICAgICAgfSkKICAgICAgICAgICAgLmZpbHRlcigobGluZSkgPT4gbGluZSAhPT0gJycpCiAgICAgICAgICAgIC5qb2luKCcnKTsKCiAgICAgICAgICBjb25zdCBjcGVIdG1sQ29udGVudCA9IG5vZGVQcm9wcwogICAgICAgICAgICAuZmlsdGVyKChwcm9wKSA9PiBwcm9wLm5hbWUgPT09ICdDUEUnICYmIHByb3AudmFsdWUpCiAgICAgICAgICAgIC5tYXAoKHByb3ApID0+IHsKICAgICAgICAgICAgICBpZiAoIXByb3AgfHwgIXByb3AubmFtZSB8fCBwcm9wLnZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiAnJzsKICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+PGI+Q3BlOjwvYj4gJHtwcm9wLnZhbHVlfTwvZGl2PmAKICAgICAgICAgICAgfSkKICAgICAgICAgICAgLmZpbHRlcigobGluZSkgPT4gbGluZSAhPT0gJycpCiAgICAgICAgICAgIC5qb2luKCcnKTsKCiAgICAgICAgY29uc3QgaHRtbENvbnRlbnQgPSAgaW1hZ2VIdG1sQ29udGVudCArIG5hbWVIdG1sQ29udGVudCArIGNwZUh0bWxDb250ZW50IDsKCiAgICAgICAgIHJldHVybiBgCiAgICAgICAgICAgPGRpdiBzdHlsZT0iCiAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7CiAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7CiAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7CiAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgICBtYXgtd2lkdGg6IDEyMHB4OwogICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4yKTsKICAgICAgICAgICAiPgogICAgICAgICAgICAgJHtodG1sQ29udGVudH0KICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgYDsKICAgICAgIH0KICAgICB9CiAgIF07Cn0=', 'Z2V0RWxlbWVudFN0eWxlKCkgewogICByZXR1cm4gWwogICAgIHsKICAgICAgICJzZWxlY3RvciI6ICJub2RlIiwKICAgICAgICJzdHlsZSI6IHsKICAgICAgICAgImJhY2tncm91bmQtY29sb3IiOiAiI0ZGNTczMyIsCiAgICAgICAgICJ3aWR0aCI6IDUwLAogICAgICAgICAiaGVpZ2h0IjogNTAKICAgICAgIH0KICAgICB9LAogICAgIHsKICAgICAgICJzZWxlY3RvciI6ICIuaGlnaGxpZ2h0ZWQiLAogICAgICAgInN0eWxlIjogewogICAgICAgICAiYm9yZGVyLXdpZHRoIjogIjNweCIsCiAgICAgICAgICJib3JkZXItY29sb3IiOiAiIzI4OTFlMiIKICAgICAgIH0KICAgICB9LAogICAgIHsKICAgICAgICJzZWxlY3RvciI6ICJlZGdlIiwKICAgICAgICJzdHlsZSI6IHsKICAgICAgICAgIndpZHRoIjogMiwKICAgICAgICAgImZvbnQtc2l6ZSI6IDEyLAogICAgICAgICAidGFyZ2V0LWFycm93LXNoYXBlIjogInRyaWFuZ2xlIiwKICAgICAgICAgImxhYmVsIjogImRhdGEobGFiZWwpIiwKICAgICAgICAgInRleHQtdmFsaWduIjogInRvcCIsCiAgICAgICAgICJ0ZXh0LWhhbGlnbiI6ICJjZW50ZXIiLAogICAgICAgICAiY3VydmUtc3R5bGUiOiAiYmV6aWVyIgogICAgICAgfQogICAgIH0KICAgXTsKfQ==', 'Name Image Cpe', 0, 0),
('d076f287-0e71-48ce-8a5e-3f80c20abb73', NULL, NULL, NULL, NULL, 'Z2V0Tm9kZUh0bWxMYWJlbCgpIHsKICAgcmV0dXJuIFsKICAgICB7CiAgICAgICBxdWVyeTogJ25vZGUnLAogICAgICAgaGFsaWduOiAnY2VudGVyJywKICAgICAgIHZhbGlnbjogJ2NlbnRlcicsCiAgICAgICB0cGw6IChkYXRhKSA9PiB7CgogICAgICAgICAgY29uc3Qgbm9kZVByb3BzID0gZGF0YS5uZW80ak5vZGUgJiYgZGF0YS5uZW80ak5vZGUucHJvcGVydGllczsKICAgICAgICAgIGlmICghbm9kZVByb3BzIHx8ICFBcnJheS5pc0FycmF5KG5vZGVQcm9wcykpIHsKICAgICAgICAgICAgcmV0dXJuICcnOwogICAgICAgICAgfQoKICAgICAgICAgIGNvbnN0IG5hbWVIdG1sQ29udGVudCA9IG5vZGVQcm9wcwogICAgICAgICAgICAuZmlsdGVyKChwcm9wKSA9PiBwcm9wLm5hbWUgPT09ICduYW1lJyAmJiBwcm9wLnZhbHVlKQogICAgICAgICAgICAubWFwKChwcm9wKSA9PiB7CiAgICAgICAgICAgICAgaWYgKCFwcm9wIHx8ICFwcm9wLm5hbWUgfHwgcHJvcC52YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJyc7CiAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PiAke3Byb3AudmFsdWV9PC9kaXY+YAogICAgICAgICAgICB9KQogICAgICAgICAgICAuZmlsdGVyKChsaW5lKSA9PiBsaW5lICE9PSAnJykKICAgICAgICAgICAgLmpvaW4oJycpOwoKICAgICAgICBjb25zdCBodG1sQ29udGVudCA9IG5hbWVIdG1sQ29udGVudCA7CgogICAgICAgICByZXR1cm4gYAogICAgICAgICAgIDxkaXYgc3R5bGU9IgogICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjkpOwogICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4OwogICAgICAgICAgICAgcGFkZGluZzogNHB4OwogICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4OwogICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgICAgICAgICAgbWF4LXdpZHRoOiAxMjBweDsKICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMik7CiAgICAgICAgICAgIj4KICAgICAgICAgICAgICR7aHRtbENvbnRlbnR9CiAgICAgICAgICAgPC9kaXY+CiAgICAgICAgIGA7CiAgICAgICB9CiAgICAgfQogICBdOwp9', 'Z2V0RWxlbWVudFN0eWxlKCkgewogICByZXR1cm4gWwogICAgIHsKICAgICAgICJzZWxlY3RvciI6ICJub2RlIiwKICAgICAgICJzdHlsZSI6IHsKICAgICAgICAgImJhY2tncm91bmQtY29sb3IiOiAiI0ZGNTczMyIsCiAgICAgICAgICJ3aWR0aCI6IDUwLAogICAgICAgICAiaGVpZ2h0IjogNTAKICAgICAgIH0KICAgICB9LAogICAgIHsKICAgICAgICJzZWxlY3RvciI6ICIuaGlnaGxpZ2h0ZWQiLAogICAgICAgInN0eWxlIjogewogICAgICAgICAiYm9yZGVyLXdpZHRoIjogIjNweCIsCiAgICAgICAgICJib3JkZXItY29sb3IiOiAiIzI4OTFlMiIKICAgICAgIH0KICAgICB9LAogICAgIHsKICAgICAgICJzZWxlY3RvciI6ICJlZGdlIiwKICAgICAgICJzdHlsZSI6IHsKICAgICAgICAgIndpZHRoIjogMiwKICAgICAgICAgImZvbnQtc2l6ZSI6IDEyLAogICAgICAgICAidGFyZ2V0LWFycm93LXNoYXBlIjogInRyaWFuZ2xlIiwKICAgICAgICAgImxhYmVsIjogImRhdGEobGFiZWwpIiwKICAgICAgICAgInRleHQtdmFsaWduIjogInRvcCIsCiAgICAgICAgICJ0ZXh0LWhhbGlnbiI6ICJjZW50ZXIiLAogICAgICAgICAiY3VydmUtc3R5bGUiOiAiYmV6aWVyIgogICAgICAgfQogICAgIH0KICAgXTsKfQ==', 'Simple Name', 0, 2);

-- --------------------------------------------------------

--
-- Table structure for table `graph_templates`
--

CREATE TABLE `graph_templates` (
  `id` varchar(36) NOT NULL,
  `created_by` varchar(36) DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT NULL,
  `modified_by` varchar(36) DEFAULT NULL,
  `modified_on` timestamp NULL DEFAULT NULL,
  `node_html_label` text DEFAULT NULL,
  `elements_style` text DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `is_default` int(11) DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `refresh_token`
--

CREATE TABLE `refresh_token` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `session_id` varchar(64) NOT NULL,
  `user_id` varchar(64) NOT NULL,
  `token_hash` char(64) NOT NULL,
  `created_on` datetime NOT NULL,
  `expires_on` datetime NOT NULL,
  `revoked_on` datetime DEFAULT NULL,
  `replaced_by_hash` char(64) DEFAULT NULL,
  `user_agent` varchar(255) DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Dumping data for table `refresh_token`
--

INSERT INTO `refresh_token` (`id`, `session_id`, `user_id`, `token_hash`, `created_on`, `expires_on`, `revoked_on`, `replaced_by_hash`, `user_agent`, `ip_address`) VALUES
(24, '97ac1632145e4fbfb8b5e620a8b6eb3a48b48d4ae78debe3e8b1d0b3f3aaad74', '2e7f61ed-8d12-41eb-a35c-1b9afc39980f', '861b115afb695d5810d1235186bd1858ab6818766f27e7a4e409ff77ad32aa0e', '2026-01-27 15:48:06', '2026-02-26 17:48:06', NULL, NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', '::1'),
(25, 'b7d453244735eef5cea1c61c38fed87d74e911adc91d2506442d9c3942925b39', '2e7f61ed-8d12-41eb-a35c-1b9afc39980f', '1eddf19e13b520069eb3165b25260378f0cb54dd53cf23ba2d9f3d397c07f7e3', '2026-01-28 08:22:29', '2026-02-27 10:22:29', NULL, NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', '::1'),
(26, 'a68a65ddf596d4cdc254fb6c20b2346055a01cc9ebfe388dd7f773c448ea34e5', '2e7f61ed-8d12-41eb-a35c-1b9afc39980f', 'a7dff7893bdbc88df1174218e3df9022b9ad70ccec35d4fc28411ee963cff41e', '2026-01-29 08:45:44', '2026-02-28 10:45:44', NULL, NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', '::1'),
(27, '2f881599362db78732e5f914d58e1166735e69258d59dadebe8f237a959c7016', '2e7f61ed-8d12-41eb-a35c-1b9afc39980f', 'a88b7d1848d722598e91bddef3cc3dee69b76c317d18ad4e1d15c2cf32118fcc', '2026-01-29 09:58:12', '2026-02-28 11:58:12', NULL, NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', '::1'),
(28, '314d385fd7bdb033ef1a09493cf60802d5e91213c8e5d3a3528f826030cc0e09', '2e7f61ed-8d12-41eb-a35c-1b9afc39980f', '3028cbe4f648377c4737298aca71dff402ea247ff5005b4241a54fa880c27975', '2026-01-29 10:06:53', '2026-02-28 12:06:53', NULL, NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', '::1'),
(29, '0772ef2ccd35cb3996deeff9ba2a7e4ae7a18dc9b0c15c5818440f3b69120efc', '2e7f61ed-8d12-41eb-a35c-1b9afc39980f', '826a2a99e73f92b1be9fad5fdbe4c63085c22387c157fb50df2fde6ec82752ed', '2026-02-04 14:35:01', '2026-03-06 16:35:01', NULL, NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', '::1'),
(30, 'f052ace2227e46d7dc7b11916f50393697ed6d3c82f6889ce006c313db041b66', '2e7f61ed-8d12-41eb-a35c-1b9afc39980f', '52faee622a8824b5b5addcb840c1d0e8fab03f2f0c77bd204bf0b3f72a17ac18', '2026-02-06 16:08:29', '2026-03-08 18:08:29', NULL, NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', '::1'),
(31, '2199c3c670031ec7273afdb65c3381238c65a00d92493309c6ced5b6502f2a8e', '2e7f61ed-8d12-41eb-a35c-1b9afc39980f', 'f9aa37d8c29f6ae12e08365252aec4e9231d5c266e9acf9dc2a803a71eee8f90', '2026-02-09 08:34:56', '2026-03-11 10:34:56', NULL, NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', '::1');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` varchar(36) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_by` varchar(255) DEFAULT NULL,
  `modified_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `short_order` bigint(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `session`
--

CREATE TABLE `session` (
  `id` varchar(64) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `created_on` datetime NOT NULL,
  `expires_on` datetime NOT NULL,
  `revoked_on` datetime DEFAULT NULL,
  `user_agent` varchar(255) DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Dumping data for table `session`
--

INSERT INTO `session` (`id`, `user_id`, `created_on`, `expires_on`, `revoked_on`, `user_agent`, `ip_address`) VALUES
('0bf931eec5ee6bf5171ed3ee7e5d4e30d21fc6c007cc749189549d6fceb8f072', '2e7f61ed-8d12-41eb-a35c-1b9afc39980f', '2026-01-27 15:40:32', '2026-02-26 17:40:32', NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', '::1'),
('c99619d0809fae2c63898ca23ed2bc7854daf192941f33476c9befc433a326fa', '2e7f61ed-8d12-41eb-a35c-1b9afc39980f', '2026-01-27 15:46:30', '2026-02-26 17:46:30', NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', '::1'),
('97ac1632145e4fbfb8b5e620a8b6eb3a48b48d4ae78debe3e8b1d0b3f3aaad74', '2e7f61ed-8d12-41eb-a35c-1b9afc39980f', '2026-01-27 15:48:06', '2026-02-26 17:48:06', NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', '::1'),
('b7d453244735eef5cea1c61c38fed87d74e911adc91d2506442d9c3942925b39', '2e7f61ed-8d12-41eb-a35c-1b9afc39980f', '2026-01-28 08:22:29', '2026-02-27 10:22:29', NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', '::1'),
('a68a65ddf596d4cdc254fb6c20b2346055a01cc9ebfe388dd7f773c448ea34e5', '2e7f61ed-8d12-41eb-a35c-1b9afc39980f', '2026-01-29 08:45:44', '2026-02-28 10:45:44', NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', '::1'),
('2f881599362db78732e5f914d58e1166735e69258d59dadebe8f237a959c7016', '2e7f61ed-8d12-41eb-a35c-1b9afc39980f', '2026-01-29 09:58:12', '2026-02-28 11:58:12', NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', '::1'),
('314d385fd7bdb033ef1a09493cf60802d5e91213c8e5d3a3528f826030cc0e09', '2e7f61ed-8d12-41eb-a35c-1b9afc39980f', '2026-01-29 10:06:53', '2026-02-28 12:06:53', NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', '::1'),
('0772ef2ccd35cb3996deeff9ba2a7e4ae7a18dc9b0c15c5818440f3b69120efc', '2e7f61ed-8d12-41eb-a35c-1b9afc39980f', '2026-02-04 14:35:01', '2026-03-06 16:35:01', NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', '::1'),
('f052ace2227e46d7dc7b11916f50393697ed6d3c82f6889ce006c313db041b66', '2e7f61ed-8d12-41eb-a35c-1b9afc39980f', '2026-02-06 16:08:29', '2026-03-08 18:08:29', NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', '::1'),
('2199c3c670031ec7273afdb65c3381238c65a00d92493309c6ced5b6502f2a8e', '2e7f61ed-8d12-41eb-a35c-1b9afc39980f', '2026-02-09 08:34:56', '2026-03-11 10:34:56', NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', '::1');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NOT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_by` varchar(255) DEFAULT NULL,
  `modified_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `short_order` bigint(20) DEFAULT NULL,
  `dateformat` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `enabled` bit(1) DEFAULT b'0',
  `login_nav_command` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `provider_user_id` varchar(255) DEFAULT NULL,
  `search_nav_command` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `current_language_id` varchar(36) DEFAULT NULL,
  `default_language_id` varchar(36) DEFAULT NULL,
  `header_menu_id` varchar(36) DEFAULT NULL,
  `sidebar_menu_id` varchar(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `created_by`, `created_on`, `modified_by`, `modified_on`, `short_order`, `dateformat`, `email`, `enabled`, `login_nav_command`, `password`, `provider`, `provider_user_id`, `search_nav_command`, `status`, `username`, `current_language_id`, `default_language_id`, `header_menu_id`, `sidebar_menu_id`) VALUES
('03122555-063f-4aa8-9197-cd06017f7319', '871fab87-38ce-4b76-ade8-2ec7bc24b477', '2022-06-29 09:04:22', '871fab87-38ce-4b76-ade8-2ec7bc24b477', '2024-10-15 07:28:15', NULL, NULL, 'sysadmin@onenet.gr', b'1', 'STATICPAGE[NAME:dashboard,LOCATE:(ID=b9b1394b-425c-4c33-a132-e28c23df995a)]', '$2a$10$COQnMJJNiSLUBrHegCSy7evnWnrqF9o09n5wW72c3SINIZesUgiJ6', NULL, NULL, 'POPUPPAGE[NAME:search,LOCATE:(ID=1),SEARCH-DEFAULT:#SEARCH-VALUE#,FOCUS:search-field-box]', 'enabled', 'sysadmin', '2', '2', 'dcd336a1-f74f-4410-bbee-6f91d5dd2e83', '99748e84-f860-4f0b-886a-e5b33fa5c45d'),
('2e7f61ed-8d12-41eb-a35c-1b9afc39980f', '871fab87-38ce-4b76-ade8-2ec7bc24b477', '2026-01-27 15:30:51', '871fab87-38ce-4b76-ade8-2ec7bc24b477', '2026-01-27 15:32:54', NULL, NULL, 'test', b'1', '{\"COMMAND-TYPE\":\"PAGE\",\"NAME\":\"default\"}', '$2a$10$CWrE.dCB1xkzTzct5sgduObj2AXgaZfwEUdKBsOl.iWSIBFQksxuy', NULL, NULL, NULL, 'enabled', 'test', NULL, NULL, 'db0f0474-dbdf-4a5f-95e7-e45a90299fb0', '9fba36f7-c88f-429c-b357-a1154b0c14a4'),
('871fab87-38ce-4b76-ade8-2ec7bc24b477', NULL, '2022-05-31 12:22:32', '871fab87-38ce-4b76-ade8-2ec7bc24b477', '2024-04-29 13:05:27', NULL, NULL, 'admin@sofia.com', b'1', 'STATICPAGE[NAME:user-list,TITLE:Users]', '$2a$10$k55/s0PYMIAOnnvStpFYvOPAzWMbNWA2u9sebrKSj5LHjVHLA4TcG', 'local', NULL, NULL, 'enabled', 'admin', NULL, NULL, '558aa883-d159-4225-a24c-fc10442ad3bb', 'a70ee3ab-22ea-4f9c-81a6-55dda04a8d9d');

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE `user_role` (
  `user_id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci DEFAULT NULL,
  `role_id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci DEFAULT NULL,
  `id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `graph_template`
--
ALTER TABLE `graph_template`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `graph_templates`
--
ALTER TABLE `graph_templates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `refresh_token`
--
ALTER TABLE `refresh_token`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKa3y2o61bcai1rkyo1o8baxy4e` (`current_language_id`),
  ADD KEY `FKdy13aw031lpqm6d14aa0iifse` (`default_language_id`),
  ADD KEY `FKpg1ggg4lyv3wgwv55ane8h39o` (`sidebar_menu_id`),
  ADD KEY `FKsv3cmohxnau2ncgaj0k6wy51s` (`header_menu_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `refresh_token`
--
ALTER TABLE `refresh_token`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
