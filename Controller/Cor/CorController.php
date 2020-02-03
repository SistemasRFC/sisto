<?php
include_once 'Constantes.php';
include_once(PATH."Controller/BaseController.php"); 
include_once(PATH."Model/Cor/CorModel.php");
class CorController extends BaseController
{
    /**
     * Redireciona para a Tela de  de ConfiguraCor
     */
    Public Function ChamaView(){
        $params = array();
        echo ($this->gen_redirect_and_form(BaseController::ReturnView(BaseController::getPath(), get_class($this)), $params));
    }

    Public Function ListarCores(){
        $CorModel = new CorModel();
        echo $CorModel->ListarCores();
    }
    
    Public Function InsertCor(){
        $CorModel = new CorModel();
        echo $CorModel->InsertCor();
    }

    Public Function UpdateCor(){
        $CorModel = new CorModel();
        echo $CorModel->UpdateCor();
    }
}
$classController = new CorController();