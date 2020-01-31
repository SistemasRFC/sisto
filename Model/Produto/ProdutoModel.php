<?php
include_once(PATH."Model/BaseModel.php");
include_once(PATH."Dao/Produto/ProdutoDao.php");
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
        $dao = new ProdutoDao();
        $dao->IniciaTransacao();
        $result = $dao->InsertProduto();
        if($result[0]){
            $codProduto = $result[2];
            $array = explode("$", $_POST['codCor']);
            for ($i=0;$i<count($array)-1;$i++){
                $registro=explode('#',$array[$i]);
                $registro[1] = str_replace(",", ".", str_replace(".", "", $registro[1]));
                if($registro[1] && $registro[2]) {
                    $result = $dao->InsertProdutoCor($codProduto, $registro[0], $registro[1], $registro[2]);
                }
            }
            if($result[0]){
                $dao->ComitaTransacao();
            }else{
                $dao->RolbackTransacao();
            }
        }
        return json_encode($result);        
    }

    Public Function UpdateProduto(){
        $dao = new ProdutoDao();
        $dao->IniciaTransacao();
        $result = $dao->UpdateProduto();
        if($result[0]){
            $codProduto = filter_input(INPUT_POST, 'codProduto', FILTER_SANITIZE_NUMBER_INT);
            $array = explode("$", $_POST['codCor']);
            for ($i=0;$i<count($array)-1;$i++){
                $registro=explode('#',$array[$i]);
                $registro[1] = str_replace(",", ".", str_replace(".", "", $registro[1]));
                if($registro[1] && $registro[2] != 0){
                    $result = $dao->VerificaProdutoCor($registro[0]);
                    if($result[1] == NULL){
                        $result = $dao->InsertProdutoCor($codProduto, $registro[0], $registro[1], $registro[2]);
                    }else{
                        $result = $dao->UpdateProdutoCor($registro[0], $registro[1], $registro[2]);
                    }
                }
            }
            if($result[0]){
                $dao->ComitaTransacao();
            }else{
                $dao->RolbackTransacao();
            }
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

