<?php
include_once(PATH."Dao/BaseDao.php");
class MenuDao extends BaseDao
{    
    Protected $tableName = "SE_MENU";
    
    Protected $columns = array ("dscMenu"           => array("column" => "DSC_MENU", "typeColumn" => "S"),
                                "nmeController"     => array("column" => "NME_CONTROLLER", "typeColumn" => "S"), 
                                "nmeMethod"         => array("column" => "NME_METHOD", "typeColumn" => "S"),
                                "codMenuPai"        => array("column" => "COD_MENU_PAI", "typeColumn" => "I"),
                                "indAtivo"          => array("column" => "IND_ATIVO", "typeColumn" => "S"),
                                "indVisible"        => array("column" => "IND_VISIBLE", "typeColumn" => "S"),
                                "dscCaminhoImagem"  => array("column" => "DSC_CAMINHO_IMAGEM", "typeColumn" => "S"),
                                "codMenuPai"        => array("column" => "COD_MENU_PAI", "typeColumn" => "I"));
    
    Protected $columnKey = array("codMenu"          => array("column" => "COD_MENU", "typeColumn" => "I"));
    
    Public Function CarregaMenu(){
        return $this->MontarSelect(NULL, 'ORDER BY DSC_MENU');
    }
    
    Public Function CarregaMenuByCod(){
        return $this->MontarSelect('AND COD_MENU = '.$this->Populate('codMenu'), 'ORDER BY DSC_MENU');
    }
    
    Public Function InsertMenu(){
        return $this->MontarInsert();
    }
    
    Public Function UpdateMenu(){
        return $this->MontarUpdate();
    }    
    
    Public Function ListarMenusAtivos(){
        return $this->MontarSelectAtivos(NULL, ' AND IND_VISIBLE = "S"', 'ORDER BY DSC_MENU');
    }    
    
    Public Function ListarMenusPermissao($codPerfil){
        $codPerfil=$codPerfil==''?0:$codPerfil;
        $sql = " SELECT M.COD_MENU,
                        M.DSC_MENU,
                        (SELECT MP.DSC_MENU
                             FROM SE_MENU MP
                            WHERE MP.COD_MENU = M.COD_MENU_PAI) AS DSC_MENU_PAI,
                        (SELECT COUNT(*) AS QTD
                             FROM SE_MENU_PERFIL MPER
                            WHERE MPER.COD_MENU = M.COD_MENU
                              AND MPER.COD_PERFIL = ".$codPerfil.") AS QTD
                   FROM SE_MENU M
                  WHERE M.IND_ATIVO = 'S'";
        return $this->selectDB($sql, false);
    }
}
?>
