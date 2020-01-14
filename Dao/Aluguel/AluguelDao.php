<?php
include_once(PATH."Dao/BaseDao.php");
class AluguelDao extends BaseDao
{
    Protected $tableName = "RE_VENDA";
    
    Protected $columns = array ("dtaVenda"   => array("column" =>"DTA_VENDA", "typeColumn" =>"D"),
                                "codUsuario"   => array("column" =>"COD_USUARIO", "typeColumn" =>"I"),
                                "codCliente"   => array("column" =>"COD_CLIENTE", "typeColumn" =>"I"),
                                "codSituacao"   => array("column" =>"COD_SITUACAO", "typeColumn" =>"I"));
    
    Protected $columnKey = array("codVenda"=> array("column" =>"COD_VENDA", "typeColumn" => "I"));
    
    Public Function AluguelDao(){
        $this->conect();
    }

    Public Function ListarAluguel(){
        $sql = "SELECT V.COD_VENDA AS COD_ALUGUEL,
                       DATE_FORMAT(V.DTA_VENDA, '%d/%m/%Y') AS DTA_ALUGUEL,
                       U.NME_USUARIO,
                       V.COD_CLIENTE,
                       C.NME_CLIENTE,
                       V.COD_SITUACAO,
                       S.DSC_SITUACAO
                  FROM RE_VENDA V
                 INNER JOIN EN_CLIENTE C
                    ON V.COD_CLIENTE = C.COD_CLIENTE
                 INNER JOIN EN_SITUACAO S
                    ON V.COD_SITUACAO = S.COD_SITUACAO
                 INNER JOIN SE_USUARIO U
                    ON V.COD_USUARIO = U.COD_USUARIO
                 ORDER BY V.DTA_VENDA";
        return $this->selectDB($sql, false);
    }

    Public Function UpdateAluguel($codUsuario){
        $sql = "UPDATE RE_VENDA SET DTA_VENDA ='".$this->Populate('dtaAluguel', 'D')."',
                                    COD_USUARIO ='".$codUsuario."',
                                    COD_CLIENTE ='".$this->Populate('codCliente', 'I')."',
                                    COD_SITUACAO ='".$this->Populate('codSituacao', 'I')."'
                              WHERE COD_VENDA ='".$this->Populate('codAluguel', 'I')."'";
        return $this->insertDB($sql);
    }

    Public Function InsertAluguel($codUsuario){
        $sql = "INSERT INTO RE_VENDA (DTA_VENDA, COD_USUARIO, COD_CLIENTE, COD_SITUACAO)
                              VALUES ('".$this->Populate('dtaAluguel','D')."',
                                      '".$codUsuario."',
                                      '".$this->Populate('codCliente','I')."',
                                      '".$this->Populate('codSituacao','I')."')";
        return $this->insertDB($sql);
    }
    
    Public Function ListarAlugueisDia(){
        $sql = " SELECT V.COD_VENDA AS COD_ALUGUEL,
                        DATE_FORMAT(V.DTA_VENDA, '%d/%m/%Y') AS DTA_ALUGUEL,
                        V.COD_CLIENTE,
                        CL.NME_CLIENTE AS DSC_CLIENTE,
                        CL.NRO_TELEFONE,
                        (SELECT SUM(VP.VLR_VENDA)
                           FROM RE_VENDA_PRODUTO VP 
                          WHERE VP.COD_VENDA = V.COD_VENDA) AS VLR_TOTAL_ALUGUEL
                   FROM RE_VENDA V
                  INNER JOIN EN_CLIENTE CL
                     ON V.COD_CLIENTE = CL.COD_CLIENTE
                  WHERE V.DTA_VENDA > NOW()
                  ORDER BY V.DTA_VENDA, CL.NME_CLIENTE";
        return $this->selectDB($sql, false);
    }
    
    Public Function ListarAlugueisAgendados(){
        $sql = " SELECT V.COD_VENDA AS COD_ALUGUEL,
                        DATE_FORMAT(V.DTA_VENDA, '%d/%m/%Y') AS DTA_ALUGUEL,
                        V.COD_CLIENTE,
                        CL.NME_CLIENTE AS DSC_CLIENTE,
                        CL.NRO_TELEFONE,
                        (SELECT SUM(VP.VLR_VENDA)
                           FROM RE_VENDA_PRODUTO VP 
                          WHERE VP.COD_VENDA = V.COD_VENDA) AS VLR_TOTAL_ALUGUEL
                   FROM RE_VENDA V
                  INNER JOIN EN_CLIENTE CL
                     ON V.COD_CLIENTE = CL.COD_CLIENTE
                  WHERE V.DTA_VENDA > NOW()
                  ORDER BY V.DTA_VENDA, CL.NME_CLIENTE";
        return $this->selectDB($sql, false);
    }
}