$(function () {
    $("#dtaAluguel").jqxDateTimeInput({ width: '300px', height: '40px', formatString: 'dd/MM/yyyy' });

    $("#btnNovoAluguel").click(function () {
        LimparCamposAluguel();
    });

    $("#btnListaAlugueis").click(function () {
        carregaGridAluguel();
        $("#modalListaAlugueis").modal('show');
    });

    $("#bntIncCliente").click(function(){
        LimparCamposCliente();
       $("#modalCliente").modal('show');
    });

    $("#btnSalvarCliente").click(function(){
        if($("#nmeCliente").val() == '' || $("#nroTelefone").val() == ''){
            swal({
                title: "Aviso!",
                text: "Os campos Nome e Telefone são obrigatórios!",
                type: "info",
                confirmButtonText: "Fechar"
            }); 
        }else{
            inserirCliente();
        }
    });
});

function LimparCamposCliente() {
    $("#codCliente").val(0);
    $("#nmeCliente").val('');
    $("#nroCpf").val('');
    $("#nroTelefone").val('');
    $("#txtEmail").val('');
    $("#dscEndereco").val('');
    $("#dtaNascimento").val('');
}

function LimparCamposAluguel() {
    // Aluguel
    $("#codAluguel").val('');
    $("#dtaAluguel").val('');
    $("#codClienteAluguel").val(''); // AutoComplete Cliente
    $("#nmeClienteAluguel").val(''); // AutoComplete Cliente
    // ProdutosAluguel
    $("#tabelaProdutosAluguel").hide();
    $("#codProdutoAluguel").val('');
    $("#codProdutoCorAluguel").val(''); // AutoComplete Produto
    $("#dscProdutoCorAluguel").val(''); // AutoComplete Produto
    $("#qtdProdutoAluguel").val('');
    $("#vlrProdutoAluguel").val('');
}
    
function inserirAluguel(){
    // swal({
    //     title: "Aguarde, salvando registro!",
    //     imageUrl: "../../Resources/images/preload.gif",
    //     showConfirmButton: false
    // });
    parametros = 'dtaAluguel;'+$("#dtaAluguel").val()+'|codCliente;'+$("#codClienteAluguel").val()+'|codSituacao;8|codProdutoCor;'+$("#codProdutoCorAluguel").val()+'|qtdProdutoAluguel;'+$("#qtdProdutoAluguel").val()+'|vlrProdutoAluguel;'+$("#vlrProdutoAluguel").val();
    ExecutaDispatch('Aluguel', 'InsertAluguel', parametros, retornoInsertAluguel, 'Aguarde, salvando aluguel', 'Aluguel salvo com sucesso!');
}

function retornoInsertAluguel(retorno){
    $("#codAluguel").val(retorno[2]);
    listaProdutosAluguel(retorno[2]);
    $("#codProdutoAluguel").val('');
    $("#codProdutoCorAluguel").val('');
    $("#dscProdutoCorAluguel").val('');
    $("#qtdProdutoAluguel").val('');
    $("#vlrProdutoAluguel").val('');
    $("#tabelaRefProduto").hide('fade');
}

function carregaGridAluguel() {
    ExecutaDispatch('Aluguel', 'ListarAluguel', undefined, montaGridAluguel);
}

function montaGridAluguel(dados) {
    if (dados[0]) {
        dados = dados[1];
        if (dados != null) {
            var tabela = '<table id="tbAluguel" class="display" style="width:100%">';
            tabela += '<thead>';
            tabela += '<tr>';
            tabela += " <th width='10%' style='text-align: center;'><b>Data</b></th>";
            tabela += " <th width='24%'><b>Cliente</b></th>";
            tabela += " <th width='37%'><b>Produtos</b></th>";
            tabela += " <th width='8%'><b>Situação</b></th>";
            tabela += " <th width='11%' style='text-align: center;'><b>Valor</b></th>";
            tabela += " <th width='8%' style='text-align: right;'><b>Ações</b></th>";
            tabela += '</tr>';
            tabela += '</thead><tbody>';
            for (i = 0; i < dados.length; i++) {

                tabela += '<tr>';
                tabela += "<td style='text-align: center;'>" + dados[i].DTA_ALUGUEL + "</td>";
                tabela += '<td>' + dados[i].NME_CLIENTE + '</td>';
                tabela += '<td>';
                var produtos = dados[i].PRODUTOS;
                if (produtos !== null) {
                    for (var j = 0; j < produtos.length; j++) {
                        tabela += '' + produtos[j].DSC_PRODUTO_COR + ' - ' + produtos[j].QTD_VENDA + '<br>';
                    }
                }
                tabela += '</td>';
                tabela += "<td style='text-align: center;'>" + dados[i].DSC_SITUACAO + "</td>";
                tabela += "<td style='text-align: right;'>R$ " + dados[i].VLR_TOTAL + "</td>";
                tabela += "<td style='text-align: center;'>";
                tabela += " <a href=\"javascript:carregaCamposAluguel('" + dados[i].NME_CLIENTE + "', '" + dados[i].COD_ALUGUEL + "', '" + dados[i].DTA_ALUGUEL + "', '" + dados[i].COD_CLIENTE + "');\">Editar</a>";
                tabela += " <a href=\"javascript:alteraStatusAluguel('" + dados[i].COD_ALUGUEL + "', '9');\">Entregar</a><br>";
                tabela += " <a href=\"javascript:alteraStatusAluguel('" + dados[i].COD_ALUGUEL + "', '7');\">Cancelar</a>";
                tabela += "</td>";
                tabela += '</tr>';
            }
            tabela += '</tbody>';
            tabela += '</table>';
            $("#tabelaAlugueis").html(tabela);
            $('#tbAluguel').DataTable({
                "ordering": true,
                "searching": false,
                "paging": false,
                "language": {
                    "emptyTable": "Nenhum registro encontrado",
                    "info": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                    "infoEmpty": "Mostrando 0 até 0 de 0 registros",
                    "infoFiltered": "(Filtrados de _MAX_ registros)",
                    "infoPostFix": "",
                    "infoThousands": ".",
                    "lengthMenu": "_MENU_ resultados por página",
                    "loadingRecords": "Carregando...",
                    "processing": "Processando...",
                    "zeroRecords": "Nenhum registro encontrado",
                    "paginate": {
                        "next": "Próximo",
                        "previous": "Anterior",
                        "first": "Primeiro",
                        "last": "Último"
                    },
                    "aria": {
                        "sortAscending": ": Ordenar colunas de forma ascendente",
                        "sortDescending": ": Ordenar colunas de forma descendente"
                    }
                }
            });
        } else {
            var tabela = 'Não há alugueis!';
            $("#tabelaAlugueis").html(tabela);
        }
    }
}

function alteraStatusAluguel(codAluguel, status) {
    var parametros = 'codVenda;' + codAluguel + '|codSituacao;' + status;
    ExecutaDispatch('Aluguel', 'UpdateStatusAluguel', parametros, carregaGridAluguel);
}

function updateAluguel(){
    var parametros = retornaParametros('cadAluguel');
    ExecutaDispatch('Aluguel', 'UpdateAluguel', parametros, retornoInsertAluguel, 'Aguarde, salvando aluguel', 'Aluguel salvo com sucesso!');
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

// Método InsertCliente está na View Cliente
function retornoInsertCliente(retorno){
    $("#codClienteAluguel").val(retorno[2]);
    $("#nmeClienteAluguel").val($("#nmeCliente").val());
    $("#modalCliente").modal('hide');
}

$(document).ready(function () {
    $("#modalListaAlugueis").modal('hide');
    $("#modalClienteAluguel").modal('hide');
    $("#dtaAluguel").val('');

    $("#dtaAluguel").change(function () {
        if($(this).val() == ''){
            $("#cadProdutoCor").hide('fade');
        }else{
            $("#cadProdutoCor").show('fade');
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