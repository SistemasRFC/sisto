<?php
include_once(PATH."Dao/BaseDao.php");
class CorDao extends BaseDao
{
    Protected $tableName = "EN_COR";
    
    Protected $columns = array ("dscCor"   => array("column" =>"DSC_COR", "typeColumn" =>"S"),
                                "indAtivo"   => array("column" =>"IND_ATIVO", "typeColumn" =>"S"));
    
    Protected $columnKey = array("codCor"=> array("column" =>"COD_COR", "typeColumn" => "I"));
    
    Public Function CorDao(){
        $this->conect();
    }

    Public Function ListarCores(){    
        return $this->MontarSelect();
    }

    Public Function UpdateCor(){
        $sql = "UPDATE EN_COR SET DSC_COR = '".$this->Populate('dscCor','S')."',
                                  IND_ATIVO = '".$this->Populate('indAtivo','S')."'
                 WHERE COD_COR = ".$this->Populate('codCor','I');
        return $this->insertDB($sql);
    }

    Public Function InsertCor(){
        $sql = "INSERT INTO EN_COR
                (   DSC_COR,
                    IND_ATIVO)
                VALUES
                (   '".$this->Populate('dscCor', 'S')."',
                    '".$this->Populate('indAtivo', 'S')."')";
        return $this->insertDB($sql);
    }
 
}