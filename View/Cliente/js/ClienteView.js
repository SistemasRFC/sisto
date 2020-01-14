$(function() {
    $("#btnNovoCliente").click(function(){
        $("#nmeCliente").val('');
        $("#nroTelefone").val('');
        $("#txtEmailCliente").val('');
    });
});

function carregaGridClientes(){
    ExecutaDispatch('Cliente', 'ListarClientes', undefined, montaGridClientes);
}

function montaGridClientes(dados){
    if(dados[0]){
        dados = dados[1];
        var tabela = '<table id="tbClientes" class="display" style="width:100%">';
        tabela += '<thead>';
        tabela += '<tr>';
        tabela += '<th><b>Nome</b></th>';
        tabela += '<th><b>Telefone</b></th>';
        tabela += '<th><b>Email</b></th>';
        tabela += '<th><b>Ação</b></th>';
        tabela += '</tr>';
        tabela += '</thead><tbody>';
        for (i=0;i<dados.length;i++){

            tabela += '<tr>';
            tabela += '<td>'+dados[i].NME_CLIENTE+'</td>';
            tabela += '<td>'+dados[i].NRO_TELEFONE+'</td>';
            tabela += '<td>'+dados[i].TXT_EMAIL+'</td>';
            tabela += "<td><a href=\"javascript:carregaCamposCliente('"+dados[i].COD_CLIENTE+"', '"+dados[i].NME_CLIENTE+"', '"+dados[i].NRO_TELEFONE+"', '"+dados[i].TXT_EMAIL+"');\">Editar</a></td>";
            tabela += '</tr>';

        }
        tabela += '</tbody>';
        tabela += '</table>';
        $("#tabelaClientes").html(tabela);
        $('#tbClientes').DataTable({
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
    carregaGridClientes();
});