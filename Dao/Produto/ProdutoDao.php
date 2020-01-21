<?php
include_once(PATH."Dao/BaseDao.php");
class ProdutoDao extends BaseDao
{
    Protected $tableName = "EN_PRODUTO";
    
    Protected $columns = array ("dscProduto"   => array("column" =>"DSC_PRODUTO", "typeColumn" =>"S"));
    
    Protected $columnKey = array("codProduto"=> array("column" =>"COD_PRODUTO", "typeColumn" => "I"));
    
    Public Function ProdutoDao(){
        $this->conect();
    }

    Public Function ListarProdutos(){
        $sql = "SELECT P.COD_PRODUTO,
                       P.DSC_PRODUTO,
                       COALESCE (PC.VLR_PRODUTO_COR, 0) AS VLR_PRODUTO,
                       COALESCE (C.DSC_COR, '') AS DSC_COR,
                       COALESCE (PC.QTD_PRODUTO_COR, 0) AS QTD_PRODUTO,
                       PC.COD_PRODUTO_COR
                  FROM EN_PRODUTO P
                  LEFT JOIN RE_PRODUTO_COR PC
                    ON P.COD_PRODUTO = PC.COD_PRODUTO
                  LEFT JOIN EN_COR C
                    ON PC.COD_COR = C.COD_COR
                 ORDER BY P.DSC_PRODUTO, C.DSC_COR, PC.QTD_PRODUTO_COR";
        return $this->selectDB($sql, false);
    }

    Public Function UpdateProduto(){
        return $this->MontarUpdate();
    }

    Public Function InsertProduto(){
        $sql = "INSERT INTO EN_PRODUTO
                            (DSC_PRODUTO)
                     VALUES ('".$this->Populate('dscProduto', 'S')."')";
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

    Public Function ListarProdutoCorAutoComplete(){
        $select = "SELECT PC.COD_PRODUTO_COR AS COD,
                       CONCAT(P.DSC_PRODUTO,' ',C.DSC_COR, ' Estoque: ', (PC.QTD_PRODUTO_COR-COALESCE(VP.QTD_VENDA, 0))) AS TEXT,
                       (PC.QTD_PRODUTO_COR-COALESCE(VP.QTD_VENDA, 0)) AS QTD_DISPONIVEL
                  FROM RE_PRODUTO_COR PC
                 INNER JOIN EN_PRODUTO P
                    ON PC.COD_PRODUTO = P.COD_PRODUTO
                 INNER JOIN EN_COR C
                    ON PC.COD_COR = C.COD_COR
                  LEFT JOIN (SELECT VP.* 
                               FROM RE_PRODUTO_COR PC
                              INNER JOIN RE_VENDA_PRODUTO VP
                                 ON PC.COD_PRODUTO_COR = VP.COD_PRODUTO_COR
                              INNER JOIN RE_VENDA V
                                 ON VP.COD_VENDA = V.COD_VENDA 
                              WHERE V.DTA_VENDA = '".$this->Populate('dtaAluguel', 'D')."') AS VP
                    ON PC.COD_PRODUTO_COR = VP.COD_PRODUTO_COR
                 ORDER BY P.DSC_PRODUTO, C.DSC_COR, QTD_DISPONIVEL";
//       echo $sql;die;
        return $this->selectDB($select, false);
    }
    
    Public Function ListarProdutosPorDia($dta, $codProduto=75){
        $sql="";
        for($i=0;$i<7;$i++){
            $sql .= "(SELECT '".$dta[$i]."' AS DTA_VENDA, COALESCE((SELECT COALESCE(SUM(VP.QTD_VENDA),0) AS QTD_VENDA
                      FROM RE_VENDA V
                     INNER JOIN RE_VENDA_PRODUTO VP
                        ON V.COD_VENDA = VP.COD_VENDA
                     WHERE DTA_VENDA = '".$this->ConverteDataForm($dta[$i])."'
                       AND VP.COD_PRODUTO_COR=$codProduto
                       AND V.COD_SITUACAO IN (8,9)
                     GROUP BY DTA_VENDA),0) AS QTD_VENDA) UNION ALL";
        }
        $sql = substr($sql, 0, strlen($sql)-strlen(" UNION ALL"));
//        echo $sql;
        return $this->selectDB($sql, false);
    }
}