$(function() {
    $("#bntIncProduto").click(function(){
        LimparCamposProduto();
        $("#modalProduto").modal('show');
    });
});

function LimparCamposProduto() {
    $("#codProduto").val('');
    $("#dscProduto").val('');
    $(".vlrProdutoCor").val('');
    $(".qtdProdutoCor").val('');
}

function listaProdutosAluguel(codAluguel){
    ExecutaDispatch('ProdutoAluguel','ListarProdutoAluguel','codAluguel;'+codAluguel, montaGridProdutosAluguel);
}

function montaGridProdutosAluguel(dados){
    $("#tabelaProdutosAluguel").html(''); 
    if(dados[0]){
        dados = dados[1];
        if(dados != null){
            var tabela = '<table id="tbProdutosAluguel" class="display" style="width:100%">';
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

function carregaCamposProdutoAluguel(codProdutoAluguel, dscProdutoCor, codProdutoCor, qtdProdutoAluguel, vlrProdutoAluguel){
    $('#codProdutoAluguel').val(codProdutoAluguel);
    $('#dscProdutoCorAluguel').val(dscProdutoCor);
    $('#codProdutoCorAluguel').val(codProdutoCor).change();
    $('#qtdProdutoAluguel').val(qtdProdutoAluguel);
    $('#vlrProdutoAluguel').val(vlrProdutoAluguel);
}

function removeProdutoAluguel(codProdutoAluguel){
    ExecutaDispatch('ProdutoAluguel', 'DeleteProdutoAluguel', 'codProdutoAluguel;'+codProdutoAluguel+'|', retornoDeleteProdutoAluguel, 'Aguarde, excluindo produto', 'Produto excluido com sucesso');
}

function retornoDeleteProdutoAluguel(retorno){
    listaProdutosAluguel($("#codAluguel").val());
    $("#codProdutoAluguel").val('');
    $("#codProdutoCorAluguel").val('');
    $("#dscProdutoCorAluguel").val('');
    $("#qtdProdutoAluguel").val('');
    $("#vlrProdutoAluguel").val('');
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

$(document).ready(function(){
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