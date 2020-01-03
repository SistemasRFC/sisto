$(function() {
    $("#btnSalvarUsuario").click(function(){
        if($("#codUsuario").val() === ''){
            inserirUsuario();
        }else{
            updateUsuario();
        }
    });
    $("#btnReiniciaSenha").click(function(){
        ExecutaDispatch('Usuario', 'ReiniciarSenha', 'codUsuario;'+$("#codUsuario").val(), retornoReiniciaSenha);
    });
});

function inserirUsuario(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });    
    var indAtivo='N';
    if ($("#indAtivo").is(":checked")){
        indAtivo = 'S';
    }
    parametros = 'nmeUsuario;'+$("#txtLogin").val()+'|nmeUsuarioCompleto;'+$("#nmeUsuario").val()+'|nroTelCelular;'+$("#nroCelular").val();
    parametros += '|txtEmail;'+$("#txtEmail").val()+'|codPerfil;'+$("#comboPerfil").val()+'|indAtivo;'+indAtivo;
    ExecutaDispatch('Usuario', 'InsertUsuario', parametros, retornoInsertUsuario);
}

function retornoInsertUsuario(retorno){
    if (retorno[0]){
        $("#codUsuario").val('');
        carregaGridUsuario();
        swal({
            title: "Sucesso!",
            text: "Registro salvo com sucesso!\n\r A Senha para Acessar é: 123459.",
            type: "success",
            confirmButtonText: "Fechar"
        });        
        $("#cadUsuario").modal("hide");
    }else{
        $(".jquery-waiting-base-container").fadeOut({modo:"fast"});
        swal({
            title: "Erro!",
            text: retorno[1],
            type: "error",
            confirmButtonText: "Fechar"
        });
    }
}


function carregaCamposUsuario(indice){
    $("#codUsuario").val(dadosListagem[indice].COD_USUARIO);
    $("#nmeUsuario").val(dadosListagem[indice].NME_USUARIO_COMPLETO);
    $("#txtEmail").val(dadosListagem[indice].TXT_EMAIL);
    $("#nroCelular").val(dadosListagem[indice].NRO_TEL_CELULAR);
    $("#txtLogin").val(dadosListagem[indice].NME_USUARIO);
    $("#comboPerfil").val(dadosListagem[indice].COD_PERFIL);
    if(dadosListagem[indice].IND_ATIVO == 'N'){
        $("#indAtivo").prop('checked', false);
    }else{
        $("#indAtivo").prop('checked','checked');
    }
    $("#btnReiniciaSenha").show();
    $("#cadUsuario").modal('show');
}

function updateUsuario(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });    
    var indAtivo='N';
    if ($("#indAtivo").is(":checked")){
        indAtivo = 'S';
    }
    parametros = 'codUsuario;'+$("#codUsuario").val()+'|nmeUsuario;'+$("#txtLogin").val()+'|nmeUsuarioCompleto;'+$("#nmeUsuario").val()+'|nroTelCelular;'+$("#nroCelular").val();
    parametros += '|txtEmail;'+$("#txtEmail").val()+'|codPerfil;'+$("#comboPerfil").val()+'|indAtivo;'+indAtivo;
    ExecutaDispatch('Usuario', 'UpdateUsuario', parametros, retornoUpdateUsuario);
}

function retornoUpdateUsuario(retorno){
    if (retorno[0]){
        $("#codUsuario").val('');
        carregaGridUsuario();
        swal({
            title: "Sucesso!",
            text: "Registro salvo com sucesso!",
            type: "success",
            confirmButtonText: "Fechar"
        });        
        $("#cadUsuario").modal("hide");
    }else{
        $(".jquery-waiting-base-container").fadeOut({modo:"fast"});
        swal({
            title: "Erro!",
            text: retorno[1],
            type: "error",
            confirmButtonText: "Fechar"
        });
    }
}

function listaComboPerfil(){
    ExecutaDispatch('Perfil', 'ListarPerfilAtivo', undefined, montaComboPerfil);
}

function montaComboPerfil(dados){
    if(dados[0]){
        dados = dados[1];
         combo = '<select id="comboPerfil" class="btn btn-outline-secondary dropdown-toggle" >';
         combo += '<option value="" disabled selected hidden>Selecione uma opção</option>';
        for (i=0;i<dados.length;i++){
            combo += '<option value="'+dados[i].COD_PERFIL+'">'+dados[i].DSC_PERFIL+'</option>';
        }
         combo +='</select>';
         $("#divComboPerfil").html(combo);
    }
}

function retornoReiniciaSenha(retorno){
    if (retorno[0]){
        $("#codUsuario").val('');
        carregaGridUsuario();
        swal({
            title: "Sucesso!",
            text: "Senha reiniciada com sucesso!\n\r A Senha para Acessar é: 123459.",
            type: "success",
            confirmButtonText: "Fechar"
        });        
        $("#cadUsuario").modal("hide");
    }else{
        $(".jquery-waiting-base-container").fadeOut({modo:"fast"});
        swal({
            title: "Erro!",
            text: retorno[1],
            type: "error",
            confirmButtonText: "Fechar"
        });
    }
}

$(document).ready(function() {
    listaComboPerfil();
} );