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
        $("#cadProduto").modal("hide");
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
        tabela += '<th>';
        tabela += '<div class="row">';
        tabela += '<div class="col-6"><b>Produto</b></div>';
        tabela += '<div class="col-6"><b>Ação</b></div>';
        tabela += '</div>';
        tabela += '</th>';
        tabela += '</tr>';
        tabela += '</thead><tbody>';
        var $codProduto = 0;
        for (i=0;i<dados.length;i++){
            if ($codProduto!=dados[i].COD_PRODUTO){
                if ($codProduto!=0){
                    tabela += '</td></tr>';
                }
                tabela += '<tr>';
                tabela += '<td>';
                tabela += '<div class="row">';
                tabela += '<div class="col-6"><a href="javascript:mostraTr('+dados[i].COD_PRODUTO+');"><img id="img'+dados[i].COD_PRODUTO+'" src="../../Resources/bootstrap/glyphicons_free/glyphicons/png/glyphicons-191-plus-sign.png"></a> '+dados[i].DSC_PRODUTO+'</div>';
                tabela += "<div class=\"col-6\"><a href=\"javascript:carregaCamposProduto('"+dados[i].COD_PRODUTO+"', '"+dados[i].DSC_PRODUTO+"');\">Editar</a></div>";
                tabela += '</div>';
                
                tabela += '<div class="row tr'+dados[i].COD_PRODUTO+'" style="display:none; padding:0px" >';
                tabela += '<div class="col-4">Cor</div>';
                tabela += '<div class="col-4">Quantidade</div>';
                tabela += '<div class="col-4">Valor Unitário</div>';
                tabela += '</div>';
            }
            tabela += '<div class="row tr'+dados[i].COD_PRODUTO+'" style="display:none; padding:0px" >';
            tabela += '<div class="col-4">'+dados[i].DSC_COR+'</div>';
            tabela += '<div class="col-4">'+dados[i].QTD_PRODUTO+'</div>';
            tabela += '<div class="col-4"> R$ '+dados[i].VLR_PRODUTO+'</div>';
            tabela += '</div>';
            $codProduto = dados[i].COD_PRODUTO;
        }
        tabela += '</td></tr>';
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
    if ($(".tr"+id).is(":visible")){
        $("#img"+id).attr('src', '../../Resources/bootstrap/glyphicons_free/glyphicons/png/glyphicons-191-plus-sign.png');
        $(".tr"+id).hide();
    }else{
        $("#img"+id).attr('src', '../../Resources/bootstrap/glyphicons_free/glyphicons/png/glyphicons-192-minus-sign.png');
        $(".tr"+id).show();
    }
}

$(document).ready(function(){
    carregaGridProdutos();
});