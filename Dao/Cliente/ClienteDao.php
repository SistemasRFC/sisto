<?php
include_once(PATH."Dao/BaseDao.php");
class ClienteDao extends BaseDao
{
    Protected $tableName = "EN_CLIENTE";
    
    Protected $columns = array ("nmeCliente"   => array("column" =>"NME_CLIENTE", "typeColumn" =>"S"),
                                "nroTelefone"   => array("column" =>"NRO_TELEFONE", "typeColumn" =>"S"),
                                "txtEmail"   => array("column" =>"TXT_EMAIL", "typeColumn" =>"S"));
    
    Protected $columnKey = array("codCliente"=> array("column" =>"COD_CLIENTE", "typeColumn" => "I"));
    
    Public Function ClienteDao(){
        $this->conect();
    }

    Public Function ListarClientes(){
        return $this->MontarSelect();
    }

    Public Function UpdateCliente(){
        return $this->MontarUpdate();
    }

    Public Function InsertCliente(){
        return $this->MontarInsert();
    }
}