<?php
include_once("Controller/BaseController.php");
include_once("Model/MenuPrincipal/MenuPrincipalModel.php");

class MenuPrincipalController extends BaseController{
    
    Public Function ChamaView(){
        $params = array();        
        echo ($this->gen_redirect_and_form(BaseController::ReturnView(BaseController::getPath(), get_class($this)), $params));        
    }
    
    Public Function TrocaSenha(){
        $params = array();        
        echo ($this->gen_redirect_and_form('/View/Login/AlteracaoSenhaView.php', $params));                        
    }
    
    Public Function CarregaMenu(){
        $Model = new MenuPrincipalModel();
        echo $Model->CarregaMenu($this->getPath());
    }
    
    Public Function CarregaDadosUsuario(){
        $Model = new MenuPrincipalModel();
        echo $Model->CarregaDadosUsuario();        
    }
}
$MenuPrincipal = new MenuPrincipalController();
