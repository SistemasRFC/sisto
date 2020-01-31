<?php
include_once(PATH."Model/BaseModel.php");
include_once(PATH."Dao/Cliente/ClienteDao.php");
include_once(PATH . "Resources/php/FuncoesString.php");
class ClienteModel extends BaseModel
{
    public function ClienteModel(){
        If (!isset($_SESSION)){
            ob_start();
            session_start();
        }
    }

    Public Function ListarClientes($Json=true){
        $dao = new ClienteDao();
        $lista = $dao->ListarClientes();
        if ($Json){
            return json_encode($lista);
        }else{
            return $lista;        
        }
    }

    Public Function ListarClientesAutoComplete(){
        $dao = new ClienteDao();
        $lista = $dao->ListarClientesAutoComplete();
        return json_encode($lista);
    }
    
    Public Function InsertCliente(){
        $dao = new ClienteDao();
        BaseModel::PopulaObjetoComRequest($dao->getColumns());
        $result = $this->VerificaCampos();
        if($result[0]) {
            $result = $dao->InsertCliente($this->objRequest);
        }
        return json_encode($result);        
    }

    Public Function UpdateCliente(){
        $dao = new ClienteDao();
        BaseModel::PopulaObjetoComRequest($dao->getColumns());
        $result = $this->VerificaCampos();
        if($result[0]) {
            $result = $dao->UpdateCliente($this->objRequest);
        }
        return json_encode($result);
    }

    Public Function BuscaEnderecoCliente(){
        $dao = new ClienteDao();
        BaseModel::PopulaObjetoComRequest($dao->getColumns());
        $result = $this->ValidaCodCliente();
        if($result[0]){
            $result = $dao->BuscaEnderecoCliente($this->objRequest);
        }
        return json_encode($result);
    }

    Public Function PesquisaCep(){
        $ch = curl_init();
        $cep = str_replace('.', '', filter_input(INPUT_POST, 'nroCep', FILTER_SANITIZE_STRING));
        $cep = str_replace('-', '', $cep);
        $url = "http://viacep.com.br/ws/".$cep."/json/";
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $body = curl_exec($ch);
        $retorno[0]=true;
        $retorno[1]=array(json_decode($body));
        echo json_encode($retorno);;
    }

    Public Function VerificaCampos() {
        $result=array(true, '');
        if (!isset($this->objRequest->nmeCliente) || trim($this->objRequest->nmeCliente)=='') {
            $result[0] = false;
            $result[1] .= "Preencha o Nome do cliente'\n";
        }
        if (!isset($this->objRequest->nroCpf) || trim($this->objRequest->nroCpf)=='') {
            $result[0] = false;
            $result[1] .= "Preencha o CPF do Cliente'\n";
        } else if(!FuncoesString::validaCPF($this->objRequest->nroCpf)){
            $result[0] = false;
            $result[1] .= "CPF inválido'\n";
        }
        if (!isset($this->objRequest->nroTelefone) || trim($this->objRequest->nroTelefone)=='' || $this->objRequest->nroTelefone == '() _____-____'){
            $result[0] = false;
            $result[1] .= "Preencha o Telefone do Cliente'\n";
        }
        if (!isset($this->objRequest->txtEmail)){
            $result[0] = false;
            $result[1] .= "Preencha o E-mail do Cliente'\n";
        } else if(!filter_var($this->objRequest->txtEmail, FILTER_VALIDATE_EMAIL)) {
            $result[0] = false;
            $result[1] .= "Email inválido\n";
        }
        if (!isset($this->objRequest->dtaNascimento)){
            $result[0] = false;
            $result[1] .= "Preencha a Data de Nascimento do Cliente'\n";
        } else {
            $retorno = $this->validaNascimento($this->objRequest->dtaNascimento);
            if(!$retorno[0]){
                $result[0] = false;
                $result[1] .= $retorno[1];
            }
        }
        if (!isset($this->objRequest->nroCep) || trim($this->objRequest->nroCep)==''){
            $result[0] = false;
            $result[1] .= "Preencha o CEP do Cliente'\n";
        }
        if (!isset($this->objRequest->dscEndereco) || trim($this->objRequest->dscEndereco)==''){
            $result[0] = false;
            $result[1] .= "Preencha o Endereço do Cliente'\n";
        }
        return $result;
    }

    Public Function ValidaCodCliente() {
        $result=array(true, '');
        if ($this->objRequest->codCliente){
            $result[0] = false;
            $result[1] .= "Nenhum Cliente foi selecionado'\n";
        }
        return $result;
    }

    Public Function validaNascimento($dtaNascimento) {
        $retorno = array(true, '');

        if (substr($dtaNascimento,0,4) > date('Y') || substr($dtaNascimento,0,4) < date('Y')-99 || substr($dtaNascimento,5,2) > 12 || substr($dtaNascimento,5,2) == 0 || substr($dtaNascimento,8,2) > 31 || substr($dtaNascimento,8,2) == 0){
            $retorno[0] = false;
            $retorno[1] = "Informe uma 'Data de Nascimento' válida\n";
        } 
        // Verifica se já tem 18 anos
        // else if (date('Y') - substr($dtaNascimento,0,4) < 18){
        //     $retorno[0] = true;
        //     $retorno[1] = "Você não tem idade para se cadastrar conosco, sinto muito\n";
        // }
        
        // diferenca entre duas datas
        // if( isset($dtaNascimento) && $dtaNascimento != "" && isset($dtaAtual) && $dtaAtual != "") {
        //     $dtaNascimento = DateTime::createFromFormat('Y-m-d', $dtaNascimento);
        //     $dtaAtual = DateTime::createFromFormat('Y-m-d', $dtaAtual);
            
        //     if ((int)$dtaAtual->diff($dtaNascimento)->format('%y') < 18) {
        //         $retorno[0] = true;
        //         $retorno[1] = "Você não tem idade para se cadastrar conosco, sinto muito\n";
        //     }
        // }
        return $retorno;
    }

    
}

