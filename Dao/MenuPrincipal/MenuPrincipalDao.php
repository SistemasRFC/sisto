<?php
include_once("Dao/BaseDao.php");
class MenuPrincipalDao extends BaseDao
{
    Public Function CarregaMenu($codUsuario, $path){
        $sql_localiza = "
        SELECT M.DSC_MENU,
               M.COD_MENU,                   
               M.NME_CONTROLLER,
               CONCAT('".$path."','/Controller/',M.NME_CONTROLLER,'/',M.NME_CONTROLLER,'Controller.php') AS NME_PATH,
               M.NME_METHOD,
               M.COD_MENU_PAI,
               U.NME_USUARIO_COMPLETO,
               U.TXT_SENHA,
               '250px' AS VLR_TAMANHO_SUBMENU,
               (SELECT COUNT(*) 
		  FROM SE_MENU MI 
		 WHERE M.COD_MENU = MI.COD_MENU_PAI 
                   AND M.IND_ATIVO = 'S' 
                   AND M.IND_VISIBLE = 'S') AS QTD_FILHOS
          FROM SE_MENU M
         INNER JOIN SE_MENU_PERFIL MP
            ON M.COD_MENU = MP.COD_MENU
         INNER JOIN SE_USUARIO U
            ON MP.COD_PERFIL = U.COD_PERFIL
         WHERE COD_USUARIO = ".$codUsuario." 
           AND M.IND_ATIVO = 'S' 
           AND M.IND_VISIBLE = 'S'
         ORDER BY M.COD_MENU_PAI, M.DSC_MENU";
        $rs_localiza = $this->selectDB("$sql_localiza", false);
        return $rs_localiza;
    }

    Public Function CarregaMenuMobile($codUsuario, $path){
        try{
            $sql_localiza = "
            SELECT DSC_MENU_W,
                   m.COD_MENU_W,                   
                   DSC_ACTIVITY,
                   NME_USUARIO_COMPLETO
              FROM SE_MENU M
             INNER JOIN SE_MENU_PERFIL MP
                ON M.COD_MENU_W = MP.COD_MENU_W
             INNER JOIN SE_USUARIO U
                ON MP.COD_PERFIL_W = U.COD_PERFIL_W
             WHERE COD_USUARIO = ".$codUsuario." AND IND_MENU_ATIVO_W = 'S' AND IND_MOBILE = 'S'
             ORDER BY DSC_MENU_W";
             //echo $sql_localiza; exit;
            $rs_localiza = $this->selectDB("$sql_localiza", false);
        }catch(Exception $e){
            echo "erro".$e;
        }
        return $rs_localiza;
    }

    Public Function CarregaController($codMenu, $path){
        try{
            $sql_localiza = "
            SELECT NME_CONTROLLER,
                   NME_METHOD
              FROM SE_MENU M
             WHERE M.COD_MENU_W = $codMenu";
             //echo $sql_localiza; exit;
            $rs_localiza = $this->selectDB("$sql_localiza");
        }catch(Exception $e){
            echo "erro".$e;
        }
        return $rs_localiza;
    }

  function CarregaAtalhos($codUsuario,$path){
    $sql_localiza = "
    SELECT M.DSC_MENU,
           M.COD_MENU,
           CONCAT('".$path."','/Controller/',M.NME_CONTROLLER,'/',M.NME_CONTROLLER,'Controller.php') AS NME_CONTROLLER,
           M.NME_METHOD,
           M.COD_MENU_PAI,
           M.DSC_CAMINHO_IMAGEM,
           U.NME_USUARIO_COMPLETO,
           U.TXT_SENHA
      FROM SE_MENU M
     INNER JOIN SE_MENU_PERFIL MP
        ON M.COD_MENU = MP.COD_MENU
     INNER JOIN SE_USUARIO U
        ON MP.COD_PERFIL = U.COD_PERFIL
     WHERE COD_USUARIO = ".$codUsuario."
       AND IND_MENU_ATIVO = 'S'
       AND M.IND_ATALHO = 'S'
     ORDER BY DSC_MENU";
    $rs_localiza = $this->selectDB("$sql_localiza", false);
    return $rs_localiza;
  }

  Public Function CarregaDadosUsuario($codUsuario){
    $sql = "SELECT COD_USUARIO,
                   NME_USUARIO_COMPLETO
              FROM SE_USUARIO U
             WHERE U.COD_USUARIO = ".$codUsuario;
      return $this->selectDB($sql, false);
  }

  Public Function CarregaNoticias($codLoja){
      $sql = "SELECT COD_NOTICIAS,
                     TXT_NOTICIAS AS DSC_TITULO,
                     TXT_OBSERVACAO AS TXT_NOTICIA,
                     TXT_OBSERVACAO_MOBILE AS TXT_NOTICIA_MOBILE,
                     DATE(DTA_NOTICIA) AS DTA_NOTICIA
                FROM EN_NOTICIAS
               WHERE COD_LOJA = $codLoja 
                 AND IND_ATIVO = 'S'
               ORDER BY DTA_NOTICIA DESC";
      return $this->selectDB($sql, false);
  }
}
?>
