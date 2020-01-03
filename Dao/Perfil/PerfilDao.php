<?php
include_once(PATH."Dao/BaseDao.php");
class PerfilDao extends BaseDao
{
    Protected $tableName = "SE_PERFIL";
    
    Protected $columns = array ("dscPerfil"   => array("column" =>"DSC_PERFIL", "typeColumn" =>"S"),
                                "indAtivo"   => array("column" =>"IND_ATIVO", "typeColumn" =>"S"));
    
    Protected $columnKey = array("codPerfil"=> array("column" =>"COD_PERFIL", "typeColumn" => "I"));
    
    Public Function PerfilDao(){
        $this->conect();
    }

    Public Function ListarPerfil(){    
        return $this->MontarSelect();
    }

    Public Function UpdatePerfil(){
        return $this->MontarUpdate();
    }

    Public Function InsertPerfil($codLoja){
        return $this->MontarInsert($codLoja);
    }

    Public Function ListarPerfilAtivo(){    
        return $this->MontarSelect("AND IND_ATIVO = 'S'");
    }
}