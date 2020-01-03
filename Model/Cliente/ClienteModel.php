<?php
include_once(PATH."Model/BaseModel.php");
include_once(PATH."Dao/Cliente/ClienteDao.php");
class ClienteModel extends BaseModel
{
    public function ClienteModel(){
        If (!isset($_SESSION)){
            ob_start();
            session_start();
        }
    }

    Public Function ListarClientes($Json=true){
        $dao = new ClienteDao();
        $lista = $dao->ListarClientes();
        if ($Json){
            return json_encode($lista);
        }else{
            return $lista;        
        }
    }
    
    Public Function InsertCliente(){
        $dao = new ClienteDao();        
        $result = $dao->InsertCliente();
        return json_encode($result);        
    }

    Public Function UpdateCliente(){
        $dao = new ClienteDao();
        $result = $dao->UpdateCliente();
        return json_encode($result);
    }	
    
}

