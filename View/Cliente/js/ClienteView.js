var listaCliente = [];
$(function() {
    $("#btnNovoCliente").click(function(){
        limparCampos();
        $("#modalCadCliente").modal('show');
    });

    $("#btnSalvarCliente").click(function(){
        if($("#codCliente").val() == 0){
            inserirCliente();
        }else{
            updateCliente();
        }
    });
});

function retornoInsertCliente(){
    $(".cadCliente").val('');
    carregaGridClientes();
    $("#modalCadCliente").modal('hide');
}

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
        tabela += '<th><b>CPF</b></th>';
        tabela += '<th><b>Telefone</b></th>';
        tabela += '<th><b>Endereço</b></th>';
        tabela += '<th><b>Ação</b></th>';
        tabela += '</tr>';
        tabela += '</thead><tbody>';
        for (i=0;i<dados.length;i++){
            listaCliente[i] = new ClienteClass();
            listaCliente[i].codCliente = dados[i].COD_CLIENTE;
            listaCliente[i].nmeCliente = dados[i].NME_CLIENTE;
            listaCliente[i].nroCpf = dados[i].NRO_CPF;
            listaCliente[i].nroTelefone = dados[i].NRO_TELEFONE;
            listaCliente[i].txtEmail = dados[i].TXT_EMAIL;
            listaCliente[i].nroCep = dados[i].NRO_CEP;
            listaCliente[i].dscEndereco = dados[i].DSC_ENDERECO;
            listaCliente[i].dtaNascimento = dados[i].DTA_NASCIMENTO;
            tabela += '<tr>';
            tabela += '<td>'+dados[i].NME_CLIENTE+'</td>';
            tabela += '<td>'+dados[i].NRO_CPF+'</td>';
            tabela += '<td>'+dados[i].NRO_TELEFONE+'</td>';
            tabela += '<td>'+dados[i].DSC_ENDERECO+'</td>';
            tabela += "<td><a href=\"javascript:carregaCamposCliente("+i+");\">Editar</a></td>";
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

function limparCampos() {
    $(".cadCliente").val('');
}

$(document).ready(function(){
    carregaGridClientes();
});