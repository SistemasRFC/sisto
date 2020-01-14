<?php
include_once(PATH."Dao/BaseDao.php");
class SituacaoDao extends BaseDao
{
    Protected $tableName = "EN_SITUACAO";
    
    Protected $columns = array ("dscSituacao"   => array("column" =>"DSC_SITUACAO", "typeColumn" =>"S"));
    
    Protected $columnKey = array("codSituacao"=> array("column" =>"COD_SITUACAO", "typeColumn" => "I"));
    
    Public Function SituacaoDao(){
        $this->conect();
    }

    Public Function ListarSituacao(){    
        return $this->MontarSelect();
    }

    Public Function UpdateSituacao(){
        return $this->MontarUpdate();
    }

    Public Function InsertSituacao(){
        return $this->MontarInsert();
    }
}