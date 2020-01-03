<?php
include_once(PATH."Model/BaseModel.php");
include_once(PATH."Dao/Cor/CorDao.php");
class CorModel extends BaseModel
{
    public function CorModel(){
        If (!isset($_SESSION)){
            ob_start();
            session_start();
        }
    }

    Public Function ListarCores($Json=true){
        $dao = new CorDao();
        $lista = $dao->ListarCores();
        if ($Json){
            return json_encode($lista);
        }else{
            return $lista;        
        }
    }
    
    Public Function InsertCor(){
        $dao = new CorDao();        
        $result = $dao->InsertCor();
        return json_encode($result);        
    }

    Public Function UpdateCor(){
        $dao = new CorDao();
        $result = $dao->UpdateCor();
        return json_encode($result);
    }	

    Public Function ListarCoresAtivas($Json=true){
        $dao = new CorDao();
        $lista = $dao->ListarCoresAtivas();
        if ($Json){
            return json_encode($lista);
        }else{
            return $lista;        
        }
    }
}