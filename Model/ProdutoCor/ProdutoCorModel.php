<?php
include_once(PATH."Model/BaseModel.php");
include_once(PATH."Dao/ProdutoCor/ProdutoCorDao.php");
include_once(PATH."Resources/php/FuncoesMoeda.php");
class ProdutoCorModel extends BaseModel
{
    public function ProdutoCorModel(){
        If (!isset($_SESSION)){
            ob_start();
            session_start();
        }
    }	

    Public Function ListarProdutosCor($Json=true){
        $ProdutoCorDao = new ProdutoCorDao();
        $lista = $ProdutoCorDao->ListarProdutosCor();
        if ($lista[0]){
            $lista = FuncoesMoeda::FormataMoedaInArray($lista, 'VLR_PRODUTO_COR');
        }
        if ($Json){
            return json_encode($lista);
        }else{
            return $lista;        
        }
    }

    Public Function DeleteProdutoCor(){
        $ProdutoCorDao = new ProdutoCorDao();
        $result = $ProdutoCorDao->DeleteProdutoCor();
        return json_encode($result);
    }
    
    Public Function InsertProdutoCor($codProduto, $codCor, $json=true){
        $ProdutoCorDao = new ProdutoCorDao();
        $array = explode("$", $codCor);
        for ($i=0;$i<count($array)-1;$i++){
            $registro=explode('#',$array[$i]);
            $registro[1] = str_replace(",", ".", str_replace(".", "", $registro[1]));
            if($registro[1] && $registro[2]) {
                $result = $ProdutoCorDao->InsertProdutoCor($codProduto, $registro[0], $registro[1], $registro[2]);
            }
        }
        if ($json){ 
            return json_encode($result);
        }
        return $result;
    }
    
    Public Function UpdateProdutoCor($codProduto, $codCor, $json=true){
        $ProdutoCorDao = new ProdutoCorDao();        
        $array = explode("$", $codCor);
        $result[0]=true;
        for ($i=0;$i<count($array)-1;$i++){
            $registro=explode('#',$array[$i]);
            $registro[1] = str_replace(",", ".", str_replace(".", "", $registro[1]));
            if($registro[1] && $registro[2] != 0){
                $result = $ProdutoCorDao->VerificaProdutoCor($registro[0]);
                if($result[1] == NULL){
                    $result = $ProdutoCorDao->InsertProdutoCor($codProduto, $registro[0], $registro[1], $registro[2]);
                }else{
                    $result = $ProdutoCorDao->UpdateProdutoCor($registro[0], $registro[1], $registro[2]);
                }
            }
        }
        if($json){
            return json_encode($result);
        }
        return $result;
    }
}