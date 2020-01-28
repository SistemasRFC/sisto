<?php
include_once(PATH."Model/BaseModel.php");
include_once(PATH."Dao/Aluguel/AluguelDao.php");
include_once(PATH."Model/ProdutoAluguel/ProdutoAluguelModel.php");
include_once(PATH."Resources/php/FuncoesMoeda.php");
class AluguelModel extends BaseModel
{
    public function AluguelModel(){
        If (!isset($_SESSION)){
            ob_start();
            session_start();
        }
    }

    Public Function ListarAluguel(){
        $dao = new AluguelDao();
        $lista = $dao->ListarAluguel();
        if($lista[0]) {
            $lista = FuncoesMoeda::FormataMoedaInArray($lista, 'VLR_TOTAL');
            if($lista[1] != null) {
                for ($i = 0;$i < count($lista[1]); $i++) {
                    $produtos = $dao->ListarProdutosAluguel($lista[1][$i]['COD_ALUGUEL']);
                    // var_dump($produtos);
                    if($produtos[0]) {
                        $lista[1][$i]['PRODUTOS'] = $produtos[1];
                    }
                }

            }
        }
        return json_encode($lista);
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
            $codAluguel = $dao->Populate('codVenda', 'I');
            $produtoAluguelModel = new ProdutoAluguelModel();
            if($dao->Populate('codProdutoAluguel', 'I') == ''){
                $result = json_decode($produtoAluguelModel->InsertProdutoAluguel($codAluguel));
            }else{
                $result = json_decode($produtoAluguelModel->UpdateProdutoAluguel($codAluguel));
            }
            $result[2] = $codAluguel;
        }
        return json_encode($result);
    }	

    Public Function UpdateStatusAluguel(){
        $dao = new AluguelDao();
        $result = $dao->UpdateStatusAluguel();
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
    
    Public Function ListarAlugueisAgendados(){
        $dao = new AluguelDao();
        $lista = $dao->ListarAlugueisAgendados();
        
        return json_encode($lista);
    }
}

