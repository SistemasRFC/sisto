$(function() {
    $("#dtaAluguel").jqxDateTimeInput({ width: '300px', height: '40px', formatString: 'dd/MM/yyyy'});
    $("#bntIncCliente").click(function(){
        $("#codCliente").val(0);
        $("#nmeCliente").val('');
        $("#nroCpf").val('');
        $("#nroTelefone").val('');
        $("#txtEmail").val('');
        $("#dscEndereco").val('');
        $("#dtaNascimento").val('');
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

    if ($("#indEnderecoCad").is(":checked")){
        var params = "codCliente;"+$("#codClienteAluguel").val();
        ExecutaDispatch('Cliente', 'BuscaEnderecoCliente', params, preencheEnderecoAluguel);
    }
});

function preencheEnderecoAluguel(retorno) {
    if(retorno[1] !== null){
        $("#nroCepEntrega").val(retorno[1][0]['NRO_CEP_CLIENTE']);
        // $("#dscEnderecoEntrega").val(retorno[1][0]['DSC_ENDERECO_CLIENTE']);
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


// function carregaCamposAluguel(nmeCliente, codAluguel, dtaAluguel, codCliente){
function carregaCamposAluguel(indice){
    console.log('carregaCamposAluguel', listaAluguel[indice], indice);
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

function selecionaClientes(){
    var parametros = "verificaPermissao;N|nmeClienteAluguel;"+$("#nmeClienteAluguel").val();
    ExecutaDispatch('Cliente', 'ListarClientesAutoComplete', parametros, montaDivClientes);
}

function montaDivClientes(lista){
    if (lista[1]!=null){
        $("#nmeClienteAluguel").jqxInput({ 
            source: lista[1], 
            placeHolder: "Cliente", 
            displayMember: "TEXT", 
            valueMember: "COD", 
            width: '100%', 
            height: 40
        });
        $("#nmeClienteAluguel").on('select', function (event) {
            if (event.args) {
                var item = event.args.item;
                if (item) {
                    $("#codClienteAluguel").val(item.value);
                }
            }
        });
    }
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
    $("#dtaAluguel").change(function () {
        if($(this).val() == ''){
            $("#cadProdutoCor").hide('fade');
        }else{
            $("#cadProdutoCor").show('fade');
            $("#dtaVenda").val($(this).val());
        }
    });
    $("#dtaAluguel").change();
    
    $("#nmeClienteAluguel").keyup(function(){
        if ($(this).val().length>3){
            selecionaClientes();
        }
    });
    $("#nmeClienteAluguel").jqxInput({ 
        placeHolder: "Cliente", 
        displayMember: "TEXT", 
        valueMember: "COD", 
        width: '100%', 
        height: 40
    });
});