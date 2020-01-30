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