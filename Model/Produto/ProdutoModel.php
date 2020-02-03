<?php
include_once(PATH."Model/BaseModel.php");
include_once(PATH."Dao/Produto/ProdutoDao.php");
include_once(PATH."Model/ProdutoCor/ProdutoCorModel.php");
include_once(PATH."Resources/php/FuncoesMoeda.php");
include_once(PATH."Resources/php/FuncoesData.php");
class ProdutoModel extends BaseModel
{
    public function ProdutoModel(){
        If (!isset($_SESSION)){
            ob_start();
            session_start();
        }
    }

    Public Function ListarProdutos($Json=true){
        $dao = new ProdutoDao();
        $lista = $dao->ListarProdutos();
        if ($lista[0]){
            $totalRegistro = count($lista[1]);
            $total=0;
            for($i=0;$i<$totalRegistro;$i++){
                $total+=$lista[1][$i]['VLR_PRODUTO'];
            }
            $lista = FuncoesMoeda::FormataMoedaInArray($lista, 'VLR_PRODUTO');
            $lista[2] = FuncoesMoeda::FormataMoeda($total);
        }
        if ($Json){
            return json_encode($lista);
        }else{
            return $lista;        
        }
    }
    
    Public Function InsertProduto(){
        $ProdutoDao = new ProdutoDao();
        $result = $ProdutoDao->InsertProduto();
        if($result[0]){
            $codProduto = $result[2];
            $ProdutoCorModel = new ProdutoCorModel();
            $result = $ProdutoCorModel->InsertProdutoCor($codProduto, $_POST['codCor'], false);
        }
        return json_encode($result);        
    }

    Public Function UpdateProduto(){
        $dao = new ProdutoDao();
        $result = $dao->UpdateProduto();
        if($result[0]){
            $codProduto = filter_input(INPUT_POST, 'codProduto', FILTER_SANITIZE_NUMBER_INT);
            $ProdutoCorModel = new ProdutoCorModel();
            $result = $ProdutoCorModel->UpdateProdutoCor($codProduto, $_POST['codCor'], false);
        }
        return json_encode($result);
    }

    Public Function ListarProdutoCorAutoComplete($Json=true){
        $dao = new ProdutoDao();
        $lista = $dao->ListarProdutoCorAutoComplete();
        if($lista[0]) {
            $total = count($lista[1]);
            for($i =0; $i < $total; $i++) {
                $lista[1][$i]['VLR_PRODUTO_COR'] = FuncoesMoeda::FormataMoeda($lista[1][$i]['VLR_PRODUTO_COR']);
            }
        }
        if ($Json){
            return json_encode($lista[1]);
        }else{
            return $lista;        
        }
    }
    
    Public Function ListarProdutosPorDia($Json=true){
        $dao = new ProdutoDao();
        $dataInicial = $dao->Populate('dtaAluguel', 'S');
        $valor = -1;
        for($i=0;$i<7;$i++){
            $data[] = FuncoesData::makeDate($dataInicial, $valor);
            $valor++;
        }
        if ($Json){
            return json_encode($dao->ListarProdutosPorDia($data, $dao->Populate('codProdutoCor', 'I')));
        }else{
            return $dao->ListarProdutosPorDia($data, $dao->Populate('codProdutoCor', 'I'));        
        }
    }
}

