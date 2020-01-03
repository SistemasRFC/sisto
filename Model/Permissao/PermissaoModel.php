<?php
include_once 'Model/BaseModel.php';
include_once 'Dao/Permissao/PermissaoDao.php';

class PermissaoModel extends BaseModel{
    
    Public Function CarregaPermissao(){
        $dao = new PermissaoDao();
        return json_encode($dao->CarregaPermissao());
    }
    
    Public Function SalvarPermissao(){
        $dao = new PermissaoDao();        
        $dao->RemovePermissoes('0');
        $array = explode("$", $_POST['codMenu']);
        for ($i=0;$i<count($array)-1;$i++){
            $registro=explode('#',$array[$i]);            
            if ($registro[1]=='S'){
                $atualizado = $dao->AddPermissao($registro[0]);
            }else{
                $atualizado = $dao->RemovePermissoes($registro[0]);
            }
        }
        return json_encode($atualizado);
    }
    
}