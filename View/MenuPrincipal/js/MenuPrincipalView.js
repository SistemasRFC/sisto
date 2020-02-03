function carregaGridAlugueisDia(){
    ExecutaDispatch('Aluguel', 'ListarAlugueisDia', undefined, montaGridAlugueisDia);
}

function montaGridAlugueisDia(dados){
   if(dados[0]){
        dados = dados[1];
        var grid = '<table id="tbAlugueisD" width="100%">';
        grid += '<thead>';
        grid += ' <tr style="height: 45px;">';
        grid += '  <th width="8%" style="text-align:center;"><b>Data</b></th>';
        grid += '  <th width="21%"><b>Cliente</b></th>';
        grid += '  <th width="11%"><b>Telefone</b></th>';
        grid += '  <th width="10%" style="text-align:center;"><b>Situacao</b></th>';
        grid += '  <th width="30%"><b>Produtos</b></th>';
        grid += '  <th width="10%" style="text-align:right;"><b>Valor Total</b></th>';
        grid += '  <th width="10%" style="text-align:center;"><b>Ação</b></th>';
        grid += ' </tr>';
        grid += '</thead>';
        grid += '<tbody>';
        for (i=0;i<dados.length;i++){
            grid += '<tr style="height: 45px;border-top: 1px solid #000;border-bottom: 1px solid #000;">';
            grid += ' <td style="text-align:center;">'+dados[i].DTA_ALUGUEL+'</td>';
            grid += ' <td>'+dados[i].NME_CLIENTE+'</td>';
            grid += ' <td>'+dados[i].NRO_TELEFONE+'</td>';
            grid += ' <td style="text-align:center;">'+dados[i].DSC_SITUACAO+'</td>';
            grid += ' <td>';
            var produtos = dados[i].PRODUTOS;
            if ( produtos !== null ) {
                for ( var j = 0;j < produtos.length; j++ ) {
                    grid += '&cir; '+produtos[j].DSC_PRODUTO_COR+' - '+produtos[j].QTD_VENDA+'<br>';
                }
            }
            grid += ' </td>';
            grid += ' <td style="text-align:right;">R$ '+dados[i].VLR_TOTAL+'</td>';
            grid += " <td style='text-align:center;'><a href=\"entregarProdutos('"+dados[i].COD_ALUGUEL+"', '9');\">Entregar</a></td>";
            grid += '</tr>';
        }
        grid += '</tbody>';
        grid += '</table>';
        $("#tbAlugueisDia").html(grid);
   } 
}

function entregarProdutos(codAluguel, status) {
    var parametros = 'codVenda;'+codAluguel+'|codSituacao;'+status;
    ExecutaDispatch('Aluguel', 'UpdateStatusAluguel', parametros, retornoEntregarProdutos);
}

function retornoEntregarProdutos() {
    carregaGridAlugueisDia();

}

function carregaGridAlugueisAgendados(){
    ExecutaDispatch('Aluguel', 'ListarAlugueisAgendados', undefined, montaGridAlugueisAgendados);
}

function montaGridAlugueisAgendados(dados){
   if(dados[0]){
        dados = dados[1];
        var grid = '<table id="tbAlugueisA" class="display" style="width:100%">';
        grid += '<thead><tr>';
        // grid += ' <th width="5%"><b>Cod.</b></th>';
        grid += ' <th width="10%"><b>Data</b></th>';
        grid += ' <th width="20%"><b>Cliente</b></th>';
        grid += ' <th width="15%"><b>Telefone</b></th>';
        grid += ' <th width="10%"><b>Situação</b></th>';
        grid += ' <th width="10%"><b>Valor</b></th>';
        grid += '</tr></thead><tbody>';
        for (i=0;i<dados.length;i++){
            grid += '<tr>';
            // grid += ' <td>'+dados[i].COD_ALUGUEL+'</td>';
            grid += ' <td>'+dados[i].DTA_ALUGUEL+'</td>';
            grid += ' <td>'+dados[i].NME_CLIENTE+'</td>';
            grid += ' <td>'+dados[i].NRO_TELEFONE+'</td>';
            grid += ' <td>'+dados[i].DSC_SITUACAO+'</td>';
            grid += ' <td>R$ '+dados[i].VLR_TOTAL+'</td>';
            grid += '</tr>';
        }
        grid += '</tbody>';
        grid += '</table>';
        $("#tbAlugueisAgendados").html(grid);
        $('#tbAlugueisA').DataTable({
            "filter": false,
            "ordering": false,
            "info": false,
            "paginate": false,
            "scrollY": "200px",
            "scrollCollapse": true,
            "language": {
                "emptyTable": "Sem Novos Aluguéis",
                "info": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                "infoEmpty": "Mostrando 0 até 0 de 0 registros",
                "infoFiltered": "(Filtrados de _MAX_ registros)",
                "infoPostFix": "",
                "infoThousands": ".",
                "lengthMenu": "_MENU_ resultados por página",
                "loadingRecords": "Carregando...",
                "processing": "Processando...",
                "zeroRecords": "Sem Novos Aluguéis",
                "search": "Pesquisar: ",
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
        
    } 
}

$(document).ready(function() {
    carregaGridAlugueisDia();
    carregaGridAlugueisAgendados();
} );