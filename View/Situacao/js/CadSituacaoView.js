$(function() {
    $("#btnSalvarSituacao").click(function(){
        if($("#dscSituacao").val() == ''){
        swal({
            title: "Aviso!",
            text: "Nenhum campo foi preenchido",
            type: "info",
            confirmButtonText: "Fechar"
        }); 
        }else{
            if($("#codSituacao").val() === ''){
                inserirSituacao();
            }else{
                updateSituacao();
            }
        }
    });

});

function inserirSituacao(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    ExecutaDispatch('Situacao', 'InsertSituacao', 'dscSituacao;'+$("#dscSituacao").val(), retornoInsertSituacao);
}

function retornoInsertSituacao(retorno){
    
    if (retorno[0]){
        $("#codSituacao").val('');
        $("#dscSituacao").val('');
        carregaGridSituacao();
        swal({
            title: "Sucesso!",
            text: "Registro salvo com sucesso!",
            type: "success",
            confirmButtonText: "Fechar"
        });
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


function carregaCamposSituacao(codSituacao, dscSituacao){
    $("#codSituacao").val(codSituacao);
    $("#dscSituacao").val(dscSituacao);
}

function updateSituacao(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    parametros = 'codSituacao;'+$("#codSituacao").val()+'|dscSituacao;'+$("#dscSituacao").val();
    ExecutaDispatch('Situacao', 'UpdateSituacao', parametros, retornoInsertSituacao);
}