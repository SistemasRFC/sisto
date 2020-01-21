<?php
include_once 'Constantes.php';
include_once(PATH."Controller/BaseController.php"); 
include_once(PATH."Model/Produto/ProdutoModel.php");
class ProdutoController extends BaseController
{
    /**
     * Redireciona para a Tela de  de Produto
     */
    Public Function ChamaView(){
        $params = array();
        echo ($this->gen_redirect_and_form(BaseController::ReturnView(BaseController::getPath(), get_class($this)), $params));
    }

    Public Function ListarProdutos(){
        $ProdutoModel = new ProdutoModel();
        echo $ProdutoModel->ListarProdutos();
    }
    
    Public Function InsertProduto(){
        $ProdutoModel = new ProdutoModel();
        echo $ProdutoModel->InsertProduto();
    }

    Public Function UpdateProduto(){
        $ProdutoModel = new ProdutoModel();
        echo $ProdutoModel->UpdateProduto();
    }	

    Public Function InsertQtdProduto(){
        $ProdutoModel = new ProdutoModel();
        echo $ProdutoModel->InsertQtdProduto();
    }

    Public Function ListarProdutoCorAutoComplete(){
        $ProdutoModel = new ProdutoModel();
        echo $ProdutoModel->ListarProdutoCorAutoComplete();
    }
    
    Public Function ListarProdutosPorDia(){
        $ProdutoModel = new ProdutoModel();
        echo $ProdutoModel->ListarProdutosPorDia();        
    }
}
$classController = new ProdutoController();