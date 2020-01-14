<?php
include_once(PATH."Dao/BaseDao.php");
class UsuarioDao extends BaseDao
{
    Protected $tableName = "SE_USUARIO";
    
    Protected $columns = array ("nmeUsuario"   => array("column" =>"NME_USUARIO", "typeColumn" =>"S"),
                                "codUsuarioPai"   => array("column" =>"COD_USUARIO_PAI", "typeColumn" =>"I"),
                                "nmeUsuarioCompleto"   => array("column" =>"NME_USUARIO_COMPLETO", "typeColumn" =>"S"),
                                "txtSenha"   => array("column" =>"TXT_SENHA", "typeColumn" =>"S"),
                                "nroTelCelular"   => array("column" =>"NRO_TEL_CELULAR", "typeColumn" =>"S"),
                                "txtEmail"   => array("column" =>"TXT_EMAIL", "typeColumn" =>"S"),
                                "dtaInativo"   => array("column" =>"DTA_INATIVO", "typeColumn" =>"D"),
                                "codPerfil"   => array("column" =>"COD_PERFIL", "typeColumn" =>"I"),
                                "indAtivo"   => array("column" =>"IND_ATIVO", "typeColumn" =>"S"));
    
    Protected $columnKey = array("codUsuario"=> array("column" =>"COD_USUARIO", "typeColumn" => "I"));
    
    Public Function UsuarioDao(){
        $this->conect();
    }

    Public Function ListarUsuario(){
        $sql = "SELECT U.COD_USUARIO,
                       U.NME_USUARIO,
                       U.NME_USUARIO_COMPLETO,
                       U.NRO_TEL_CELULAR,
                       U.TXT_EMAIL,
                       U.COD_PERFIL,
                       P.DSC_PERFIL,
                       U.IND_ATIVO
                  FROM SE_USUARIO U
                 INNER JOIN SE_PERFIL P
                    ON U.COD_PERFIL = P.COD_PERFIL";
        return $this->selectDB($sql, false);
    }

    Public Function UpdateUsuario(){
        $sql =  "UPDATE SE_USUARIO
                    SET NME_USUARIO          = '".$this->Populate('nmeUsuario', 'S')."',
                        NME_USUARIO_COMPLETO = '".$this->Populate('nmeUsuarioCompleto', 'S')."',
                        NRO_TEL_CELULAR      = '".$this->Populate('nroTelCelular', 'S')."',
                        TXT_EMAIL            = '".$this->Populate('txtEmail', 'S')."',
                        COD_PERFIL           =  ".$this->Populate('codPerfil', 'I').", 
                        IND_ATIVO            = '".$this->Populate('indAtivo', 'S')."'
                  WHERE COD_USUARIO = ".$this->Populate('codUsuario', 'I');        
        $result = $this->insertDB("$sql");        
        if ($result[0]){
            $result[1]=  filter_input(INPUT_POST, 'codUsuario', FILTER_SANITIZE_NUMBER_INT);
        }
        return $result;
    }

    Public Function InsertUsuario(){
        $codUsuario = $this->CatchUltimoCodigo('SE_USUARIO', 'COD_USUARIO');
        $senha = md5('123459');
        $sql = " INSERT INTO SE_USUARIO
               (    COD_USUARIO,
                    NME_USUARIO,
                    NME_USUARIO_COMPLETO,
                    TXT_SENHA,
                    NRO_TEL_CELULAR,
                    TXT_EMAIL,
                    COD_PERFIL,
                    IND_ATIVO)
               VALUES
                (   ".$codUsuario.",
                    '".$this->Populate('nmeUsuario', 'S')."',
                    '".$this->Populate('nmeUsuarioCompleto', 'S')."',
                    '".$senha."',
                    '".$this->Populate('nroTelCelular', 'S')."',
                    '".$this->Populate('txtEmail', 'S')."',
                    ".$this->Populate('codPerfil', 'I').",
                    '".$this->Populate('indAtivo', 'S')."')";
        $result = $this->insertDB($sql);
        if ($result[0]){
            $result[1]= $codUsuario;
        }
        return $result;
    }
    
    function ReiniciarSenha(){        
        $senha = md5("123459");
        $sql =  "UPDATE SE_USUARIO
                          SET TXT_SENHA = '".$senha."'
                        WHERE COD_USUARIO = ".filter_input(INPUT_POST, 'codUsuario', FILTER_SANITIZE_NUMBER_INT);
        if ($this->insertDB("$sql")){
            return filter_input(INPUT_POST, 'codUsuario', FILTER_SANITIZE_NUMBER_INT);
        }else{
            return 0;
        }
    }
    
    Public Function ListarUsuariosAtivos(){
        $sql = "SELECT COD_USUARIO,
                       NME_USUARIO_COMPLETO
                  FROM SE_USUARIO
                 WHERE IND_ATIVO = 'S'";
        return $this->selectDB($sql, false);
    }
}
