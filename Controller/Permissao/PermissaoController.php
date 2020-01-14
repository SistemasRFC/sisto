<?php
include_once("Controller/BaseController.php");
include_once("Model/Permissao/PermissaoModel.php");

class PermissaoController extends BaseController{
    
    Public Function ChamaView(){
        $params = array('pagina' => '../../View/Permissao/PermissaoView.php');        
        echo ($this->gen_redirect_and_form('View/Permissao/PermissaoView.php', $params)); 
    }
    
    Public Function CarregaPermissao(){
        $PermissaoModel = new PermissaoModel();
        echo $PermissaoModel->CarregaPermissao();         
    }
    
    Public Function SalvarPermissao(){
        $PermissaoModel = new PermissaoModel();
        echo $PermissaoModel->SalvarPermissao();
    }
}
