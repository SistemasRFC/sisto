<?php
include_once(PATH."Dao/BaseDao.php");
class ProdutoCorDao extends BaseDao{
    Protected $tableName = "RE_PRODUTO_COR";
    
    Protected $columns = array ("codProduto"   => array("column" =>"COD_PRODUTO", "typeColumn" =>"I"),
                                "codCor"   => array("column" =>"COD_COR", "typeColumn" =>"I"),
                                "vlrProdutoCor"   => array("column" =>"VLR_PRODUTO_COR", "typeColumn" =>"F"),
                                "qtdProdutoCor"   => array("column" =>"QTD_PRODUTO_COR", "typeColumn" =>"I"),
                                "indAtivo"   => array("column" =>"IND_ATIVO", "typeColumn" =>"S"));
    
    Protected $columnKey = array("codProdutoCor"=> array("column" =>"COD_PRODUTO_COR", "typeColumn" => "I"));
    
    Public Function ProdutoCorDao(){
        $this->conect();
    }

    Public Function ListarProdutosCor(){
        $sql = "SELECT C.COD_COR,
                       C.DSC_COR,
                       PC.COD_PRODUTO_COR,
                       COALESCE (PC.VLR_PRODUTO_COR, 0) AS VLR_PRODUTO_COR,
                       COALESCE (PC.QTD_PRODUTO_COR, 0) AS QTD_PRODUTO_COR
                  FROM RE_PRODUTO_COR PC
                 INNER JOIN EN_COR C
                    ON C.COD_COR = PC.COD_COR
                   AND PC.COD_PRODUTO = ".$this->Populate('codProduto', 'I')."
                 WHERE C.IND_ATIVO = 'S'
                 GROUP BY C.COD_COR
                 ORDER BY C.COD_COR";
        
        return $this->selectDB($sql, false);
    }
    
    Public Function DeleteProdutoCor(){
        $sql = "DELETE FROM RE_PRODUTO_COR WHERE COD_PRODUTO_COR = ".$this->Populate('codProdutoCor', 'I');
        return $this->insertDB($sql);
    }

    Public Function InsertProdutoCor($codProduto, $codCor, $vlrProdutoCor, $qtdProdutoCor){
            $sql = "INSERT INTO RE_PRODUTO_COR
                                (COD_PRODUTO, COD_COR, VLR_PRODUTO_COR, QTD_PRODUTO_COR) 
                         VALUES ('".$codProduto."',
                                 '".$codCor."', 
                                 '".$vlrProdutoCor."',
                                 '".$qtdProdutoCor."')";
                                //  echo $sql;
        return $this->insertDB($sql);
    }

    Public Function UpdateProdutoCor($codCor, $vlrProdutoCor, $qtdProdutoCor){
            $sql = "UPDATE RE_PRODUTO_COR SET VLR_PRODUTO_COR = '".$vlrProdutoCor."', QTD_PRODUTO_COR = '".$qtdProdutoCor."'
                                        WHERE COD_PRODUTO = '".filter_input(INPUT_POST, 'codProduto', FILTER_SANITIZE_NUMBER_INT)."'
                                          AND COD_COR = '".$codCor."'";
        return $this->insertDB($sql);
    }
    
    Public function VerificaProdutoCor($codCor){
        $sql_select = "SELECT COD_PRODUTO_COR
                         FROM RE_PRODUTO_COR
                        WHERE COD_PRODUTO = '".filter_input(INPUT_POST, 'codProduto', FILTER_SANITIZE_NUMBER_INT)."'
                          AND COD_COR = '".$codCor."'";
                        //   echo $sql_select;
        return $this->selectDB($sql_select, false);
        
    }
}
