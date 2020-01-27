$(function() {
    $("#btnNovoPerfil").click(function(){
        $("#codPerfil").val('');
        $("#dscPerfil").val('');
        $("#indAtivo").prop('checked', false);
    });

    $("#btnSalvarPerfil").click(function(){
        if($("#dscPerfil").val() == ''){
            swal({
                title: "Aviso!",
                text: "Nenhum campo foi preenchido",
                type: "info",
                confirmButtonText: "Fechar"
            }); 
        }else{
            if($("#codPerfil").val() === ''){
                inserirPerfil();
            }else{
                updatePerfil();
            }
        }
    });

});
    
function inserirPerfil(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    var indAtivo = 'N';
    if($('#indAtivo').is(":checked")){
        indAtivo = 'S';
    }
    parametros = 'dscPerfil;'+$("#dscPerfil").val()+'|indAtivo;'+indAtivo;
    ExecutaDispatch('Perfil', 'InsertPerfil', parametros, retornoInsertPerfil);
}

function retornoInsertPerfil(retorno){
    if (retorno[0]){
        $("#codPerfil").val('');
        $("#dscPerfil").val('');
        $("#indAtivo").prop('checked', false);
        carregaGridPerfis();
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

function carregaCamposPerfil(codPerfil, dscPerfil, indAtivo){
    $("#codPerfil").val(codPerfil);
    $("#dscPerfil").val(dscPerfil);
    if(indAtivo == 'S'){
        $("#indAtivo").prop('checked', true);
    }else{
        $("#indAtivo").prop('checked', false);
    }
}

function updatePerfil(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    var indAtivo = 'N';
    if($('#indAtivo').is(":checked")){
        indAtivo = 'S';
    }
    parametros = 'codPerfil;'+$("#codPerfil").val()+'|dscPerfil;'+$("#dscPerfil").val()+'|indAtivo;'+indAtivo;
    ExecutaDispatch('Perfil', 'UpdatePerfil', parametros, retornoInsertPerfil);
}

function carregaGridPerfis(){
    ExecutaDispatch('Perfil', 'ListarPerfil', undefined, montaGridPerfis);
}

function montaGridPerfis(dados){
    if(dados[0]){
        dados = dados[1];
        var tabela = '<table id="tbPerfil" class="display" style="width:100%">';
        tabela += '<thead>';
        tabela += '<tr>';
        tabela += '<th><b>Perfil</b></th>';
        tabela += '<th><b>Ativo</b></th>';
        tabela += '<th><b>Ação</b></th>';
        tabela += '</tr>';
        tabela += '</thead><tbody>';
        for (i=0;i<dados.length;i++){
            if(dados[i].IND_ATIVO == 'S'){
                var indAtivo = 'Sim';
            }else{
                indAtivo = 'Não';
            }
            tabela += '<tr>';
            tabela += '<td>'+dados[i].DSC_PERFIL+'</td>';
            tabela += '<td>'+indAtivo+'</td>';
            tabela += "<td><a href=\"javascript:carregaCamposPerfil('"+dados[i].COD_PERFIL+"', '"+dados[i].DSC_PERFIL+"', '"+dados[i].IND_ATIVO+"');\">Editar</a></td>";
            tabela += '</tr>';

        }
        tabela += '</tbody>';
        tabela += '</table>';
        $("#tabelaPerfis").html(tabela);
        $('#tbPerfil').DataTable({
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
    carregaGridPerfis();
});