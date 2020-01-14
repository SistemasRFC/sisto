<?php
include_once 'Constantes.php';
include_once(PATH."Controller/BaseController.php");
include_once(PATH."Model/Menu/MenuModel.php");

class MenuController extends BaseController{
    
    Public Function ChamaView(){
        $params = array('pagina' => '../../View/Menu/MenuView.php');        
        echo ($this->gen_redirect_and_form('View/Menu/MenuView.php', $params));        
    }
    
    Public Function CarregaMenu(){
        $MenuModel = new MenuModel();
        echo $MenuModel->CarregaMenu();         
    }
    
    Public Function CarregaMenuByCod(){
        $MenuModel = new MenuModel();
        echo $MenuModel->CarregaMenuByCod();         
    }
    
    Public Function SalvarMenu(){
        $MenuModel = new MenuModel();
        echo $MenuModel->SalvarMenu();
    }
    
    Public Function ListarMenusAtivos(){
        $MenuModel = new MenuModel();
        echo $MenuModel->ListarMenusAtivos();        
    }
    
    Public Function ListarClasses(){
        $pasta = getcwd();    
        $novo = explode('/', PATH.'Controller/');
        $pasta='';
        for ($i=0;$i<count($novo)-1;$i++){
            $pasta.=$novo[$i].'/';
        }         
        if (filter_input(INPUT_POST, 'pasta')!=''){
            $pasta = $pasta.filter_input(INPUT_POST, 'pasta').'/';
        }               
        $pasta = $this->PegarArquivosPasta($pasta);
        echo json_encode($pasta); 
    }

    Public Function PegarArquivosPasta($pasta){
        $diretorio = $pasta;
        $ponteiro  = opendir($diretorio);
        while ($nome_itens = readdir($ponteiro)) {
            $itens[] = $nome_itens;
        }
        sort($itens);
        $i=0;
        date_default_timezone_set("UTC");
        foreach ($itens as $listar) {
                $arquivosPasta[$i]['nmeArquivo'] = $listar;
                $arquivosPasta[$i]['dscTipo'] = filetype($pasta.$listar);
                if (filetype($pasta.$listar)=="dir"){
                    $arquivosPasta[$i]['dscTamanho'] = "0";
                }else{
                    $arquivosPasta[$i]['dscTamanho'] = filesize($pasta.$listar);
                }
                $arquivosPasta[$i]['dtaAlteracao'] = date ("d/m/Y H:i:s", filemtime($pasta.$listar));
                $i++;
        }
        return $arquivosPasta;
    }
    
    Public Function ListarMetodos(){
        $pastaAtual = PATH.'Controller/'. str_replace('.php','',str_replace('Controller','',filter_input(INPUT_POST, 'nmeController'))).'/';
        $classe = filter_input(INPUT_POST, 'nmeController');
        $arquivo = $pastaAtual.$classe.'Controller.php'; 
        if (file_exists($arquivo)){
            $file = fopen($arquivo, 'r');
            $linha='';
            while (!feof($file)){
                $linha = fgets($file, 4096);
                $linha = trim($linha);                
                $pos = strpos(strtoupper($linha), strtoupper(DSC_FUNC));                
                if ($pos){
                    $methodo=substr($linha,$pos+strlen(DSC_FUNC)+1);
                    $methodo=str_replace('{','',str_replace(')','',str_replace('(', ' ',$methodo)));
                    $methodo = explode(' ', $methodo);
                    $methods[]['dscMetodo'] = $methodo[0];
                }
                
            }
            fclose($file);
        }else{
            echo "cade o arquivo".$arquivo;
        }
        echo json_encode($methods);
    }
    
    Public Function ListarMenusPermissao(){
        $MenuModel = new MenuModel();
        echo $MenuModel->ListarMenusPermissao();          
    }
}
