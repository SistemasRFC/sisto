$(function() {
    $("#dtaAluguel").jqxDateTimeInput({ width: '220px', height: '40px', formatString: 'dd/MM/yyyy'});
    $("#dataRecibo").jqxDateTimeInput({ width: '220px', height: '40px', formatString: 'dd/MM/yyyy'});
    $("#nroCepEntrega").mask('99999-999');
    $("#bntIncCliente").click(function(){
        $(".cadCliente").val('');
       $("#modalCliente").modal('show');
    });

    $("#btnSalvarAluguel").click(function(){
        if($("#dtaAluguel").val() == '' || $("#codClienteAluguel").val() == ''){
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

    $("#btnSalvarCliente").click(function(){
        if($("#nmeCliente").val() == '' || $("#nroTelefone").val() == ''){
            swal({
                title: "Aviso!",
                text: "Preencha os campos: Nome e Telefone!",
                type: "info",
                confirmButtonText: "Fechar"
            }); 
        }else{
            inserirCliente();  
        }
    });

    $("#indEnderecoCad").change(function() {
        if ($(this).prop("checked")){
            var params = "codCliente;"+$("#codClienteAluguel").val();
            ExecutaDispatch('Cliente', 'BuscaEnderecoCliente', params, preencheEnderecoCliente);
        }
    });

    $("#nroCepEntrega").blur(function () {
        var params = 'nroCep;' + $(this).val();
        ExecutaDispatch('Cliente', 'PesquisaCep', params, preencheEnderecoEntrega, 'Aguarde, buscando endereço');
    });
});

function preencheEnderecoEntrega(retorno) {
    if (retorno[1][0] == null || retorno[1][0].erro) {
        swal({
            title: "Erro ao executar!",
            text: "Erro: CEP inválido",
            type: "error",
            confirmButtonText: "Fechar"
        });
        $("#dscEnderecoEntrega").val('');
    } else {
        swal.close();
        var endereco = "" + retorno[1][0].logradouro + " - " + retorno[1][0].bairro;
        $("#dscEnderecoEntrega").val(endereco);
    }
}

var cepRef;
function preencheEnderecoCliente(retorno) {
    if(retorno[1] !== null){
        cepRef = retorno[1][0]['NRO_CEP_CLIENTE'];
        $("#nroCepEntrega").val(retorno[1][0]['NRO_CEP_CLIENTE']);
        $("#dscEnderecoEntrega").val(retorno[1][0]['DSC_ENDERECO_CLIENTE']);
    } else {
        swal({
            title: "Aviso!",
            text: retorno[2],
            type: "info",
            confirmButtonText: "Fechar"
        }); 
    }
}
    
function inserirAluguel(){
    var params = retornaParametros('cadAluguel');
    ExecutaDispatch('Aluguel', 'InsertAluguel', params, retornoInsertAluguel, 'Aguarde, salvando aluguel', 'Aluguel salvo com sucesso!');
}

function retornoInsertAluguel(retorno){
    $("#codAluguel").val(retorno[2]);
    listaProdutosAluguel(retorno[2]);
    $("#codProdutoAluguel").val('');
    $("#codProdutoCorAluguel").val('');
    $("#dscProdutoAluguel").val('');
    $("#qtdProdutoAluguel").val('');
    $("#vlrProdutoAluguel").val('');
    $("#tabelaRefProduto").hide('fade');
}

function carregaCamposAluguel(indice){
    limpaCamposAluguel();
    $("#codAluguel").val(listaAluguel[indice].codVenda);
    $("#dtaAluguel").val(listaAluguel[indice].dtaVenda).change;
    $("#nmeClienteAluguel").val(listaAluguel[indice].nmeCliente);
    $("#codClienteAluguel").val(listaAluguel[indice].codCliente);
    $("#comboTipoPagamento").val(listaAluguel[indice].codTipoPagamento);
    $("#codTipoPagamento").val(listaAluguel[indice].codTipoPagamento);
    $("#dscEnderecoEntrega").val(listaAluguel[indice].dscEnderecoEntrega);
    $("#dscPontoReferencia").val(listaAluguel[indice].dscPontoReferencia);
    $("#nroCepEntrega").val(listaAluguel[indice].nroCepEntrega);
    if($("#nroCepEntrega").val() == cepRef) {
        $("#indEnderecoCad").prop('checked', true);
    } else {
        $("#indEnderecoCad").prop('checked', false);
    }
    $("#dataRecibo").val(listaAluguel[indice].dtaRecibo).change;
    listaProdutosAluguel(listaAluguel[indice].codVenda);
    $("#modalListaAlugueis").modal('hide');

}

function limpaCamposAluguel() {
    $("#codProdutoAluguel").val('');
    $("#codProdutoCorAluguel").val('');
    $("#dscProdutoAluguel").val('');
    $("#qtdProdutoAluguel").val('');
    $("#vlrProdutoAluguel").val('');
}

function updateAluguel(){
    var params = retornaParametros('cadAluguel');
    ExecutaDispatch('Aluguel', 'UpdateAluguel', params, retornoInsertAluguel, 'Aguarde, salvando aluguel', 'Aluguel salvo com sucesso!');
}

function retornoInsertCliente(retorno){
    $("#codClienteAluguel").val(retorno[2]);
    $("#nmeClienteAluguel").val($("#nmeCliente").val());
    $("#modalCliente").modal('hide');
}

function buscaTiposPagamento() {
    ExecutaDispatch('Aluguel', 'ListarTiposPagamento', undefined, montaComboTpoPagamento);
}

function montaComboTpoPagamento(tipos) {
    listaTipos = tipos[1];
    var combo = '<select id="comboTipoPagamento" class="form-control">';
    combo += '<option value="" selected disabled>Selecione...</option>';
    for (i=0;i<listaTipos.length;i++){
        combo += '<option value="'+listaTipos[i].COD+'">'+listaTipos[i].DSC+'</option>';
    }
    combo += '</select>';
    $("#tdCodTipoPagamento").html(combo);
    $("#comboTipoPagamento").change(function () {
        $("#codTipoPagamento").val($(this).val());
    });

}

$(document).ready(function(){
    buscaTiposPagamento();
    $("#dtaAluguel").val('');
    $("#dataRecibo").val('');
    $("#dtaAluguel").change(function () {
        if($(this).val() == ''){
            $("#cadProdutoCor").hide('fade');
        }else{
            $("#cadProdutoCor").show('fade');
            $("#dtaVenda").val($(this).val());
        }
    });
    $("#dataRecibo").change(function () {
        $("#dtaRecibo").val($(this).val());
    });
    $("#dtaAluguel").change();

    $("#nmeClienteAluguel").keyup(function(key){ 
        if ((key.keyCode!=40) && (key.keyCode!=38)){
            if ($(this).val().trim()!=''){
                var autoComplete = new AutoCompleteClass();
                autoComplete._height=150;
                autoComplete._nmeDiv='painelAutoComplete';
                autoComplete._nmeInput=$(this).attr('id');
                autoComplete._dataField="codClienteAluguel;COD|nmeClienteAluguel;TEXT";
                autoComplete._camposPesquisa='controller;Cliente|method;ListarClientesAutoComplete|verificaPermissao;N|term;'+$("#nmeClienteAluguel").val();
                autoComplete._displayMember="TEXT";
                autoComplete._valueMember="COD";
                
                autoComplete.CriarDivAutoComplete();            
            }else{
                if ( $("#divAutoComplete").length ){
                    $("#divAutoComplete").jqxWindow("destroy");
                }
            }
        }else{            
            $("#listaPesquisa").jqxListBox('selectedIndex' ,0);
            $("#listaPesquisa").jqxListBox("focus");
        }
    });
    
    $("#nmeClienteAluguel").focus(function(){
        if ($("#divAutoComplete").length){
            $("#divAutoComplete").jqxWindow("destroy");
        }
    }); 

    $("input[type=text]").focus(function(){
        if ($("#divAutoComplete").length){
            $("#divAutoComplete").jqxWindow("destroy");
        }
    }); 
   
});