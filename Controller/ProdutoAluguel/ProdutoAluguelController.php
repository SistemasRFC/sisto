<?php
include_once 'Constantes.php';
include_once(PATH."Controller/BaseController.php"); 
include_once(PATH."Model/ProdutoAluguel/ProdutoAluguelModel.php");
class ProdutoAluguelController extends BaseController
{
    /**
     * Redireciona para a Tela de  de ProdutoAluguel
     */
    Public Function ChamaView(){
        $params = array();
        echo ($this->gen_redirect_and_form(BaseController::ReturnView(BaseController::getPath(), get_class($this)), $params));
    }

    Public Function ListarProdutoAluguel(){
        $ProdutoAluguelModel = new ProdutoAluguelModel();
        echo $ProdutoAluguelModel->ListarProdutoAluguel();
    }
    
    Public Function InsertProdutoAluguel(){
        $ProdutoAluguelModel = new ProdutoAluguelModel();
        echo $ProdutoAluguelModel->InsertProdutoAluguel();
    }

    Public Function UpdateProdutoAluguel(){
        $ProdutoAluguelModel = new ProdutoAluguelModel();
        echo $ProdutoAluguelModel->UpdateProdutoAluguel();
    }	

    Public Function DeleteProdutoAluguel(){
        $ProdutoAluguelModel = new ProdutoAluguelModel();
        echo $ProdutoAluguelModel->DeleteProdutoAluguel();
    }	
}
$classController = new ProdutoAluguelController();