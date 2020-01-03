<?php
include_once 'Constantes.php';
include_once(PATH."Controller/BaseController.php"); 
include_once(PATH."Model/Perfil/PerfilModel.php");
class PerfilController extends BaseController
{
    /**
     * Redireciona para a Tela de  de Perfil
     */
    Public Function ChamaView(){
        $params = array();
        echo ($this->gen_redirect_and_form(BaseController::ReturnView(BaseController::getPath(), get_class($this)), $params));
    }

    Public Function ListarPerfil(){
        $PerfilModel = new PerfilModel();
        echo $PerfilModel->ListarPerfil();
    }
    
    Public Function InsertPerfil(){
        $PerfilModel = new PerfilModel();
        echo $PerfilModel->InsertPerfil();
    }

    Public Function UpdatePerfil(){
        $PerfilModel = new PerfilModel();
        echo $PerfilModel->UpdatePerfil();
    }

    Public Function ListarPerfilAtivo(){
        $PerfilModel = new PerfilModel();
        echo $PerfilModel->ListarPerfilAtivo();
    }	
}
$classController = new PerfilController();