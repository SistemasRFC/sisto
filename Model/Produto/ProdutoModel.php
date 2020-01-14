<?php
include_once(PATH."Model/BaseModel.php");
include_once(PATH."Dao/Produto/ProdutoDao.php");
include_once(PATH."Resources/php/FuncoesMoeda.php");
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
            $lista = FuncoesMoeda::FormataMoedaInArray($lista, 'VLR_PRODUTO');
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
            $codVenda = $result[2];
            $array = explode("$", $_POST['codCor']);
            for ($i=0;$i<count($array)-1;$i++){
            $registro=explode('#',$array[$i]);
            $registro[1] = str_replace(",", ".", str_replace(".", "", $registro[1]));
            $result = $dao->InsertProdutoCor($codVenda, $registro[0], $registro[1], $registro[2]);    
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
            $array = explode("$", $_POST['codCor']);
            for ($i=0;$i<count($array)-1;$i++){
                $registro=explode('#',$array[$i]);
                if($registro[2] != 0){
                    $result = $dao->VerificaProdutoCor($registro[0]);
                    if($result[1] == NULL){
                        $result = $dao->InsertProdutoCor($registro[0], $registro[1], $registro[2]);
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
    
    Public Function InsertQtdProduto(){
        $dao = new ProdutoDao();
        $dao->IniciaTransacao();
        $result = $dao->VerificaEstoque();
        if($result[1] == NULL){
            $result = $dao->InsertQtdProduto();
        }else{
            $result = $dao->UpdateQtdProduto();
        }
        if($result [0]){
            $dao->ComitaTransacao();
        }else{
            $dao->RolbackTransacao();
        }
        return json_encode($result);
    }

    Public Function ListarProdutoCor($Json=true){
        $dao = new ProdutoDao();
        $lista = $dao->ListarProdutoCor();
        if ($Json){
            return json_encode($lista);
        }else{
            return $lista;        
        }
    }
}

