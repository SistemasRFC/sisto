function carregaGridAlugueisDia(){
    ExecutaDispatch('Aluguel', 'ListarAlugueisDia', undefined, montaGridAlugueisDia);
}

function montaGridAlugueisDia(dados){
   if(dados[0]){
        if(dados[1] !== null){
            dados = dados[1];
            var grid = '<table id="tbAlugueisD" class="display" style="width:100%">';
            grid += '<thead><tr>';
            grid += ' <th width="15%"><b>Data</b></th>';
            grid += ' <th width="15%"><b>Cliente</b></th>';
            grid += ' <th width="15%"><b>Telefone</b></th>';
            grid += ' <th width="30%"><b>Produtos</b></th>';
            grid += ' <th width="10%"><b>Quantidade</b></th>';
            grid += ' <th width="15%"><b>Valor</b></th>';
            grid += '</tr></thead><tbody>';
            for (i=0;i<dados.length;i++){
                grid += '<tr>';
                grid += ' <td>'+dados[i].DTA_ALUGUEL+'</td>';
                grid += ' <td>'+dados[i].DSC_CLIENTE+'</td>';
                grid += ' <td>'+dados[i].NRO_TELEFONE+'</td>';
                grid += ' <td>'+dados[i].DSC_PRODUTO_COR+'</td>';
                grid += ' <td>'+dados[i].QTD_ALUGUEL+'</td>';
                grid += ' <td>'+dados[i].VLR_TOTAL_ALUGUEL+'</td>';
//                grid += " <td><a href=\"javascript:openDescDemandas("+dados[i].COD_DEMANDA+");\">Vizualizar</a></td>";
                grid += '</tr>';
            }
            grid += '</tbody>';
            grid += '</table>';
            $("#tbAlugueisDia").html(grid);
            $('#tbAlugueisD').DataTable({
                "filter": false,
                "ordering": false,
                "info": false,
                "paginate": false,
                "scrollY": "200px",
                "scrollCollapse": true,
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
        }else{
            var grid = 'Sem Aluguéis para Hoje!';            
            $("#tbAlugueisDia").html(grid);
        }
   } 
}

//function openDescDemandas(cadDemanda){
//    $('#codDemanda').val(cadDemanda);
//    carregaGridDescricao();
//    $("#descricaoDemanda").modal("show");
//    
//}

function carregaGridAlugueisAgendados(){
    ExecutaDispatch('Aluguel', 'ListarAlugueisAgendados', undefined, montaGridAlugueisAgendados);
}

function montaGridAlugueisAgendados(dados){
   if(dados[0]){
        if(dados[1] !== null){
            dados = dados[1];
            var grid = '<table id="tbAlugueisA" class="display" style="width:100%">';
            grid += '<thead><tr>';
            grid += ' <th width="15%"><b>Data</b></th>';
            grid += ' <th width="15%"><b>Cliente</b></th>';
            grid += ' <th width="15%"><b>Telefone</b></th>';
            grid += ' <th width="30%"><b>Produtos</b></th>';
            grid += ' <th width="10%"><b>Quantidade</b></th>';
            grid += ' <th width="15%"><b>Valor</b></th>';
            grid += '</tr></thead><tbody>';
            for (i=0;i<dados.length;i++){
                grid += '<tr>';
                grid += ' <td>'+dados[i].DTA_ALUGUEL+'</td>';
                grid += ' <td>'+dados[i].DSC_CLIENTE+'</td>';
                grid += ' <td>'+dados[i].NRO_TELEFONE+'</td>';
                grid += ' <td>'+dados[i].DSC_PRODUTO_COR+'</td>';
                grid += ' <td>'+dados[i].QTD_ALUGUEL+'</td>';
                grid += ' <td>'+dados[i].VLR_TOTAL_ALUGUEL+'</td>';
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
        }else{
            var grid = 'Sem Novos Aluguéis!';            
            $("#tbAlugueisAgendados").html(grid);
        }
        
    } 
}

$(document).ready(function() {
    carregaGridAlugueisDia();
    carregaGridAlugueisAgendados();
} );