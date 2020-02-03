<?php
include_once(PATH."Dao/BaseDao.php");
class AluguelDao extends BaseDao
{
    Protected $tableName = "RE_VENDA";
    
    Protected $columns = array ("dtaVenda"            => array("column" =>"DTA_VENDA", "typeColumn" =>"D"),
                                "codUsuario"          => array("column" =>"COD_USUARIO", "typeColumn" =>"I"),
                                "codCliente"          => array("column" =>"COD_CLIENTE", "typeColumn" =>"I"),
                                "codSituacao"         => array("column" =>"COD_SITUACAO", "typeColumn" =>"I"),
                                "codTipoPagamento"    => array("column" =>"COD_TIPO_PAGAMENTO", "typeColumn" =>"I"),
                                "dscEnderecoEntrega"  => array("column" =>"DSC_ENDERECO_ENTREGA", "typeColumn" =>"S"),
                                "dscPontoReferencia"  => array("column" =>"DSC_PONTO_REFERENCIA", "typeColumn" =>"S"),
                                "nroCepEntrega"       => array("column" =>"NRO_CEP_ENTREGA", "typeColumn" =>"S"),
                                "dtaRecibo"           => array("column" =>"DTA_RECIBO", "typeColumn" =>"S"),
                                "dtaBuscaProduto"     => array("column" =>"DTA_BUSCA_PRODUTO", "typeColumn" =>"S"));
    
    Protected $columnKey = array("codVenda"           => array("column" =>"COD_VENDA", "typeColumn" => "I"));
    
    Public Function AluguelDao(){
        $this->conect();
    }

    Public Function ListarAluguel(){
        $select = "SELECT V.COD_VENDA AS COD_ALUGUEL,
                       DATE_FORMAT(V.DTA_VENDA, '%d/%m/%Y') AS DTA_ALUGUEL,
                       V.COD_USUARIO,
                       U.NME_USUARIO,
                       V.COD_CLIENTE,
                       C.NME_CLIENTE,
                       V.COD_SITUACAO,
                       S.DSC_SITUACAO,
                       V.COD_TIPO_PAGAMENTO,
                       V.DSC_ENDERECO_ENTREGA,
                       V.DSC_PONTO_REFERENCIA,
                       V.NRO_CEP_ENTREGA,
                       V.DTA_RECIBO,
                        (SELECT SUM(VP.VLR_VENDA)
                           FROM RE_VENDA_PRODUTO VP 
                          WHERE VP.COD_VENDA = V.COD_VENDA) AS VLR_TOTAL
                  FROM RE_VENDA V
                 INNER JOIN EN_CLIENTE C
                    ON V.COD_CLIENTE = C.COD_CLIENTE
                 INNER JOIN EN_SITUACAO S
                    ON V.COD_SITUACAO = S.COD_SITUACAO
                 INNER JOIN SE_USUARIO U
                    ON V.COD_USUARIO = U.COD_USUARIO
                 WHERE V.COD_SITUACAO = ".AGENDADO."
                 ORDER BY V.DTA_VENDA";
        return $this->selectDB($select, false);
    }

    Public Function ListarProdutosAluguel($codAluguel) {
        $select = "SELECT VP.COD_VENDA_PRODUTO,
                       VP.COD_PRODUTO_COR,
                       CONCAT(P.DSC_PRODUTO,' ',C.DSC_COR) AS DSC_PRODUTO_COR,
                       VP.QTD_VENDA,
                       VP.VLR_VENDA
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

   Public Function UpdateStatusAluguel(stdClass $obj){
      $sql = "UPDATE RE_VENDA SET COD_SITUACAO =".$obj->codSituacao."
                           WHERE COD_VENDA =".$obj->codVenda."";
      return $this->insertDB($sql);
   }

   /**
    * Aluguel finalizado quando o produto é recolhido, gravando a data do recolhimento
    */
   Public Function FinalizarAluguel(stdClass $obj){
      $sql = "UPDATE RE_VENDA SET COD_SITUACAO =".$obj->codSituacao.",
                              SET DTA_BUSCA_PRODUTO =".$obj->codSituacao."
                           WHERE COD_VENDA =".$obj->codVenda."";
      return $this->insertDB($sql);
   }

   Public Function UpdateAluguel(){
      return $this->MontarUpdate();
   }

   Public Function InsertAluguel(stdClass $obj){
      // $sql = "INSERT INTO RE_VENDA (DTA_VENDA, COD_USUARIO, COD_CLIENTE, COD_SITUACAO)
      //                      VALUES ('".$this->Populate('dtaAluguel','D')."',
      //                               '".$codUsuario."',
      //                               '".$this->Populate('codCliente','I')."',
      //                               '".$this->Populate('codSituacao','I')."')";
      // return $this->insertDB($sql);
      return $this->MontarInsertObj($obj);
   }
    
   Public Function ListarAlugueisDia(){
      $sql = " SELECT V.COD_VENDA AS COD_ALUGUEL,
                      DATE_FORMAT(V.DTA_VENDA, '%d/%m/%Y') AS DTA_ALUGUEL,
                      V.COD_USUARIO,
                      V.COD_CLIENTE,
                      C.NME_CLIENTE,
                      V.COD_SITUACAO,
                      S.DSC_SITUACAO,
                      C.NRO_TELEFONE,
                      (SELECT SUM(VP.VLR_VENDA*VP.QTD_VENDA)
                         FROM RE_VENDA_PRODUTO VP 
                        WHERE VP.COD_VENDA = V.COD_VENDA) AS VLR_TOTAL
                 FROM RE_VENDA V
                INNER JOIN EN_CLIENTE C
                   ON V.COD_CLIENTE = C.COD_CLIENTE
                INNER JOIN EN_SITUACAO S
                   ON V.COD_SITUACAO = S.COD_SITUACAO
                WHERE DATE_FORMAT(V.DTA_VENDA, '%d/%m/%Y') = DATE_FORMAT(NOW(), '%d/%m/%Y')
                  AND V.COD_SITUACAO != ".CANCELADO."
                ORDER BY V.COD_VENDA";
      return $this->selectDB($sql, false);
   }
    
    Public Function ListarAlugueisAgendados(){
        $sql = " SELECT V.COD_VENDA AS COD_ALUGUEL,
                        DATE_FORMAT(V.DTA_VENDA, '%d/%m/%Y') AS DTA_ALUGUEL,
                        V.COD_USUARIO,
                        V.COD_CLIENTE,
                        C.NME_CLIENTE,
                        V.COD_SITUACAO,
                        S.DSC_SITUACAO,
                        C.NRO_TELEFONE,
                        (SELECT SUM(VP.VLR_VENDA*VP.QTD_VENDA)
                           FROM RE_VENDA_PRODUTO VP 
                           WHERE VP.COD_VENDA = V.COD_VENDA) AS VLR_TOTAL
                   FROM RE_VENDA V
                  INNER JOIN EN_CLIENTE C
                     ON V.COD_CLIENTE = C.COD_CLIENTE
                  INNER JOIN EN_SITUACAO S
                     ON V.COD_SITUACAO = S.COD_SITUACAO
                  WHERE STR_TO_DATE(DATE_FORMAT(V.DTA_VENDA, '%d/%m/%Y'), '%d/%m/%Y') > STR_TO_DATE(DATE_FORMAT(NOW(), '%d/%m/%Y'), '%d/%m/%Y')
                    AND V.COD_SITUACAO != ".CANCELADO."
                  ORDER BY V.DTA_VENDA, C.NME_CLIENTE";
        return $this->selectDB($sql, false);
    }
}