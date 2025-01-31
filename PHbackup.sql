-- MySQL dump 10.13  Distrib 8.0.35, for Win64 (x86_64)
--
-- Host: localhost    Database: pohub
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `board`
--

DROP TABLE IF EXISTS `board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board` (
  `board_id` int NOT NULL AUTO_INCREMENT,
  `writter` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `board_type` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `cnt` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `title` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`board_id`),
  KEY `writter` (`writter`),
  CONSTRAINT `board_ibfk_1` FOREIGN KEY (`writter`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board`
--

LOCK TABLES `board` WRITE;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` VALUES (1,'testuser','freeBoard','2024-01-08 11:37:49','여기는 이제부터 캬루가 지배한다','테스트 게시물 1'),(2,'testuser','freeBoard','2024-01-08 11:37:51','카링입니다','테스트 게시물 2'),(3,'testuser','freeBoard','2024-01-08 11:39:53','페이커 카페가 열린 건 아니고요\n\n그냥 카페에서 페이커 생각했습니다\n\n카페에 간 건 아니고요\n\n그냥 집에서 커피를 마셨습니다\n\n사실 커피도 안마셨습니다\n\n그냥 페이커인 상태입니다','페이커 카페 다녀왔습니다.'),(4,'testuser','freeBoard','2024-01-08 11:49:33','로리조아','Loli ❤️ '),(5,'testuser','freeBoard','2024-01-08 12:10:53','<font size=7 color=\"red\">놀랄 만큼 쉽고 믿기 힘들 만큼 재미있습니다</font>','하스스톤'),(6,'testuser','freeBoard','2024-01-08 12:42:08','잉여신','코노스바'),(7,'testuser','freeBoard','2024-01-08 12:54:05','테스트용입니다','gif webp 테스트'),(8,'testuser','freeBoard','2024-01-09 08:43:24','테스트','업로드 파일 테스트'),(10,'testuser','freeBoard','2024-01-09 14:01:15','ㅈㄱㄴ','오늘의 짤'),(11,'testuser','freeBoard','2024-01-09 14:25:12','asdf','asdf'),(12,'testuser','freeBoard','2024-01-10 09:27:33','ㅈㄱㄴ','뻘글1'),(13,'testuser','freeBoard','2024-01-13 16:20:42','ㅈㄱㄴ','오늘의 짤'),(14,'Meyung','freeBoard','2024-01-15 17:00:11','asdf','asdf'),(15,'Meyung','freeBoard','2024-01-15 17:05:11','asdf','asdf'),(16,'pobijunior','freeBoard','2024-01-15 17:06:40','ㅈㄱㄴ','오늘의 짤'),(17,'Sexjuni','freeBoard','2024-01-15 17:18:52','준희가 강간하려던걸 피했다 다행이 오늘 임신은 피했다','오늘의 일기'),(18,'Sexjuni','freeBoard','2024-01-15 17:24:28','검색 기능 추가해달라\n사진 좆만한거 클릭하면 확대해 달라\n동영상 업로드하면 재생하게 해달라\n로그아웃 버튼 만들어달라\n폰트 개 좆구리다 이쁜걸로 해 달라\n가입할 때 이메일 오타나면 지울 수 있게 해 달라\n\n\n응애 \'해줘\' ','운영자는 봐라'),(19,'donggil','freeBoard','2024-01-17 07:45:16','댓글기능 ㄱㄱ','요청 사항'),(20,'pobijunior','freeBoard','2024-01-19 13:30:59','ㅈㄱㄴ','오늘의 짤'),(21,'testuser','fileShare','2024-01-23 14:53:28','hello world\n','kobuita'),(22,'Meyung','freeBoard','2024-01-25 14:19:57','asdf','asdf'),(23,'Meyung','freeBoard','2024-01-25 14:20:01','fdas','asdf'),(24,'Meyung','freeBoard','2024-01-25 14:20:07','zxcv','asdf'),(25,'teens589','freeBoard','2024-02-01 16:51:00','핀란드식 아침','싱글벙글'),(26,'teens589','freeBoard','2024-02-01 17:02:21','ㄷㄷ','고인모독 레전드..'),(27,'teens589','fileShare','2024-02-01 17:04:27','낭낭하게','저장소 자료 용량 올려주세요');
/*!40000 ALTER TABLE `board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `file`
--

DROP TABLE IF EXISTS `file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `file` (
  `file_id` int NOT NULL AUTO_INCREMENT,
  `board_id` int DEFAULT NULL,
  `file_dir` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file_type` enum('img','others','video') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`file_id`),
  KEY `board_id` (`board_id`),
  CONSTRAINT `file_ibfk_1` FOREIGN KEY (`board_id`) REFERENCES `board` (`board_id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file`
--

LOCK TABLES `file` WRITE;
/*!40000 ALTER TABLE `file` DISABLE KEYS */;
INSERT INTO `file` VALUES (53,25,'http://www.pobijunior.com/img/1706806260854_íëëììì¹¨1.jpg','img','1706806260854_íëëììì¹¨1.jpg'),(54,25,'http://www.pobijunior.com/img/1706806260855_íëëììì¹¨2.jpg','img','1706806260855_íëëììì¹¨2.jpg'),(55,26,'http://www.pobijunior.com/img/1706806941871_êµ¿ë¤ì´ë¸.jpg','img','1706806941871_êµ¿ë¤ì´ë¸.jpg'),(56,26,'http://www.pobijunior.com/img/1706806941871_ëë.webp','img','1706806941871_ëë.webp'),(57,27,'http://www.pobijunior.com/others/1706807067685_210601_ë¤ëíë°©.zip','others','1706807067685_210601_ë¤ëíë°©.zip'),(58,2,'http://www.pobijunior.com/img/test.png','img','test.png'),(59,2,'http://www.pobijunior.com/img/logo192.png','img','logo192.png'),(60,1,'http://www.pobijunior.com/img/manukyaru.png','img','manukyaru.png'),(61,1,'http://www.pobijunior.com/img/1583773181.jpg','img','1583773181.jpg'),(62,4,'http://www.pobijunior.com/img/1704714573876.jpg','img','1704714573876.jpg'),(63,5,'http://www.pobijunior.com/img/1704715853060.webp','img','1704715853060.webp'),(64,6,'http://www.pobijunior.com/img/1704717728547.png','img','1704717728547.png'),(65,7,'http://www.pobijunior.com/img/1704718445490.gif','img','1704718445490.gif'),(66,7,'http://www.pobijunior.com/img/1704718445501.webp','img','1704718445501.webp'),(67,8,'http://www.pobijunior.com/img/1704789804303.gif','img','1704789804303.gif'),(68,10,'http://www.pobijunior.com/img/1704808875144_20240109_192752.jpg','img','1704808875144_20240109_192752.jpg'),(69,10,'http://www.pobijunior.com/img/1704808875145_20240109_192744.jpg','img','1704808875145_20240109_192744.jpg'),(70,10,'http://www.pobijunior.com/img/1704808875148_20240109_192655.jpg','img','1704808875148_20240109_192655.jpg'),(71,10,'http://www.pobijunior.com/img/1704808875150_20240109_192603.jpg','img','1704808875150_20240109_192603.jpg'),(72,10,'http://www.pobijunior.com/img/1704808875155_20240109_165725.jpg','img','1704808875155_20240109_165725.jpg'),(73,12,'http://www.pobijunior.com/img/1704878853715_ì´ì ëë©´ ìí¤ì ë¤.jpg','img','1704878853715_ì´ì ëë©´ ìí¤ì ë¤.jpg'),(74,13,'http://www.pobijunior.com/img/1705162842334_20240111_171733.jpg','img','1705162842334_20240111_171733.jpg'),(75,13,'http://www.pobijunior.com/img/1705162842340_20240110_132841.jpg','img','1705162842340_20240110_132841.jpg'),(76,13,'http://www.pobijunior.com/img/1705162842338_20240110_164149.jpg','img','1705162842338_20240110_164149.jpg'),(77,13,'http://www.pobijunior.com/img/1705162842340_20240110_132816.jpg','img','1705162842340_20240110_132816.jpg'),(78,13,'http://www.pobijunior.com/img/1705162842344_20240110_022637.jpg','img','1705162842344_20240110_022637.jpg'),(79,15,'http://www.pobijunior.com/img/1705338311898_VRChat_2023-12-15_23-24-45.456_1920x1080.png','img','1705338311898_VRChat_2023-12-15_23-24-45.456_1920x1080.png'),(80,16,'http://www.pobijunior.com/img/1705338400810_20240115_214018.jpg','img','1705338400810_20240115_214018.jpg'),(81,16,'http://www.pobijunior.com/img/1705338400813_20240110_164510.jpg','img','1705338400813_20240110_164510.jpg'),(82,16,'http://www.pobijunior.com/img/1705338400811_20240115_214304.jpg','img','1705338400811_20240115_214304.jpg'),(83,16,'http://www.pobijunior.com/img/1705338400814_20240110_022546.jpg','img','1705338400814_20240110_022546.jpg'),(84,16,'http://www.pobijunior.com/img/1705338400813_20240110_132734.jpg','img','1705338400813_20240110_132734.jpg'),(85,20,'http://www.pobijunior.com/img/1705671059325_20240119_180642.jpg','img','1705671059325_20240119_180642.jpg'),(86,20,'http://www.pobijunior.com/img/1705671059326_image-27.png','img','1705671059326_image-27.png'),(87,20,'http://www.pobijunior.com/img/1705671059332_gov-20240116-193347-002.png','img','1705671059332_gov-20240116-193347-002.png'),(88,20,'http://www.pobijunior.com/img/1705671059334_20240116_130002.jpg','img','1705671059334_20240116_130002.jpg'),(89,20,'http://www.pobijunior.com/img/1705671059335_20240115_204301.jpg','img','1705671059335_20240115_204301.jpg');
/*!40000 ALTER TABLE `file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(255) NOT NULL,
  `expires` bigint DEFAULT NULL,
  `data` text,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('0C318VX2GgIWa6q1c0QtbnSPR-WB0yjw',1706822763,'{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2024-02-01T21:26:02.977Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"lax\"},\"userId\":\"pobijunior\",\"isLoggedIn\":true}'),('wABAbkDAF1JnANoVyACaQcelQ-AfSzc0',1706822989,'{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2024-02-01T21:29:20.735Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"lax\"},\"userId\":\"pobijunior\",\"isLoggedIn\":true}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pw` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `user_role` enum('user','admin') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'testuser','hello','2024-01-08 11:37:47','user','test@gmail.com'),(2,'pobijunior','whwnsgml1','2024-01-15 16:48:29','admin','pobijunior@naver.com'),(4,'Meyung','asdf','2024-01-15 16:59:32','user','minjun7545@naver.com'),(5,'Sexjuni','Sexjuni123','2024-01-15 17:12:36','user','tmdwns4062@gmail.com'),(6,'donggil','1234','2024-01-17 07:41:55','user','khdg1202@naver.com'),(7,'teens589','andyandy00880077','2024-02-01 10:52:10','user','teens589@naver.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-02  5:32:33
