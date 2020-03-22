<?php
include_once(PATH."Dao/BaseDao.php");
class RelatorioAluguelDao extends BaseDao
{
    Public Function RelatorioAluguelDao(){
        $this->conect();
    }

    Public Function ListarRelatorioAluguel($codCliente){
        $select = "SELECT V.COD_VENDA AS COD_ALUGUEL,
                       DATE_FORMAT(V.DTA_VENDA, '%d/%m/%Y') AS DTA_ALUGUEL,
                       V.COD_USUARIO,
                       U.NME_USUARIO,
                       V.COD_SITUACAO,
                       S.DSC_SITUACAO,
                       V.COD_TIPO_PAGAMENTO,
                       V.DSC_ENDERECO_ENTREGA,
                       V.NRO_CEP_ENTREGA,
                       V.DTA_RECIBO,
                       DATE_FORMAT(V.DTA_RECIBO, '%d/%m/%Y') AS DATA_RECIBO,
                        (SELECT SUM(VP.VLR_VENDA*VP.QTD_VENDA)
                           FROM RE_VENDA_PRODUTO VP 
                          WHERE VP.COD_VENDA = V.COD_VENDA) AS VLR_TOTAL
                  FROM RE_VENDA V
                 INNER JOIN EN_SITUACAO S
                    ON V.COD_SITUACAO = S.COD_SITUACAO
                 INNER JOIN SE_USUARIO U
                    ON V.COD_USUARIO = U.COD_USUARIO
                 WHERE V.COD_CLIENTE = ".$codCliente."
                 ORDER BY V.DTA_VENDA DESC";
        return $this->selectDB($select, false);
    }

    Public Function ListarProdutosRelatorioAluguel($codAluguel) {
        $select = "SELECT VP.COD_VENDA_PRODUTO,
                       VP.COD_PRODUTO_COR,
                       CONCAT(P.DSC_PRODUTO,' ',C.DSC_COR) AS DSC_PRODUTO_COR,
                       VP.QTD_VENDA,
                       VP.VLR_VENDA,
                       VP.VLR_VENDA*VP.QTD_VENDA AS VLR_TOTAL_PRODUTO
                  FROM RE_VENDA_PRODUTO VP
                 INNER JOIN RE_PRODUTO_COR PC
                    ON VP.COD_PRODUTO_COR = PC.COD_PRODUTO_COR
                 INNER JOIN EN_PRODUTO P
                    ON PC.COD_PRODUTO = P.COD_PRODUTO
                 INNER JOIN EN_COR C
                    ON PC.COD_COR = C.COD_COR
                 WHERE COD_VENDA =" . $codAluguel;
        return $this->selectDB($select, false);
    }

    Public Function BuscarDadosCliente($codCliente) {
        $select = " SELECT COD_CLIENTE,
                           NME_CLIENTE,
                           NRO_CPF,
                           NRO_TELEFONE
                      FROM EN_CLIENTE
                     WHERE COD_CLIENTE =".$codCliente;
        return $this->selectDB($select, false);
    }
}