<?php
include_once(PATH."Model/BaseModel.php");
include_once(PATH."Dao/ProdutoAluguel/ProdutoAluguelDao.php");
include_once(PATH."Resources/php/FuncoesMoeda.php");
class ProdutoAluguelModel extends BaseModel
{
    public function ProdutoAluguelModel(){
        If (!isset($_SESSION)){
            ob_start();
            session_start();
        }
    }

    Public Function ListarProdutoAluguel(){
        $dao = new ProdutoAluguelDao();
        $lista = $dao->ListarProdutoAluguel();
        if($lista[0]) {
            $lista = FuncoesMoeda::FormataMoedaInArray($lista, 'VLR_PRODUTO_ALUGUEL');
            $lista = FuncoesMoeda::FormataMoedaInArray($lista, 'VLR_ALUGUEL');
        }
        return json_encode($lista);
    }
    
    Public Function InsertProdutoAluguel($codAluguel=null){
        $dao = new ProdutoAluguelDao();
        BaseModel::PopulaObjetoComRequest($dao->getColumns());
        if ($codAluguel!==null){
            $this->objRequest->codVenda = $codAluguel;
        }
        // var_dump($this->objRequest); die;
        $result = $dao->InsertProdutoAluguel($this->objRequest);
        return json_encode($result);        
    }

    Public Function UpdateProdutoAluguel($codAluguel){
        $dao = new ProdutoAluguelDao();
        if($dao->Populate('codProdutoAluguel', 'I') == null){
            $result = $dao->InsertProdutoAluguel($codAluguel);
        }else{
            $result = $dao->DeleteProdutoAluguel();
            if($result[0]){
                $result = $dao->InsertProdutoAluguel($codAluguel);
            }
        }
        $result = $dao->UpdateProdutoAluguel();
        return json_encode($result);
    }

    Public Function DeleteProdutoAluguel(){
        $dao = new ProdutoAluguelDao();
        $result = $dao->DeleteProdutoAluguel();
        return json_encode($result);
    }
    
}

