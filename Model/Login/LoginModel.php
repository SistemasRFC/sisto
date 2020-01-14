<?php
include_once 'Model/BaseModel.php';
include_once 'Dao/Login/LoginDao.php';

class LoginModel extends BaseModel{
    
    Public Function Logar(){
        $LoginDao = new LoginDao();
        $this->PopulaObjetoComRequest($LoginDao->GetColumns(), $LoginDao);
        $result = $LoginDao->Logar($this->objRequest);
        if ($result[0]){
            if ($result[1]!=null){
                static::AtualizaSessao($result[1]);
                $result[1][0]['DSC_PAGINA'] = 'MenuPrincipal';
                $result[1][0]['NME_METHOD'] = 'ChamaView';
            }else{
                $result[0] = false;
                $result[1] = 'Usuário não encontrado!';
            }
        }
        return json_encode($result);
    }
    
    Public Function Registrar(){
        $loginDao = new LoginDao();
        $result = $loginDao->VerificaUsuario();
        if ($result[0]){
            if ($result[1][0]['QTD']>0){
                $result[0]=false;
                $result[1]='Já existe um usuário com este login!';
            }else{
                $result = $loginDao->VerificaEmail();
                if ($result[0]){
                    if ($result[1][0]['QTD']>0){
                        $result[0]=false;
                        $result[1]='Já existe um usuário com este email!';
                    }else{                
                        $result = $loginDao->InsereCadastro();
                    }
                }
            }
        }
        return json_encode($result);
    }
    
    Public Function AlteraSenha(){
        $LoginDao = new LoginDao();
        $this->RecuperaRequest(true);
        $this->objRequest->codUsuario = $_SESSION['cod_usuario'];
        $result = $this->VerificaSenhaAtual();
        if ($result[0]){
            $result = $LoginDao->AlteraSenha($this->objRequest);
            if ($result[0]){
                if ($result[1]){        
                    $result[1]['TXT_MSG'] = 'Senha Alterada!';
                    $result[1]['DSC_PAGINA'] = '../../Controller/MenuPrincipal/MenuPrincipalController.php';
                    $result[1]['NME_METHOD'] = 'ChamaView';
                }
            }
        }
        return json_encode($result);
    }
    
    Public Function AtualizaSessao($dados){
        $_SESSION['cod_usuario']=$dados[0]['COD_USUARIO'];
    }
    
    Public Function VerificaSenhaAtual(){
        $LoginDao = new LoginDao();
        $verifica = $LoginDao->VerificaSenhaAtual($this->objRequest);
        if ($verifica[0]){
            if ($verifica[1][0]['QTD']==0){
                return array(false, 'Senha atual não confere!');
            }
        }else{
            return array(false, 'Problema ao executar a consulta!');
        }
        return array(true, 'Senha Alterada!');
    }
}