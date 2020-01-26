$(function() {
    $("#dtaAluguel").jqxDateTimeInput({ width: '300px', height: '40px', formatString: 'dd/MM/yyyy'});
    $("#bntIncCliente").click(function(){
       $("#modalCliente").modal('show');
    });

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
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    parametros = 'dtaAluguel;'+$("#dtaAluguel").val()+'|codCliente;'+$("#codClienteAluguel").val()+'|codSituacao;8|codProdutoCor;'+$("#codProdutoCorAluguel").val()+'|qtdProdutoAluguel;'+$("#qtdProdutoAluguel").val();
    ExecutaDispatch('Aluguel', 'InsertAluguel', parametros, retornoInsertAluguel);
}

function retornoInsertAluguel(retorno){
    if (retorno[0]){
        carregaGridAluguel();
        $("#codAluguel").val(retorno[2]);
        listaProdutosAluguel(retorno[2]);
        $("#codProdutoAluguel").val('');
        $("#codProdutoCorAluguel").val('');
        $("#dscProdutoAluguel").val('');
        $("#qtdProdutoAluguel").val('');
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


function carregaCamposAluguel(nmeCliente, codAluguel, dtaAluguel, codCliente){
    limpaCamposAluguel();
    $("#codAluguel").val(codAluguel);
    $("#dtaAluguel").val(dtaAluguel).change;
    $("#nmeClienteAluguel").val(nmeCliente);
    $("#codClienteAluguel").val(codCliente);
    listaProdutosAluguel(codAluguel);
    // $("#cadProdutoCor").show();
}

function limpaCamposAluguel() {
    $("#codProdutoAluguel").val('');
    $("#codProdutoCorAluguel").val('');
    $("#dscProdutoAluguel").val('');
    $("#qtdProdutoAluguel").val('');
}

function updateAluguel(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    parametros = 'codVenda;'+$("#codAluguel").val()+'|dtaAluguel;'+$("#dtaAluguel").val()+'|codCliente;'+$("#codClienteAluguel").val();
    parametros += '|codProdutoCor;'+$("#codProdutoCorAluguel").val()+'|qtdProdutoAluguel;'+$("#qtdProdutoAluguel").val()+"|codSituacao;8";
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

$(document).ready(function(){
    $("#dtaAluguel").val('');
    $("#dtaAluguel").change(function () {
        if($(this).val() == ''){
            $("#cadProdutoCor").hide();
        }else{
            $("#cadProdutoCor").show();
            // listarComboboxProduto($(this).val());
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