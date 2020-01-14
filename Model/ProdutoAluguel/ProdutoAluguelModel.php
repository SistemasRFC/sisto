<?php
include_once(PATH."Model/BaseModel.php");
include_once(PATH."Dao/ProdutoAluguel/ProdutoAluguelDao.php");
class ProdutoAluguelModel extends BaseModel
{
    public function ProdutoAluguelModel(){
        If (!isset($_SESSION)){
            ob_start();
            session_start();
        }
    }

    Public Function ListarProdutoAluguel($Json=true){
        $dao = new ProdutoAluguelDao();
        $lista = $dao->ListarProdutoAluguel();
        if ($Json){
            return json_encode($lista);
        }else{
            return $lista;        
        }
    }
    
    Public Function InsertProdutoAluguel($codAluguel=null){
        $dao = new ProdutoAluguelDao();
        if ($codAluguel==null){
            $codAluguel = $dao->Populate('codAluguel','I');
        }
        if($dao->Populate('qtdProdutoAluguel', 'I') <= $dao->Populate('qtdDisponivel', 'I')){
            $result = $dao->InsertProdutoAluguel($codAluguel);
        }else{
            $result[0] = false;
            $result[1] = "Quantidade informada acima da quantidade disponível";
        }
        return json_encode($result);        
    }

    Public Function UpdateProdutoAluguel($codAluguel){
        $dao = new ProdutoAluguelDao();
        if($dao->Populate('codProdutoAluguel', 'I') == null){
            if($dao->Populate('qtdProdutoAluguel', 'I') <= $dao->Populate('qtdDisponivel', 'I')){
                $result = $dao->InsertProdutoAluguel($codAluguel);
            }else{
                $result[0] = false;
                $result[1] = "Quantidade informada acima da quantidade disponível";
            }
        }else{
            $result = $dao->DeleteProdutoAluguel();
            if($result[0]){
                if($dao->Populate('qtdProdutoAluguel', 'I') <= $dao->Populate('qtdDisponivel', 'I')){
                    $result = $dao->InsertProdutoAluguel($codAluguel);
                }else{
                    $result[0] = false;
                    $result[1] = "Quantidade informada acima da quantidade disponível";
                }
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

