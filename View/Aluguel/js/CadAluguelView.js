$(function() {
    $("#btnSalvarAluguel").click(function(){
        if($("#dtaAluguel").val() == '' || $("#comboSituacao").val() == '' || $("#comboCliente").val() == ''){
            swal({
                title: "Aviso!",
                text: "Preencha todos os Campos!",
                type: "info",
                confirmButtonText: "Fechar"
            }); 
        }else{
            if($("#codAluguel").val() === ''){
                inserirAluguel();
            }else{
                updateAluguel();
            }
        }
    });
    
    $('.input-group.date').datepicker({
    	format: 'dd/mm/yyyy',
    	language: 'pt-BR',
    	weekStart: 0,
    	todayHighlight: true
    });
});
    
function inserirAluguel(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    var qtdDisponivel = $('#comboboxProduto option:selected').attr('qtdDisponivel');
    parametros = 'dtaAluguel;'+$("#dtaAluguel").val()+'|codCliente;'+$("#comboCliente").val()+'|codSituacao;'+$("#comboSituacao").val()+'|codProdutoCor;'+$("#comboboxProduto").val()+'|qtdProdutoAluguel;'+$("#qtdProdutoAluguel").val()+'|qtdDisponivel;'+qtdDisponivel;
    ExecutaDispatch('Aluguel', 'InsertAluguel', parametros, retornoInsertAluguel);
}

function retornoInsertAluguel(retorno){
    if (retorno[0]){
        carregaGridAluguel();
        $("#codAluguel").val(retorno[2]);
        listaProdutosAluguel(retorno[2]);
//        $("#dtaAluguel").val('');
//        $("#comboCliente").val('');
//        $("#comboSituacao").val('');
//        $("#comboboxProduto").val('');
//        $("#qtdProdutoAluguel").val('');
//        $('#codProdutoAluguel').val('');
//        $("#tabelaProdutosAluguel").hide();
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


function carregaCamposAluguel(codAluguel, dtaAluguel, codCliente, codSituacao){
    $("#codAluguel").val(codAluguel);
    $("#dtaAluguel").val(dtaAluguel).change;
    $("#comboCliente").val(codCliente);
    $("#comboSituacao").val(codSituacao);
    listaProdutosAluguel(codAluguel);
    $("#cadProdutoCor").show();
}

function updateAluguel(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    var qtdDisponivel = $('#comboboxProduto option:selected').attr('qtdDisponivel');
    parametros = 'codAluguel;'+$("#codAluguel").val()+'|dtaAluguel;'+$("#dtaAluguel").val()+'|codCliente;'+$("#comboCliente").val();
    parametros += '|codSituacao;'+$("#comboSituacao").val()+'|codProdutoCor;'+$("#comboboxProduto").val()+'|qtdProdutoAluguel;'+$("#qtdProdutoAluguel").val()+'|qtdDisponivel;'+qtdDisponivel;
    ExecutaDispatch('Aluguel', 'UpdateAluguel', parametros, retornoInsertAluguel);
}

function listaComboSituacao(){
    ExecutaDispatch('Situacao', 'ListarSituacao', undefined, montaComboSituacao);
}

function montaComboSituacao(dados){
    if(dados[0]){
        dados = dados[1];
         combo = '<select id="comboSituacao" class="btn btn-outline-secondary dropdown-toggle" >';
         combo += '<option value="" disabled selected hidden>Selecione uma opção</option>';
        for (i=0;i<dados.length;i++){
            combo += '<option value="'+dados[i].COD_SITUACAO+'">'+dados[i].DSC_SITUACAO+'</option>';
        }
         combo +='</select>';
         $("#divComboSituacao").html(combo);
    }
}

function listarComboCliente(){
    ExecutaDispatch('Cliente', 'ListarClientes', undefined, montaComboCliente);
}

function montaComboCliente(dados){
    if(dados[0]){
        dados = dados[1];
         combo = '<select id="comboCliente" class="btn btn-outline-secondary dropdown-toggle" >';
         combo += '<option value="" disabled selected hidden>Selecione uma opção</option>';
        for (i=0;i<dados.length;i++){
            combo += '<option value="'+dados[i].COD_CLIENTE+'">'+dados[i].NME_CLIENTE+'</option>';
        }
         combo +='</select>';
         $("#divComboCliente").html(combo);
    }
}

$(document).ready(function(){
    listaComboSituacao();
    listarComboCliente();
    $("#dtaAluguel").change(function () {
        if($(this).val() == ''){
            $("#cadProdutoCor").hide();
        }else{
            $("#cadProdutoCor").show();
            listarComboboxProduto($(this).val());
        }
    });
    $("#dtaAluguel").change();
});