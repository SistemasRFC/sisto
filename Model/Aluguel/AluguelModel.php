<?php
include_once(PATH."Model/BaseModel.php");
include_once(PATH."Dao/Aluguel/AluguelDao.php");
include_once(PATH."Model/ProdutoAluguel/ProdutoAluguelModel.php");
class AluguelModel extends BaseModel
{
    public function AluguelModel(){
        If (!isset($_SESSION)){
            ob_start();
            session_start();
        }
    }

    Public Function ListarAluguel($Json=true){
        $dao = new AluguelDao();
        $lista = $dao->ListarAluguel();
        if ($Json){
            return json_encode($lista);
        }else{
            return $lista;        
        }
    }
    
    Public Function InsertAluguel(){
        $dao = new AluguelDao();        
        $result = $dao->InsertAluguel($_SESSION['cod_usuario']);
        if ($result[0]){
            $codAluguel = $result[2];
            $produtoAluguelModel = new ProdutoAluguelModel();
            $result = json_decode($produtoAluguelModel->InsertProdutoAluguel($codAluguel));
            $result[2] = $codAluguel;
        }
        return json_encode($result);        
    }

    Public Function UpdateAluguel(){
        $dao = new AluguelDao();
        $result = $dao->UpdateAluguel($_SESSION['cod_usuario']);
        if ($result[0]){
            $codAluguel = $dao->Populate('codAluguel', 'I');
            $produtoAluguelModel = new ProdutoAluguelModel();
            if($dao->Populate('codProdutoAluguel', 'I') == ''){
                if($dao->Populate('codProdutoCor', 'I') != ''){
                    $result = json_decode($produtoAluguelModel->InsertProdutoAluguel($codAluguel));
                }
            }else{
                $result = json_decode($produtoAluguelModel->UpdateProdutoAluguel($codAluguel));
            }
            $result[2] = $codAluguel;
        }
        return json_encode($result);
    }	
 
    Public Function ListarAlugueisDia(){
        $dao = new AluguelDao();
        $lista = $dao->ListarAlugueisDia();
        if($lista[0] && $lista[1]['COD_ALUGUEL']=null){
            $lista[0] = false;
            $lista[1] = null;
        }
        return json_encode($lista);
    }
    
    Public Function ListarAlugueisAgendados($Json=true){
        $dao = new AluguelDao();
        $lista = $dao->ListarAlugueisAgendados();
        if($lista[0] && $lista[1]['COD_ALUGUEL']=null){
            $lista[0] = false;
            $lista[1] = null;
        }
        if ($Json){
            return json_encode($lista);
        }else{
            return $lista;        
        }
    }
}

