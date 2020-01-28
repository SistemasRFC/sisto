<?php
include_once(PATH."Dao/BaseDao.php");
class ClienteDao extends BaseDao
{
    Protected $tableName = "EN_CLIENTE";
    
    Protected $columns = array ("nmeCliente"    => array("column" =>"NME_CLIENTE", "typeColumn" =>"S"),
                                "nroTelefone"   => array("column" =>"NRO_TELEFONE", "typeColumn" =>"S"),
                                "txtEmail"      => array("column" =>"TXT_EMAIL", "typeColumn" =>"S"),
                                "nroCpf"        => array("column" =>"NRO_CPF", "typeColumn" =>"S"),
                                "dscEndereco"   => array("column" =>"DSC_ENDERECO", "typeColumn" =>"S"),
                                "dtaNascimento"   => array("column" =>"DTA_NASCIMENTO", "typeColumn" =>"D"));
    
    Protected $columnKey = array("codCliente"   => array("column" =>"COD_CLIENTE", "typeColumn" => "I"));
    
    Public Function ClienteDao(){
        $this->conect();
    }

    Public Function ListarClientes(){
        return $this->MontarSelect();
    }

    Public Function ListarClientesAutoComplete(){
        $select = " SELECT COD_CLIENTE AS COD,
                           NME_CLIENTE AS TEXT
                      FROM EN_CLIENTE
                     WHERE NME_CLIENTE LIKE '%".$this->Populate('nmeClienteAluguel')."%'";

        return $this->selectDB($select, false);
    }

    Public Function UpdateCliente(stdClass $obj){
        return $this->MontarUpdate($obj);
    }

    Public Function InsertCliente(){
        return $this->MontarInsert();
    }
}