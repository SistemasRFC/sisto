$(function() {
    $("#btnNovaCor").click(function(){
        $("#codCor").val('');
        $("#dscCor").val('');
        $("#indCorAtivo").prop('checked', false);
    });

});

function carregaGridCores(){
    ExecutaDispatch('Cor', 'ListarCores', undefined, montaGridCores);
}

function montaGridCores(dados){
    if(dados[0]){
        dados = dados[1];
        var tabela = '<table id="tbCores" class="display" style="width:100%">';
        tabela += '<thead>';
        tabela += '<tr>';
        tabela += '<th><b>Cor</b></th>';
        tabela += '<th><b>Ativo?</b></th>';
        tabela += '<th><b>Ação</b></th>';
        tabela += '</tr>';
        tabela += '</thead><tbody>';
        for (i=0;i<dados.length;i++){
            if(dados[i].IND_ATIVO == 'S'){
                var indCorAtivo = 'Sim';
            }else{
                indCorAtivo = 'Não';
            }
            tabela += '<tr>';
            tabela += '<td>'+dados[i].DSC_COR+'</td>';
            tabela += '<td>'+indCorAtivo+'</td>';
            tabela += "<td><a href=\"javascript:carregaCamposCor('"+dados[i].COD_COR+"', '"+dados[i].DSC_COR+"', '"+dados[i].IND_ATIVO+"');\">Editar</a></td>";
            tabela += '</tr>';

        }
        tabela += '</tbody>';
        tabela += '</table>';
        $("#tabelaCores").html(tabela);
        $('#tbCores').DataTable({
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

$(document).ready(function(){
    carregaGridCores();
});