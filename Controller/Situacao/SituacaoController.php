<?php
include_once 'Constantes.php';
include_once(PATH."Controller/BaseController.php"); 
include_once(PATH."Model/Situacao/SituacaoModel.php");
class SituacaoController extends BaseController
{
    /**
     * Redireciona para a Tela de  de Situacao
     */
    Public Function ChamaView(){
        $params = array();
        echo ($this->gen_redirect_and_form(BaseController::ReturnView(BaseController::getPath(), get_class($this)), $params));
    }

    Public Function ListarSituacao(){
        $SituacaoModel = new SituacaoModel();
        echo $SituacaoModel->ListarSituacao();
    }
    
    Public Function InsertSituacao(){
        $SituacaoModel = new SituacaoModel();
        echo $SituacaoModel->InsertSituacao();
    }

    Public Function UpdateSituacao(){
        $SituacaoModel = new SituacaoModel();
        echo $SituacaoModel->UpdateSituacao();
    }	
}
$classController = new SituacaoController();