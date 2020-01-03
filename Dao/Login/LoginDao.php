<?php
include_once 'Dao/BaseDao.php';
include_once 'Resources/php/FuncoesArray.php';

class LoginDao extends BaseDao{
    Protected $tableName = "SE_USUARIO";
    
    Protected $columns = array ("nmeUsuario"           => array("column" => "NME_USUARIO", "typeColumn" => "S"),
                                "txtSenha"             => array("column" => "TXT_SENHA", "typeColumn" => "P"), 
                                "codPerfil"            => array("column" => "COD_PERFIL", "typeColumn" => "I"),
                                "indAtivo"             => array("column" => "IND_ATIVO", "typeColumn" => "S"));
    
    Protected $columnKey = array("codUsuario"          => array("column" => "COD_USUARIO", "typeColumn" => "I")); 
    
    Public Function Logar($objRequest){
        $sql = "SELECT COD_USUARIO,
                       COD_PERFIL
                  FROM SE_USUARIO
                 WHERE NME_USUARIO = '".$objRequest->nmeUsuario."'
                   AND TXT_SENHA   = '".$objRequest->txtSenha."'";
        return $this->selectDB($sql, false);
    }
    
    Public Function AlteraSenha($objRequest){
        $sql = "UPDATE ".$this->tableName."
                   SET TXT_SENHA = '".$objRequest->txtSenhaNova."'
                 WHERE COD_USUARIO = ".$objRequest->codUsuario;
        return $this->insertDB($sql, false);
    }
    
    Public Function VerificaSenhaAtual($objRequest){
        $sql = "SELECT COUNT(COD_USUARIO) AS QTD
                  FROM SE_USUARIO
                 WHERE COD_USUARIO = ".$objRequest->codUsuario."
                   AND TXT_SENHA   = '".$objRequest->txtSenhaAtual."'";
        return $this->selectDB($sql, false);
    }
    
    Public Function VerificaUsuario(){
        $sql = "SELECT COALESCE(COUNT(*),0) AS QTD 
                  FROM SE_USUARIO
                 WHERE NME_USUARIO = '".$this->Populate('nmeUsuario')."'";
        return $this->selectDB($sql, false);
    }
    
    Public Function VerificaEmail(){
        $sql = "SELECT COALESCE(COUNT(*),0) AS QTD 
                  FROM SE_USUARIO
                 WHERE TXT_EMAIL = '".$this->Populate('txtEmail')."'";
        return $this->selectDB($sql, false);
    }
    
    Public Function InsereCadastro(){
        $codUsuario = $this->CatchUltimoCodigo($this->tableName, 'COD_USUARIO');
        $sql = "INSERT INTO SE_USUARIO (COD_USUARIO, 
                                        NME_USUARIO, 
                                        COD_USUARIO_PAI, 
                                        NME_USUARIO_COMPLETO, 
                                        TXT_SENHA, 
                                        NRO_TEL_CELULAR, 
                                        TXT_EMAIL, 
                                        COD_PERFIL,
                                        IND_ATIVO)
                VALUES(".$codUsuario.",
                       '".$this->Populate('nmeUsuario')."',
                       ".$this->Populate('codPatrocinador').",
                       '".$this->Populate('nmeCompleto')."', 
                       '".md5($this->Populate('txtSenha'))."', 
                       '".$this->Populate('nroTelefone')."', 
                       '".$this->Populate('txtEmail')."', 
                       2,
                       'S')";
        return $this->insertDB($sql);
    }
}

