$(function() {
    $("#btnNovoProduto").click(function(){
        limparCamposProduto();
        $("#cadProduto").modal("show");
    });
    
});

function retornoInsertProduto(retorno){
    if (retorno[0]){
        $("#codProduto").val('');
        $("#dscProduto").val('');
        $(".vlrProdutoCor").val('');
        $(".qtdProdutoCor").val('');
        carregaGridProdutos();
        swal({
            title: "Sucesso!",
            text: "Registro salvo com sucesso!",
            type: "success",
            confirmButtonText: "Fechar"
        });        
//        $("#cadProduto").modal("hide");
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

function carregaGridProdutos(){
    ExecutaDispatch('Produto', 'ListarProdutos', undefined, montaGridProdutos);
}

function montaGridProdutos(dados){
    if(dados[0]){
        dados = dados[1];
        var tabela = '<table id="tbProdutos" class="display" style="width:100%" border=0>';
        tabela += '<thead>';
        tabela += '<tr>';
        tabela += '<th><b>Produto</b></th>';
        tabela += '<th><b>Ação</b></th>';
        tabela += '</tr>';
        tabela += '</thead><tbody>';
        var $codProduto = 0;
        for (i=0;i<dados.length;i++){
            if ($codProduto!=dados[i].COD_PRODUTO){
                if ($codProduto!=0){
                    tabela += '</tbody>';
                    tabela += '</table>';
                    tabela += '</td></tr>';
                }
                tabela += '<tr>';
                tabela += '<td><a href="javascript:mostraTr('+dados[i].COD_PRODUTO+');"><img id="img'+dados[i].COD_PRODUTO+'" src="../../Resources/bootstrap/glyphicons_free/glyphicons/png/glyphicons-191-plus-sign.png"></a> '+dados[i].DSC_PRODUTO+'</td>';
                tabela += "<td><a href=\"javascript:carregaCamposProduto('"+dados[i].COD_PRODUTO+"', '"+dados[i].DSC_PRODUTO+"');\">Editar</a></td>";
                tabela += '</tr>';

                tabela += '<tr style="display:none;" id="tr'+dados[i].COD_PRODUTO+'">';
                tabela += '<td colspan="2">';
                tabela += '<table id="tbCores" style="width:100%; margin-left:20px;">';
                tabela += '<thead>';
                tabela += '<tr>';
                tabela += '<td>Cor</td>';
                tabela += '<td>Quantidade</td>';
                tabela += '<td>Valor Unitário</td>';
                tabela += '</tr>';
                tabela += '</thead>';
                tabela += '<tbody>';
            }
            tabela += '<tr>';
            tabela += '<td>'+dados[i].DSC_COR+'</td>';
            tabela += '<td>'+dados[i].QTD_PRODUTO+'</td>';
            tabela += '<td> R$ '+dados[i].VLR_PRODUTO+'</td>';
            tabela += '</tr>';
            $codProduto = dados[i].COD_PRODUTO;
        }
        tabela += '</tbody>';
        tabela += '</table>';
        $("#tabelaProdutos").html(tabela);
        $('#tbProdutos').DataTable({
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

function mostraTr(id){
    if ($("#tr"+id).is(":visible")){
        $("#img"+id).attr('src', '../../Resources/bootstrap/glyphicons_free/glyphicons/png/glyphicons-191-plus-sign.png');
        $("#tr"+id).hide('fade');
    }else{
        $("#img"+id).attr('src', '../../Resources/bootstrap/glyphicons_free/glyphicons/png/glyphicons-192-minus-sign.png');
        $("#tr"+id).show('fade');
    }
}

$(document).ready(function(){
    carregaGridProdutos();
});