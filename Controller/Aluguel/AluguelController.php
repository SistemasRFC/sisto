<?php
include_once 'Constantes.php';
include_once(PATH."Controller/BaseController.php"); 
include_once(PATH."Model/Aluguel/AluguelModel.php");
class AluguelController extends BaseController
{
    /**
     * Redireciona para a Tela de  de Aluguel
     */
    Public Function ChamaView(){
        $params = array();
        echo ($this->gen_redirect_and_form(BaseController::ReturnView(BaseController::getPath(), get_class($this)), $params));
    }

    Public Function ListarAluguel(){
        $AluguelModel = new AluguelModel();
        echo $AluguelModel->ListarAluguel();
    }
    
    Public Function InsertAluguel(){
        $AluguelModel = new AluguelModel();
        echo $AluguelModel->InsertAluguel();
    }

    Public Function UpdateAluguel(){
        $AluguelModel = new AluguelModel();
        echo $AluguelModel->UpdateAluguel();
    }

    Public Function UpdateStatusAluguel(){
        $AluguelModel = new AluguelModel();
        echo $AluguelModel->UpdateStatusAluguel();
    }

    Public Function ListarAlugueisDia(){
        $AluguelModel = new AluguelModel();
        echo $AluguelModel->ListarAlugueisDia();
    }

    Public Function ListarAlugueisAgendados(){
        $AluguelModel = new AluguelModel();
        echo $AluguelModel->ListarAlugueisAgendados();
    }

    Public Function ListarTiposPagamento(){
        $AluguelModel = new AluguelModel();
        echo $AluguelModel->ListarTiposPagamento();
    }
}
$classController = new AluguelController();