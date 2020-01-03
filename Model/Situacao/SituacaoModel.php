<?php
include_once(PATH."Model/BaseModel.php");
include_once(PATH."Dao/Situacao/SituacaoDao.php");
class SituacaoModel extends BaseModel
{
    public function SituacaoModel(){
        If (!isset($_SESSION)){
            ob_start();
            session_start();
        }
    }

    Public Function ListarSituacao($Json=true){
        $dao = new SituacaoDao();
        $lista = $dao->ListarSituacao();
        if ($Json){
            return json_encode($lista);
        }else{
            return $lista;        
        }
    }
    
    Public Function InsertSituacao(){
        $dao = new SituacaoDao();        
        $result = $dao->InsertSituacao();
        return json_encode($result);        
    }

    Public Function UpdateSituacao(){
        $dao = new SituacaoDao();
        $result = $dao->UpdateSituacao();
        return json_encode($result);
    }	
    
}

