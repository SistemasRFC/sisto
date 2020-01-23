var dadosListagem;
$(function() {
    $("#btnNovoUsuario").click(function(){
        $("#codUsuario").val('');
        $("#nmeUsuario").val('');
        $("#txtEmail").val('');
        $("#nroCelular").val('');
        $("#txtLogin").val('');
        $("#comboPerfil").val('');
        $("#indAtivo").attr('checked', false);
        $("#btnReiniciaSenha").hide();
        $("#cadUsuario").modal("show");
    });

});

function carregaGridUsuario(){
    ExecutaDispatch('Usuario', 'ListarUsuario', undefined, montaGridUsuario);
}

function montaGridUsuario(dados){
    if(dados[0]){
        dadosListagem = dados[1];
        dados = dados[1];
        var tabela = '<table id="tbUsuario" class="display" style="width:100%">';
        tabela += '<thead>';
        tabela += '<tr>';
        tabela += '<th>Login</th>';
        tabela += '<th>Usuario</th>';
        tabela += '<th>Perfil</th>';
        tabela += '<th>Ativo</th>';
        tabela += '<th>Ação</th>';
        tabela += '</tr>';
        tabela += '</thead>';
        tabela += '<tbody>';
        for (i=0;i<dados.length;i++){

            tabela += '<tr>';
            tabela += '<td>'+dados[i].NME_USUARIO+'</td>';
            tabela += '<td>'+dados[i].NME_USUARIO_COMPLETO+'</td>';
            tabela += '<td>'+dados[i].DSC_PERFIL+'</td>';
            tabela += '<td>'+dados[i].IND_ATIVO+'</td>';
            tabela += "<td><a href=\"javascript:carregaCamposUsuario("+i+");\">Editar</a></td>";
            tabela += '</tr>';

        }
        tabela += '</tbody>';
        tabela += '</table>';
        $("#tabelaUsuario").html(tabela);
        $('#tbUsuario').DataTable({
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
    carregaGridUsuario();
});