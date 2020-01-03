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

    Public Function ListarCoresAtivas(){
        if($this->Populate('codProduto', 'I') != NUll){
            $sql = "SELECT C.COD_COR,
                           C.DSC_COR,
                           COALESCE (PC.VLR_PRODUTO_COR, 0) AS VLR_PRODUTO_COR,
                           COALESCE (PC.QTD_PRODUTO_COR, 0) AS QTD_PRODUTO_COR
                      FROM EN_COR C
                      LEFT JOIN RE_PRODUTO_COR PC
                        ON C.COD_COR = PC.COD_COR
                       AND PC.COD_PRODUTO = ".$this->Populate('codProduto', 'I')."
                     WHERE C.IND_ATIVO = 'S'
                     GROUP BY C.COD_COR
                     ORDER BY C.COD_COR";
        }else{
            $sql = "SELECT COD_COR,
                           DSC_COR,
                           '' AS VLR_PRODUTO_COR,
                           '' AS QTD_PRODUTO_COR
                      FROM EN_COR
                     WHERE IND_ATIVO = 'S'
                     ORDER BY COD_COR";
        }
        return $this->selectDB($sql, false);
    }
 
}