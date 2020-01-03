<?php
include_once("Controller/BaseController.php");
include_once("Model/Login/LoginModel.php");

class LoginController extends BaseController{
    
    Public Function Logar(){
        $LoginModel = new LoginModel();
        echo $LoginModel->Logar();
    }    
    
    Public Function Logoff(){
        $params = array();
        echo ($this->gen_redirect_and_form('index.php', $params));
    }
    
    Public Function Registrar(){
        $LoginModel = new LoginModel();
        echo $LoginModel->Registrar();
    }    
    
    Public Function AlterarSenha(){
        $LoginModel = new LoginModel();
        echo $LoginModel->AlteraSenha();        
    }
}
$teste = new LoginController();
