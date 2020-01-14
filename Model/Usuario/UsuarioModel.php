<?php
include_once(PATH."Model/BaseModel.php");
include_once(PATH."Dao/Usuario/UsuarioDao.php");
class UsuarioModel extends BaseModel
{
    public function UsuarioModel(){
        If (!isset($_SESSION)){
            ob_start();
            session_start();
        }
    }

    Public Function ListarUsuario($Json=true){
        $dao = new UsuarioDao();
        $lista = $dao->ListarUsuario();
        if ($Json){
            return json_encode($lista);
        }else{
            return $lista;        
        }
    }
    
    Public Function InsertUsuario(){
        $dao = new UsuarioDao();        
        $result = $dao->InsertUsuario();
        return json_encode($result);        
    }

    Public Function UpdateUsuario(){
        $dao = new UsuarioDao();
        $result = $dao->UpdateUsuario();
        return json_encode($result);
    }
    
    Public Function ReiniciarSenha(){
        $dao = new UsuarioDao();
        return json_encode($dao->ReiniciarSenha());
    }
    
    Public Function ListarUsuariosAtivos(){
        $dao = new UsuarioDao();
        return json_encode($dao->ListarUsuariosAtivos());
    }
}

