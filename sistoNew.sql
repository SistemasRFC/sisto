-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: localhost    Database: sisto
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.18.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `en_cliente`
--

DROP TABLE IF EXISTS `en_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `en_cliente` (
  `cod_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nme_cliente` varchar(100) NOT NULL,
  `nro_telefone` varchar(15) DEFAULT NULL,
  `txt_email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`cod_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `en_cliente`
--

LOCK TABLES `en_cliente` WRITE;
/*!40000 ALTER TABLE `en_cliente` DISABLE KEYS */;
INSERT INTO `en_cliente` VALUES (1,'Fernanda','985565245','');
/*!40000 ALTER TABLE `en_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `en_cor`
--

DROP TABLE IF EXISTS `en_cor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `en_cor` (
  `cod_cor` int(11) NOT NULL AUTO_INCREMENT,
  `dsc_cor` varchar(100) DEFAULT NULL,
  `ind_ativo` char(1) DEFAULT NULL,
  PRIMARY KEY (`cod_cor`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `en_cor`
--

LOCK TABLES `en_cor` WRITE;
/*!40000 ALTER TABLE `en_cor` DISABLE KEYS */;
INSERT INTO `en_cor` VALUES (1,'Azul','S'),(2,'Amarelo','S'),(3,'Vermelho','S'),(4,'Preto','S'),(5,'Branco','S');
/*!40000 ALTER TABLE `en_cor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `en_produto`
--

DROP TABLE IF EXISTS `en_produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `en_produto` (
  `cod_produto` int(11) NOT NULL AUTO_INCREMENT,
  `dsc_produto` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`cod_produto`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `en_produto`
--

LOCK TABLES `en_produto` WRITE;
/*!40000 ALTER TABLE `en_produto` DISABLE KEYS */;
INSERT INTO `en_produto` VALUES (1,'Toalha de mesa de seda'),(3,'Toalha de mesa de algodÃ£o'),(5,'Toalha de mesa de cetim'),(14,'Mesa'),(15,'Cadeira');
/*!40000 ALTER TABLE `en_produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `en_situacao`
--

DROP TABLE IF EXISTS `en_situacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `en_situacao` (
  `COD_SITUACAO` int(10) NOT NULL AUTO_INCREMENT,
  `DSC_SITUACAO` varchar(50) NOT NULL,
  PRIMARY KEY (`COD_SITUACAO`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `en_situacao`
--

LOCK TABLES `en_situacao` WRITE;
/*!40000 ALTER TABLE `en_situacao` DISABLE KEYS */;
INSERT INTO `en_situacao` VALUES (6,'Finalizado'),(7,'Cancelado'),(8,'Agendado');
/*!40000 ALTER TABLE `en_situacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `re_produto_cor`
--

DROP TABLE IF EXISTS `re_produto_cor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `re_produto_cor` (
  `cod_produto_cor` int(11) NOT NULL AUTO_INCREMENT,
  `cod_produto` int(11) NOT NULL,
  `cod_cor` int(11) NOT NULL,
  `vlr_produto_cor` float DEFAULT NULL,
  `qtd_produto_cor` int(11) DEFAULT NULL,
  PRIMARY KEY (`cod_produto_cor`),
  KEY `re_produto_cor_en_produto_FK` (`cod_produto`),
  KEY `re_produto_cor_en_cores_FK` (`cod_cor`),
  CONSTRAINT `re_produto_cor_en_cores_FK` FOREIGN KEY (`cod_cor`) REFERENCES `en_cor` (`cod_cor`),
  CONSTRAINT `re_produto_cor_en_produto_FK` FOREIGN KEY (`cod_produto`) REFERENCES `en_produto` (`cod_produto`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `re_produto_cor`
--

LOCK TABLES `re_produto_cor` WRITE;
/*!40000 ALTER TABLE `re_produto_cor` DISABLE KEYS */;
INSERT INTO `re_produto_cor` VALUES (13,5,3,0,0),(14,5,4,0,0),(15,5,5,20,60),(57,3,1,5,50),(59,3,2,5,50),(60,3,5,10,50),(63,3,4,5,50),(64,3,3,5,50),(65,1,1,10,50),(68,5,1,10,60),(69,1,2,10,50),(70,1,3,10,50),(71,1,4,10,50),(72,1,5,20,50),(73,5,2,10,50),(74,14,5,4,100),(75,15,5,0.5,400);
/*!40000 ALTER TABLE `re_produto_cor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `re_venda`
--

DROP TABLE IF EXISTS `re_venda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `re_venda` (
  `cod_venda` int(11) NOT NULL AUTO_INCREMENT,
  `dta_venda` datetime NOT NULL,
  `cod_usuario` int(11) DEFAULT NULL,
  `cod_cliente` int(11) DEFAULT NULL,
  `cod_situacao` int(11) DEFAULT NULL,
  PRIMARY KEY (`cod_venda`),
  KEY `re_venda_en_cliente_FK` (`cod_cliente`),
  KEY `re_venda_en_situacao_FK` (`cod_situacao`),
  CONSTRAINT `re_venda_en_cliente_FK` FOREIGN KEY (`cod_cliente`) REFERENCES `en_cliente` (`cod_cliente`),
  CONSTRAINT `re_venda_en_situacao_FK` FOREIGN KEY (`cod_situacao`) REFERENCES `en_situacao` (`COD_SITUACAO`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `re_venda`
--

LOCK TABLES `re_venda` WRITE;
/*!40000 ALTER TABLE `re_venda` DISABLE KEYS */;
INSERT INTO `re_venda` VALUES (1,'2018-06-08 00:00:00',1,1,8),(2,'2018-06-29 00:00:00',1,1,8),(3,'2018-06-28 00:00:00',1,1,8),(4,'2018-06-28 00:00:00',1,1,8),(5,'2018-06-28 00:00:00',1,1,8),(6,'2018-06-28 00:00:00',1,1,8),(7,'2018-06-28 00:00:00',1,1,8),(8,'2018-06-28 00:00:00',1,1,8),(9,'2020-01-06 00:00:00',8,1,8),(10,'2020-01-15 00:00:00',8,1,8);
/*!40000 ALTER TABLE `re_venda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `re_venda_produto`
--

DROP TABLE IF EXISTS `re_venda_produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `re_venda_produto` (
  `cod_venda_produto` int(11) NOT NULL AUTO_INCREMENT,
  `cod_venda` int(11) NOT NULL,
  `cod_produto_cor` int(11) NOT NULL,
  `qtd_venda` int(11) NOT NULL,
  `vlr_venda` float DEFAULT NULL,
  PRIMARY KEY (`cod_venda_produto`),
  KEY `re_venda_produto_re_produto_cor_FK` (`cod_produto_cor`),
  CONSTRAINT `re_venda_produto_re_produto_cor_FK` FOREIGN KEY (`cod_produto_cor`) REFERENCES `re_produto_cor` (`cod_produto_cor`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `re_venda_produto`
--

LOCK TABLES `re_venda_produto` WRITE;
/*!40000 ALTER TABLE `re_venda_produto` DISABLE KEYS */;
INSERT INTO `re_venda_produto` VALUES (1,1,70,30,300),(2,6,71,50,500),(3,7,71,50,500),(4,8,71,50,500),(5,1,59,20,100),(6,9,59,20,100),(7,9,60,20,200),(8,10,75,10,5),(9,10,74,2,8);
/*!40000 ALTER TABLE `re_venda_produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `se_menu`
--

DROP TABLE IF EXISTS `se_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `se_menu` (
  `COD_MENU` int(11) NOT NULL DEFAULT '0',
  `DSC_MENU` varchar(100) DEFAULT NULL,
  `NME_CONTROLLER` varchar(1000) DEFAULT NULL,
  `IND_ATIVO` char(1) DEFAULT NULL,
  `COD_MENU_PAI` int(11) DEFAULT NULL,
  `NME_METHOD` varchar(50) DEFAULT NULL,
  `DSC_CAMINHO_IMAGEM` varchar(1000) DEFAULT NULL,
  `IND_VISIBLE` char(1) DEFAULT 'N',
  PRIMARY KEY (`COD_MENU`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `se_menu`
--

LOCK TABLES `se_menu` WRITE;
/*!40000 ALTER TABLE `se_menu` DISABLE KEYS */;
INSERT INTO `se_menu` VALUES (1,'Restrito','','S',0,'','','S'),(2,'Menu','Menu','S',1,'ChamaView',NULL,'S'),(3,'PermissÃ£o de Menu','Permissao','S',1,'ChamaView','','S'),(4,'Menu Principal','MenuPrincipal','S',0,'ChamaView',NULL,'N'),(5,'Verificar SessÃ£o','MenuPrincipal','S',0,'VerificaSessao','','N'),(6,'Carregar Atalhos','MenuPrincipal','S',0,'CarregaAtalhos',NULL,'N'),(7,'Carregar Menu','MenuPrincipal','S',0,'CarregaMenu',NULL,'N'),(8,'Listar Menu','Menu','S',0,'ListarMenusGrid',NULL,'N'),(9,'Atualiza Menu','Menu','S',0,'UpdateMenu',NULL,'N'),(10,'Insere Menu','Menu','S',0,'AddMenu',NULL,'N'),(11,'Combo Menu','Menu','S',0,'ListaMenus',NULL,'N'),(12,'Listar Alugueis Dia','Aluguel','S',4,'ListarAlugueisDia',NULL,'N'),(13,'Listar Alugueis Agendados','Aluguel','S',4,'ListarAlugueisAgendados',NULL,'N'),(14,'Carrega Dados Usuario','MenuPrincipal','S',4,'CarregaDadosUsuario',NULL,'N'),(15,'CarregaMenu','Menu','S',2,'CarregaMenu',NULL,'N'),(16,'ListarMenusAtivos','Menu','S',2,'ListarMenusAtivos',NULL,'N'),(17,'ListarClasses','Menu','S',2,'ListarClasses',NULL,'N'),(18,'Listar Metodos','Menu','S',2,'ListarMetodos',NULL,'N'),(19,'Salvar Menu','Menu','S',2,'SalvarMenu',NULL,'N'),(20,'CarregaMenuByCod','Menu','S',2,'CarregaMenuByCod',NULL,'N'),(21,'Listar Perfil Ativo','Perfil','S',3,'ListarPerfilAtivo',NULL,'N'),(22,'ListarMenusPermissao','Menu','S',3,'ListarMenusPermissao',NULL,'N'),(23,'Cadastro','','S',NULL,'',NULL,'S'),(24,'Aluguel','Aluguel','S',23,'ChamaView',NULL,'S'),(25,'Listar Aluguel','Aluguel','S',24,'ListarAluguel',NULL,'N'),(26,'Insert Aluguel','Aluguel','S',24,'InsertAluguel',NULL,'N'),(27,'Update Aluguel','Aluguel','S',24,'UpdateAluguel',NULL,'N'),(28,'Cliente','Cliente','S',23,'ChamaView',NULL,'S'),(29,'Listar Clientes','Cliente','S',28,'ListarClientes',NULL,'N'),(30,'SalvarPermissao','Permissao','S',3,'SalvarPermissao',NULL,'N'),(31,'Insert Cliente','Cliente','S',28,'InsertCliente',NULL,'N'),(32,'Update Cliente','Cliente','S',28,'UpdateCliente',NULL,'N'),(33,'Cor','Cor','S',23,'ChamaView',NULL,'S'),(34,'Listar Cores','Cor','S',33,'ListarCores',NULL,'N'),(35,'Insert Cor','Cor','S',33,'InsertCor',NULL,'N'),(36,'Update Cor','Cor','S',33,'UpdateCor',NULL,'N'),(37,'Listar Cores Ativas','Cor','S',33,'ListarCoresAtivas',NULL,'N'),(38,'Perfil','Perfil','S',23,'ChamaView',NULL,'S'),(39,'Listar Perfil','Perfil','S',38,'ListarPerfil',NULL,'N'),(40,'Insert Perfil','Perfil','S',38,'InsertPerfil',NULL,'N'),(41,'Update Perfil','Perfil','S',38,'UpdatePerfil',NULL,'N'),(42,'Produto','Produto','S',23,'ChamaView',NULL,'S'),(43,'Listar Produtos','Produto','S',42,'ListarProdutos',NULL,'N'),(44,'Insert Produto','Produto','S',42,'InsertProduto',NULL,'N'),(45,'Update Produto','Produto','S',42,'UpdateProduto',NULL,'N'),(46,'Insert Qtd Produto','Produto','S',42,'InsertQtdProduto',NULL,'N'),(47,'Listar Produto Cor','Produto','S',42,'ListarProdutoCor',NULL,'N'),(48,'ListarProdutoAluguel','ProdutoAluguel','S',24,'ListarProdutoAluguel',NULL,'N'),(49,'Insert Produto Aluguel','ProdutoAluguel','S',24,'InsertProdutoAluguel',NULL,'N'),(50,'Update Produto Aluguel','ProdutoAluguel','S',24,'UpdateProdutoAluguel',NULL,'N'),(51,'Delete Produto Aluguel','ProdutoAluguel','S',24,'DeleteProdutoAluguel',NULL,'N'),(52,'SituaÃ§Ã£o','Situacao','S',23,'ChamaView',NULL,'S'),(53,'Listar Situacao','Situacao','S',52,'ListarSituacao',NULL,'N'),(54,'Insert Situacao','Situacao','S',52,'InsertSituacao',NULL,'N'),(55,'Update Situacao','Situacao','S',52,'UpdateSituacao',NULL,'N'),(56,'UsuÃ¡rio','Usuario','S',1,'ChamaView',NULL,'S'),(57,'Listar Usuario','Usuario','S',56,'ListarUsuario',NULL,'N'),(58,'Insert Usuario','Usuario','S',56,'InsertUsuario',NULL,'N'),(59,'Update Usuario','Usuario','S',56,'UpdateUsuario',NULL,'N'),(60,'Reiniciar Senha','Usuario','S',56,'ReiniciarSenha',NULL,'N'),(61,'Listar Usuarios Ativos','Usuario','S',56,'ListarUsuariosAtivos',NULL,'N');
/*!40000 ALTER TABLE `se_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `se_menu_perfil`
--

DROP TABLE IF EXISTS `se_menu_perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `se_menu_perfil` (
  `COD_MENU_PERFIL` int(11) NOT NULL AUTO_INCREMENT,
  `COD_PERFIL` int(11) DEFAULT NULL,
  `COD_MENU` int(11) DEFAULT NULL,
  PRIMARY KEY (`COD_MENU_PERFIL`),
  KEY `se_menu_perfil_se_perfil_fk` (`COD_PERFIL`),
  KEY `se_menu_perfil_se_menu_fk` (`COD_MENU`),
  CONSTRAINT `se_menu_perfil_se_menu_fk` FOREIGN KEY (`COD_MENU`) REFERENCES `se_menu` (`COD_MENU`),
  CONSTRAINT `se_menu_perfil_se_perfil_fk` FOREIGN KEY (`COD_PERFIL`) REFERENCES `se_perfil` (`COD_PERFIL`)
) ENGINE=InnoDB AUTO_INCREMENT=400 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `se_menu_perfil`
--

LOCK TABLES `se_menu_perfil` WRITE;
/*!40000 ALTER TABLE `se_menu_perfil` DISABLE KEYS */;
INSERT INTO `se_menu_perfil` VALUES (339,1,1),(340,1,2),(341,1,3),(342,1,4),(343,1,5),(344,1,6),(345,1,7),(346,1,8),(347,1,9),(348,1,10),(349,1,11),(350,1,12),(351,1,13),(352,1,14),(353,1,15),(354,1,16),(355,1,17),(356,1,18),(357,1,19),(358,1,20),(359,1,21),(360,1,22),(361,1,23),(362,1,24),(363,1,25),(364,1,26),(365,1,27),(366,1,28),(367,1,29),(368,1,30),(369,1,31),(370,1,32),(371,1,33),(372,1,34),(373,1,35),(374,1,36),(375,1,37),(376,1,38),(377,1,39),(378,1,40),(379,1,41),(380,1,42),(381,1,43),(382,1,44),(383,1,45),(384,1,46),(385,1,47),(386,1,48),(387,1,49),(388,1,50),(389,1,51),(390,1,52),(391,1,53),(392,1,54),(393,1,55),(394,1,56),(395,1,57),(396,1,58),(397,1,59),(398,1,60),(399,1,61);
/*!40000 ALTER TABLE `se_menu_perfil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `se_perfil`
--

DROP TABLE IF EXISTS `se_perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `se_perfil` (
  `COD_PERFIL` int(11) NOT NULL,
  `DSC_PERFIL` varchar(50) DEFAULT NULL,
  `IND_ATIVO` char(1) DEFAULT NULL,
  PRIMARY KEY (`COD_PERFIL`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `se_perfil`
--

LOCK TABLES `se_perfil` WRITE;
/*!40000 ALTER TABLE `se_perfil` DISABLE KEYS */;
INSERT INTO `se_perfil` VALUES (1,'Administrador','S');
/*!40000 ALTER TABLE `se_perfil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `se_usuario`
--

DROP TABLE IF EXISTS `se_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `se_usuario` (
  `COD_USUARIO` int(11) NOT NULL,
  `NME_USUARIO` varchar(50) DEFAULT NULL,
  `NME_USUARIO_COMPLETO` varchar(60) DEFAULT NULL,
  `TXT_SENHA` varchar(1000) DEFAULT NULL,
  `NRO_TEL_CELULAR` varchar(50) DEFAULT NULL,
  `TXT_EMAIL` varchar(60) DEFAULT NULL,
  `DTA_INATIVO` datetime DEFAULT NULL,
  `COD_PERFIL` int(11) DEFAULT NULL,
  `IND_ATIVO` char(1) DEFAULT NULL,
  PRIMARY KEY (`COD_USUARIO`),
  UNIQUE KEY `se_usuario_un` (`NME_USUARIO`),
  KEY `se_usuario_se_perfil_fk` (`COD_PERFIL`),
  FULLTEXT KEY `NME_USUARIO_COMPLETO` (`NME_USUARIO_COMPLETO`),
  CONSTRAINT `se_usuario_se_perfil_fk` FOREIGN KEY (`COD_PERFIL`) REFERENCES `se_perfil` (`COD_PERFIL`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `se_usuario`
--

LOCK TABLES `se_usuario` WRITE;
/*!40000 ALTER TABLE `se_usuario` DISABLE KEYS */;
INSERT INTO `se_usuario` VALUES (8,'adm','adm','c4ca4238a0b923820dcc509a6f75849b',NULL,NULL,NULL,1,'S'),(19,'rafael.gerente','Rafael Gerente','c4ca4238a0b923820dcc509a6f75849b','','',NULL,1,'S');
/*!40000 ALTER TABLE `se_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'sisto'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-14 19:38:19
