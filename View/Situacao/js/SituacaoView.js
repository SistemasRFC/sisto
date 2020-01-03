$(function() {
    $("#btnNovaSituacao").click(function(){
        $("#codSituacao").val('');
        $("#dscSituacao").val('');
    });

});

function carregaGridSituacao(){
    ExecutaDispatch('Situacao', 'ListarSituacao', undefined, montaGridSituacao);
}

function montaGridSituacao(dados){
    if(dados[0]){
        dados = dados[1];
        var tabela = '<table class="table table-sm table-striped">';
        tabela += '<thead>';
        tabela += '<tr>';
        tabela += '<th>Situação</th>';
        tabela += '<th>Ação</th>';
        tabela += '</tr>';
        tabela += '</thead>';
        tabela += '<tbody>';
        for (i=0;i<dados.length;i++){

            tabela += '<tr>';
            tabela += '<td>'+dados[i].DSC_SITUACAO+'</td>';
            tabela += "<td><a href=\"javascript:carregaCamposSituacao('"+dados[i].COD_SITUACAO+"', '"+dados[i].DSC_SITUACAO+"');\">Editar</a></td>";
            tabela += '</tr>';

        }
        tabela += '</tbody>';
        tabela += '</table>';
        $("#tabelaSituacao").html(tabela);
    }
}

$(document).ready(function(){
    carregaGridSituacao();
});