<?php
include_once 'Model/BaseModel.php';
include_once 'Dao/MenuPrincipal/MenuPrincipalDao.php';

class MenuPrincipalModel extends BaseModel{
    
    Public Function CarregaMenu($path){
        $dao = new MenuPrincipalDao();
        return json_encode($dao->CarregaMenu($_SESSION['cod_usuario'], $path));
    }
    
    Public Function CarregaDadosUsuario(){
        $dao = new MenuPrincipalDao();
        return json_encode($dao->CarregaDadosUsuario($_SESSION['cod_usuario']));
    }
}