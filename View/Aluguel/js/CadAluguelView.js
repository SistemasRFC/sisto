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
});
    
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


function carregaCamposAluguel(nmeCliente, codAluguel, dtaAluguel, codCliente){
    limpaCamposAluguel();
    $("#codAluguel").val(codAluguel);
    $("#dtaAluguel").val(dtaAluguel).change;
    $("#nmeClienteAluguel").val(nmeCliente);
    $("#codClienteAluguel").val(codCliente);
    listaProdutosAluguel(codAluguel);
    $("#modalListaAlugueis").modal('hide');

    // $("#codTipoPagamento").val(lista[key].COD_TIPO_PAGAMENTO);
    // $("#dscEnderecoEntrega").val(lista[key].DSC_ENDERECO_ENTREGA);
    // $("#dscPontoReferencia").val(lista[key].DSC_PONTO_REFERENCIA);
    // $("#nroCepEntrega").val(lista[key].NRO_CEP_ENTREGA);
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
    var combo = '<select id="codTipoPagamento" class="form-control cadAluguel">';
    for (i=0;i<listaTipos.length;i++){
        combo += '<option value="'+listaTipos[i].COD+'">'+listaTipos[i].DSC+'</option>';
    }
    combo += '</select>';
    $("#tdCodTipoPagamento").html(combo);

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