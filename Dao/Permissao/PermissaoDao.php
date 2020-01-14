<?php
include_once("Dao/BaseDao.php");
class PermissaoDao extends BaseDao
{    
    Protected $tableName = "SE_MENU_PERFIL";
    
    Protected $columns = array ("codPerfil"         => array("column" => "COD_PERFIL", "typeColumn" => "I"),
                                "codMenu"           => array("column" => "COD_MENU", "typeColumn" => "I"));
    
    Protected $columnKey = array("codMenuPerfil"    => array("column" => "COD_MENU_PERFIL", "typeColumn" => "I"));
    
    Public Function CarregaPermissao(){
        $sql = "";
        $rs_localiza = $this->selectDB("$sql", false);
        return $rs_localiza;
    }

    function RemovePermissoes($codMenu){        
        $sql_lista = "
            DELETE FROM SE_MENU_PERFIL
             WHERE COD_PERFIL = ".filter_input(INPUT_POST, 'codPerfil', FILTER_SANITIZE_NUMBER_INT);
        if ($codMenu!=0){
            $sql_lista .=  " AND COD_MENU = ".$codMenu;
        }        
        $result = $this->insertDB("$sql_lista");
        return $result;
    }

    function AddPermissao($codMenu){        
        $insert_login = "INSERT INTO SE_MENU_PERFIL (COD_PERFIL, COD_MENU)
                          VALUES ('".filter_input(INPUT_POST, 'codPerfil', FILTER_SANITIZE_NUMBER_INT)."','".$codMenu."')";
                        //   echo $insert_login;
        return $this->insertDB("$insert_login");
    }
}
?>
