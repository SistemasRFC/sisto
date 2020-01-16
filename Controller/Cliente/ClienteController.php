<?php
include_once 'Constantes.php';
include_once(PATH."Controller/BaseController.php"); 
include_once(PATH."Model/Cliente/ClienteModel.php");
class ClienteController extends BaseController
{
    /**
     * Redireciona para a Tela de  de Cliente
     */
    Public Function ChamaView(){
        $params = array();
        echo ($this->gen_redirect_and_form(BaseController::ReturnView(BaseController::getPath(), get_class($this)), $params));
    }

    Public Function ListarClientes(){
        $ClienteModel = new ClienteModel();
        echo $ClienteModel->ListarClientes();
    }

    Public Function ListarClientesAutoComplete(){
        $ClienteModel = new ClienteModel();
        echo $ClienteModel->ListarClientesAutoComplete();
    }
    
    Public Function InsertCliente(){
        $ClienteModel = new ClienteModel();
        echo $ClienteModel->InsertCliente();
    }

    Public Function UpdateCliente(){
        $ClienteModel = new ClienteModel();
        echo $ClienteModel->UpdateCliente();
    }	
}
$classController = new ClienteController();