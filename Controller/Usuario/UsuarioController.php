<?php
include_once 'Constantes.php';
include_once(PATH."Controller/BaseController.php"); 
include_once(PATH."Model/Usuario/UsuarioModel.php");
class UsuarioController extends BaseController
{
    /**
     * Redireciona para a Tela de  de Usuario
     */
    Public Function ChamaView(){
        $params = array();
        echo ($this->gen_redirect_and_form(BaseController::ReturnView(BaseController::getPath(), get_class($this)), $params));
    }

    Public Function ListarUsuario(){
        $UsuarioModel = new UsuarioModel();
        echo $UsuarioModel->ListarUsuario();
    }
    
    Public Function InsertUsuario(){
        $UsuarioModel = new UsuarioModel();
        echo $UsuarioModel->InsertUsuario();
    }

    Public Function UpdateUsuario(){
        $UsuarioModel = new UsuarioModel();
        echo $UsuarioModel->UpdateUsuario();
    }
    
    Public Function ReiniciarSenha(){
        $UsuarioModel = new UsuarioModel();
        echo $UsuarioModel->ReiniciarSenha();
    }
    
    Public Function ListarUsuariosAtivos(){
        $UsuarioModel = new UsuarioModel();
        echo $UsuarioModel->ListarUsuariosAtivos();
    }
}
$classController = new UsuarioController();