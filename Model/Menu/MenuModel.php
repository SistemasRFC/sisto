<?php
include_once PATH.'Model/BaseModel.php';
include_once PATH.'Dao/Menu/MenuDao.php';

class MenuModel extends BaseModel{
    
    Public Function CarregaMenu(){
        $dao = new MenuDao();
        $return = $dao->CarregaMenu();
        if ($return[0]){
            $return = FuncoesArray::AtualizaBooleanInArray($return, 'IND_ATIVO|IND_VISIBLE', 'ATIVO|VISIBLE');
        }
        return json_encode($return);
    }
    
    Public Function CarregaMenuByCod(){
        $dao = new MenuDao();
        $return = $dao->CarregaMenuByCod();
        if ($return[0]){
            $return = FuncoesArray::AtualizaBooleanInArray($return, 'IND_ATIVO|IND_VISIBLE', 'ATIVO|VISIBLE');
        }
        return json_encode($return);
    }
    
    Public Function SalvarMenu(){
        $dao = new MenuDao();
        if ($dao->Populate('codMenu', 'I')){
            $result = $dao->UpdateMenu();
        }else{
            $result = $dao->InsertMenu();
        }
        return json_encode($result);
    }
    
    Public Function ListarMenusAtivos(){
        $dao = new MenuDao();
        return json_encode($dao->ListarMenusAtivos());        
    }
    
    Public Function ListarMenusPermissao(){
        $dao = new MenuDao();
        $codPerfil = $dao->Populate('codPerfil', 'I');
        return json_encode($dao->ListarMenusPermissao($codPerfil));        
    }
}