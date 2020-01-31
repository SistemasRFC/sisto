$(function() {
    $("#bntIncProduto").click(function(){
        $("#codProduto").val('');
        $("#dscProduto").val('');
        $(".vlrProdutoCor").val('');
        $(".qtdProdutoCor").val('');
        $("#modalProduto").modal('show');
    });
});

function montaTabelaProduto(retorno) {
    var html = '';
    if(retorno[0]){
        dados = retorno[1];
        if(dados != null){
            html += "<table width='100%' border='1'>";
            html += " <tr>";
            html += "  <th colspan='7' style='text-align: center;background-color: #ddd'>";
            html += "   Quantidade já reservada por dia";
            html += "  </th>";
            html += " </tr>";
            html += " <tr>";
            for(i in dados){
                html += "  <td>";
                if(dados[i].DTA_VENDA == $("#dtaAluguel").val()) {
                    html += "   <b style='color: blue'>"+dados[i].DTA_VENDA+"</b>";
                } else {
                    html += "   <b>"+dados[i].DTA_VENDA+"</b>";
                }
                html += "  </td>";
            }
            html += " </tr>";
            html += " <tr>";
            for(i in dados){
                html += "  <td style='text-align: right;'>";
                html += "   "+dados[i].QTD_VENDA+"";
                html += "  </td>";
            }
            html += " </tr>";
            html += "</table>";
        }
    }
    $("#tabelaRefProduto").html(html);
    $("#tabelaRefProduto").show('fade');
}

function selecionaProdutos(){
    var parametros = "dtaAluguel;"+$("#dtaAluguel").val();
    ExecutaDispatch('Produto', 'ListarProdutoCorAutoComplete', parametros, montaDivProdutos);
}

function montaDivProdutos(lista){
    $("#dscProdutoAluguel").jqxInput({ 
        source: lista[1], 
        placeHolder: "Produto", 
        displayMember: "TEXT", 
        valueMember: "COD", 
        width: '100%', 
        height: 40
    });
    $("#dscProdutoAluguel").on('select', function (event) {
        if (event.args) {
            var item = event.args.item;
            var codigo = item.value.split(';');
            var cod = codigo[0];
            var valor = codigo[1];
            if (item) {
                $("#codProdutoCorAluguel").val(cod).change();
                $("#vlrProdutoAluguel").val(valor);
            }
        }
    });
}

function carregaCamposProdutoAluguel(codProdutoAluguel, dscProdutoCor, codProdutoCor, qtdProdutoAluguel, vlrProdutoAluguel){
    $('#codProdutoAluguel').val(codProdutoAluguel);
    $('#dscProdutoAluguel').val(dscProdutoCor);
    $('#codProdutoCorAluguel').val(codProdutoCor).change();
    $('#qtdProdutoAluguel').val(qtdProdutoAluguel);
    $('#vlrProdutoAluguel').val(vlrProdutoAluguel);
}

function listaProdutosAluguel(codAluguel){
    ExecutaDispatch('ProdutoAluguel','ListarProdutoAluguel','codAluguel;'+codAluguel, montaGridProdutosAluguel);
}

function retornoInsertProduto(retorno){
    if (retorno[0]){
        $("#modalProduto").modal("hide");
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

function montaGridProdutosAluguel(dados){
    $("#tabelaProdutosAluguel").html(''); 
    if(dados[0]){
        dados = dados[1];
        if(dados != null){
            var tabela = '<h5><b>Produtos desse aluguel</b></h5>';
            tabela += '<table id="tbProdutosAluguel" class="display" style="width:100%">';
            tabela += '<thead>';
            tabela += '<tr>';
            tabela += '<th><b>Produto</b></th>';
            tabela += '<th><b>Quantidade</b></th>';
            tabela += '<th><b>Valor unitário</b></th>';
            tabela += '<th><b>Valor total</b></th>';
            tabela += '<th><b>Ação</b></th>';
            tabela += '</tr>';
            tabela += '</thead><tbody>';
            var totalFinal = 0;
            for (i=0;i<dados.length;i++){
                tabela += '<tr>';
                tabela += '<td>'+dados[i].DSC_PRODUTO_COR+'</td>';
                tabela += '<td>'+dados[i].QTD_PRODUTO_ALUGUEL+'</td>';
                tabela += '<td>R$ '+dados[i].VLR_PRODUTO_ALUGUEL+'</td>';
                tabela += '<td>R$ '+dados[i].VLR_ALUGUEL+'</td>';
                tabela += "<td><a href=\"javascript:carregaCamposProdutoAluguel('"+dados[i].COD_PRODUTO_ALUGUEL+"', '"+dados[i].DSC_PRODUTO_COR+"', '"+dados[i].COD_PRODUTO_COR+"', '"+dados[i].QTD_PRODUTO_ALUGUEL+"', '"+dados[i].VLR_PRODUTO_ALUGUEL+"');\">Editar</a> \n\
                               &nbsp;&nbsp; <a href=\"javascript:removeProdutoAluguel('"+dados[i].COD_PRODUTO_ALUGUEL+"');\">Excluir</a></td>";
                tabela += '</tr>';
                totalFinal = parseInt(totalFinal) + parseInt(dados[i].VLR_ALUGUEL);
            }
            tabela += '</tbody>';
            tabela += '<tfoot>';
            tabela += '<tr>';
            tabela += '<th colspan= "3"></th>';
            tabela += '<th><b>Total</b></th>';
            tabela += '<th>R$ '+totalFinal+',00</th>';
            tabela += '</tr>';
            tabela += '</tfoot>';
            tabela += '</table>';
            $("#tabelaProdutosAluguel").html(tabela);
            $('#tbProdutosAluguel').DataTable({
                "ordering": false,
                "searching": false,
                "pagingType": "numbers",
                "language": {
                    "decimal": ",",
                    "thousands": ".",
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
            var tabela = 'Não há produtos para esse aluguel';            
            $("#tabelaProdutosAluguel").html(tabela);  
        }
    }
}

function removeProdutoAluguel(codProdutoAluguel){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    ExecutaDispatch('ProdutoAluguel', 'DeleteProdutoAluguel', 'codProdutoAluguel;'+codProdutoAluguel+'|', retornoDeleteProdutoAluguel);
}

function retornoDeleteProdutoAluguel(retorno){
    if (retorno[0]){
        listaProdutosAluguel($("#codAluguel").val());
        $("#codProdutoAluguel").val('');
        $("#codProdutoCorAluguel").val('');
        $("#dscProdutoAluguel").val('');
        $("#qtdProdutoAluguel").val('');
        $("#vlrProdutoAluguel").val('');
        swal({
            title: "Sucesso!",
            text: "Produto removido com sucesso!",
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

$(document).ready(function(){
    // listarComboboxProduto();

    $("#dscProdutoAluguel").keyup(function(){
        if ($(this).val().length>3){
            selecionaProdutos();
        }
    });

    $(".refProduto").change(function(){
        if($("#codProdutoCorAluguel").val() !== '' && $("#dtaAluguel").val() !== '') {
            var parametros = "dtaAluguel;"+$("#dtaAluguel").val()+"|codProdutoCor;"+$("#codProdutoCorAluguel").val()+"|";
            ExecutaDispatch('Produto', 'ListarProdutosPorDia', parametros, montaTabelaProduto);
        } else {
            $("#tabelaRefProduto").hide('fade');
        }
    });

});