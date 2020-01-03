$(function() {
    $("#btnNovoAluguel").click(function(){
        $("#codAluguel").val('');
        $("#dtaAluguel").val('');
        $("#comboCliente").val('');
        $("#comboSituacao").val('');
        $("#tabelaProdutosAluguel").hide();
        $("#comboboxProduto").val('');
        $("#qtdProdutoAluguel").val('');
        $("#cadProdutoCor").hide();
    });
});

function carregaGridAluguel(){
    ExecutaDispatch('Aluguel', 'ListarAluguel', undefined, montaGridAluguel);
}

function montaGridAluguel(dados){
    if(dados[0]){
        dados = dados[1];
        if(dados != null){
            var tabela = '<table id="tbAluguel" class="display" style="width:100%">';
            tabela += '<thead>';
            tabela += '<tr>';
            tabela += '<th><b>Data</b></th>';
            tabela += '<th><b>Cliente</b></th>';
            tabela += '<th><b>Situação</b></th>';
            tabela += '<th><b>Ação</b></th>';
            tabela += '</tr>';
            tabela += '</thead><tbody>';
            for (i=0;i<dados.length;i++){

                tabela += '<tr>';
                tabela += '<td>'+dados[i].DTA_ALUGUEL+'</td>';
                tabela += '<td>'+dados[i].NME_CLIENTE+'</td>';
                tabela += '<td>'+dados[i].DSC_SITUACAO+'</td>';
                tabela += "<td><a href=\"javascript:carregaCamposAluguel('"+dados[i].COD_ALUGUEL+"', '"+dados[i].DTA_ALUGUEL+"', '"+dados[i].COD_CLIENTE+"', '"+dados[i].COD_SITUACAO+"');\">Editar</a></td>";
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

$(document).ready(function(){
    carregaGridAluguel();
});