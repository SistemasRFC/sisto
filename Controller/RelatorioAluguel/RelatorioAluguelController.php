<?php
include_once 'Constantes.php';
include_once(PATH."Controller/BaseController.php"); 
include_once(PATH."Model/RelatorioAluguel/RelatorioAluguelModel.php");
class RelatorioAluguelController extends BaseController
{
    /**
     * Redireciona para a Tela de  de RelatorioAluguel
     */
    Public Function ChamaView(){
        $params = array();
        echo ($this->gen_redirect_and_form(BaseController::ReturnView(BaseController::getPath(), get_class($this)), $params));
    }

    Public Function ListarRelatorioAluguel(){
        $RelatorioAluguelModel = new RelatorioAluguelModel();
        echo $RelatorioAluguelModel->ListarRelatorioAluguel();
    }
}
$classController = new RelatorioAluguelController();