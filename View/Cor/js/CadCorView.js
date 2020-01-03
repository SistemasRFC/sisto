$(function() {
    $("#btnSalvarCor").click(function(){
        if($("#dscCor").val() == ''){
            swal({
                title: "Aviso!",
                text: "Nenhum campo foi preenchido",
                type: "info",
                confirmButtonText: "Fechar"
            }); 
        }else{
            if($("#codCor").val() === ''){
                inserirCor();
            }else{
                updateCor();
            }
        }
    });
});
    
function inserirCor(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    var indAtivo = 'N';
    if($('#indCorAtivo').is(":checked")){
        indAtivo = 'S';
    }
    parametros = 'dscCor;'+$("#dscCor").val()+'|indAtivo;'+indAtivo;
    ExecutaDispatch('Cor', 'InsertCor', parametros, retornoInsertCor);
}

function retornoInsertCor(retorno){
    if (retorno[0]){
        $("#codCor").val('');
        $("#dscCor").val('');
        $("#indCorAtivo").prop('checked', false);
        carregaGridCores();
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


function carregaCamposCor(codCor, dscCor, indAtivo){
    $("#codCor").val(codCor);
    $("#dscCor").val(dscCor);
    if(indAtivo == 'S'){
        $("#indCorAtivo").prop('checked', true);
    }else{
        $("#indCorAtivo").prop('checked', false);
    }
}

function updateCor(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    var indAtivo = 'N';
    if($('#indCorAtivo').is(":checked")){
        indAtivo = 'S';
    }
    parametros = 'codCor;'+$("#codCor").val()+'|dscCor;'+$("#dscCor").val()+'|indAtivo;'+indAtivo;
    ExecutaDispatch('Cor', 'UpdateCor', parametros, retornoInsertCor);
}