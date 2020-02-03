<?php

include_once 'Constantes.php';
include_once(PATH."Controller/BaseController.php"); 
include_once(PATH."Model/ProdutoCor/ProdutoCorModel.php");

class ProdutoCorController extends BaseController{

    Public Function ListarProdutosCor(){
        $ProdutoCorModel = new ProdutoCorModel();
        echo $ProdutoCorModel->ListarProdutosCor();
    }
    
    Public Function DeleteProdutoCor(){
        $ProdutoCorModel = new ProdutoCorModel();
        echo $ProdutoCorModel->DeleteProdutoCor();        
    }
}
