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
        var tabela = '<table id="tbProdutos" class="display" style="width:100%">';
        tabela += '<thead>';
        tabela += '<tr>';
        tabela += '<th><b>Produto</b></th>';
        tabela += '<th><b>Cores</b></th>';
        tabela += '<th><b>Quantidade</b></th>';
        tabela += '<th><b>Valor unitário</b></th>';
        tabela += '<th><b>Ação</b></th>';
        tabela += '</tr>';
        tabela += '</thead><tbody>';
        for (i=0;i<dados.length;i++){
            
            tabela += '<tr>';
            tabela += '<td>'+dados[i].DSC_PRODUTO+'</td>';
            tabela += '<td>'+dados[i].DSC_COR+'</td>';
            tabela += '<td>'+dados[i].QTD_PRODUTO+'</td>';
            tabela += '<td> R$ '+dados[i].VLR_PRODUTO+'</td>';
            tabela += "<td><a href=\"javascript:carregaCamposProduto('"+dados[i].COD_PRODUTO+"', '"+dados[i].DSC_PRODUTO+"');\">Editar</a></td>";
            tabela += '</tr>';

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

$(document).ready(function(){
    carregaGridProdutos();
});