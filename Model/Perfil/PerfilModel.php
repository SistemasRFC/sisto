<?php
include_once(PATH."Model/BaseModel.php");
include_once(PATH."Dao/Perfil/PerfilDao.php");
class PerfilModel extends BaseModel
{
    public function PerfilModel(){
        If (!isset($_SESSION)){
            ob_start();
            session_start();
        }
    }

    Public Function ListarPerfil(){
        $dao = new PerfilDao();
        $lista = $dao->ListarPerfil();
        return json_encode($lista);
    }
    
    Public Function InsertPerfil(){
        $dao = new PerfilDao();        
        $result = $dao->InsertPerfil();
        return json_encode($result);        
    }

    Public Function UpdatePerfil(){
        $dao = new PerfilDao();
        $result = $dao->UpdatePerfil();
        return json_encode($result);
    }

    Public Function ListarPerfilAtivo(){
        $dao = new PerfilDao();
        $lista = $dao->ListarPerfilAtivo();
        return json_encode($lista);
    }	
    
}

