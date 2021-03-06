$(function() {
    $("#btnPesquisar").click(function() {
    
    }); 
});

function montaDivClientes(lista){
    $("#nmeCliente").jqxInput({ 
        source: lista[1], 
        placeHolder: "Cliente", 
        displayMember: "TEXT", 
        valueMember: "COD", 
        width: '100%', 
        height: 40
    });
    $("#nmeCliente").on('select', function (event) {
        if (event.args) {
            var item = event.args.item;
            if (item) {
                $("#codCliente").val(item.value);
            }
        }
    });
}

function carregaListaAlugueisPorCliente(codCliente){
    ExecutaDispatch('RelatorioAluguel', 'ListarAlugueisPorCliente', 'codCliente;'+codCliente+'|', montaListaAlugueisPorCliente);
}

function montaListaAlugueisPorCliente(dados){
    if(dados[0]){
        dados = dados[1];
        if(dados != null){
            var tabela = '<table id="tbAluguel" class="display" style="width:100%">';
            tabela += '<thead>';
            tabela += '<tr>';
            tabela += " <th width='10%' style='text-align: center;'><b>Data</b></th>";
            tabela += " <th width='24%'><b>Cliente</b></th>";
            tabela += " <th width='32%'><b>Produtos</b></th>";
            tabela += " <th width='8%'><b>Situação</b></th>";
            tabela += " <th width='11%' style='text-align: center;'><b>Valor</b></th>";
            tabela += " <th width='15%' style='text-align: right;'><b>Ação</b></th>";
            tabela += '</tr>';
            tabela += '</thead><tbody>';
            for (i=0;i<dados.length;i++){

                tabela += '<tr>';
                tabela += "<td style='text-align: center;'>"+dados[i].DTA_ALUGUEL+"</td>";
                tabela += '<td>'+dados[i].NME_CLIENTE+'</td>';
                tabela += '<td>';
                var produtos = dados[i].PRODUTOS;
                if ( produtos !== null ) {
                    for ( var j = 0;j < produtos.length; j++ ) {
                        tabela += ''+produtos[j].DSC_PRODUTO_COR+' - '+produtos[j].QTD_VENDA+'<br>';
                    }
                }
                tabela += '</td>';
                tabela += "<td style='text-align: center;'>"+dados[i].DSC_SITUACAO+"</td>";
                tabela += "<td style='text-align: right;'>R$ "+dados[i].VLR_TOTAL+"</td>";
                tabela += "<td style='text-align: center;'>";
                tabela += " &nbsp;<a href=\"javascript:gerarRecibo('"+dados[i].COD_ALUGUEL+"');\">Recibo</a>";
                tabela += "</td>";
                tabela += '</tr>';

            }
            tabela += '</tbody>';
            tabela += '</table>';
            $("#tabelaAlugueis").html(tabela);
           $('#tbAluguel').DataTable({
               "ordering": false,
               "searching": false,
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
        }else{
            var tabela = 'Não há alugueis!';            
            $("#tabelaAlugueis").html(tabela);
        }
    }
}

function gerarRecibo(codAluguel) {
    // Montar Recibo 
}

$(document).ready(function(){

    $("#nmeCliente").keyup(function(){
        if ($(this).val().length>3){
            selecionaClientes();
        }
    });
    $("#nmeCliente").jqxInput({ 
        placeHolder: "Cliente", 
        displayMember: "TEXT", 
        valueMember: "COD", 
        width: '100%', 
        height: 40
    }); 
});