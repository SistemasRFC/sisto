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

    Public Function ListarPerfil($Json=true){
        $dao = new PerfilDao();
        $lista = $dao->ListarPerfil($_SESSION['cod_loja']);
        if ($Json){
            return json_encode($lista);
        }else{
            return $lista;        
        }
    }
    
    Public Function InsertPerfil(){
        $dao = new PerfilDao();        
        $result = $dao->InsertPerfil($_SESSION['cod_loja']);
        return json_encode($result);        
    }

    Public Function UpdatePerfil(){
        $dao = new PerfilDao();
        $result = $dao->UpdatePerfil();
        return json_encode($result);
    }

    Public Function ListarPerfilAtivo($Json=true){
        $dao = new PerfilDao();
        $lista = $dao->ListarPerfilAtivo();
        if ($Json){
            return json_encode($lista);
        }else{
            return $lista;        
        }
    }	
    
}

