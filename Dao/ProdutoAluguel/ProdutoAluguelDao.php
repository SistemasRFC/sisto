<?php
include_once(PATH."Dao/BaseDao.php");
class ProdutoAluguelDao extends BaseDao
{
    Protected $tableName = "RE_VENDA_PRODUTO";
    
    Protected $columns = array ("codVenda"      => array("column" =>"COD_VENDA", "typeColumn" =>"I"),
                                "codProdutoCor" => array("column" =>"COD_PRODUTO_COR", "typeColumn" =>"I"),
                                "qtdVenda"      => array("column" =>"QTD_VENDA", "typeColumn" =>"I"),
                                "vlrVenda"      => array("column" =>"VLR_VENDA", "typeColumn" =>"F"));
    
    Protected $columnKey = array("codVendaProduto"=> array("column" =>"COD_VENDA_PRODUTO", "typeColumn" => "I"));
    
    Public Function ProdutoAluguelDao(){
        $this->conect();
    }

    Public Function ListarProdutoAluguel(){
        $sql = " SELECT VP.COD_VENDA_PRODUTO AS COD_PRODUTO_ALUGUEL,
                        VP.COD_PRODUTO_COR,
                        CONCAT(P.DSC_PRODUTO,' ',C.DSC_COR) AS DSC_PRODUTO_COR,
                        VP.QTD_VENDA AS QTD_PRODUTO_ALUGUEL,
                        VP.VLR_VENDA AS VLR_PRODUTO_ALUGUEL,
                        (VP.VLR_VENDA*VP.QTD_VENDA) AS VLR_ALUGUEL
                   FROM RE_VENDA_PRODUTO VP
                  INNER JOIN RE_PRODUTO_COR PC
                     ON VP.COD_PRODUTO_COR = PC.COD_PRODUTO_COR
                  INNER JOIN EN_PRODUTO P
                     ON PC.COD_PRODUTO = P.COD_PRODUTO
                  INNER JOIN EN_COR C
                     ON PC.COD_COR = C.COD_COR
                  WHERE VP.COD_VENDA = ".$this->Populate('codAluguel','I')."";
        return $this->selectDB($sql, false);
    }

    Public Function UpdateProdutoAluguel(){
        $sql = "UPDATE RE_VENDA_PRODUTO SET COD_PRODUTO_COR = ".$this->Populate('codProdutoCor','I').",
                                            QTD_VENDA = ".$this->Populate('qtdProdutoAluguel','I').",
                                            VLR_VENDA = ".$this->Populate('vlrProdutoAluguel','F')."
                                      WHERE COD_VENDA_PRODUTO = ".$this->Populate('codProdutoAluguel','I')."";
        return $this->insertDB($sql);
    }

    Public Function InsertProdutoAluguel($codAluguel){
        $sql = "INSERT INTO RE_VENDA_PRODUTO (COD_VENDA, COD_PRODUTO_COR, QTD_VENDA, VLR_VENDA)
                                      VALUES (".$codAluguel.",
                                              ".$this->Populate('codProdutoCor','I').",
                                              ".$this->Populate('qtdProdutoAluguel','I').",
                                              ".$this->Populate('vlrProdutoAluguel','F').")";
        return $this->insertDB($sql);
    }

    Public Function DeleteProdutoAluguel(){
        $sql = "DELETE FROM RE_VENDA_PRODUTO WHERE COD_VENDA_PRODUTO = ".$this->Populate('codProdutoAluguel','I')."";
        $retorno = $this->insertDB($sql);
        return $retorno;
    }
}