$(function() {
    $("#btnInsertProdutoAluguel").click(function(){
        if($("#codAluguel").val() == ''){
            swal({
                title: "Aviso!",
                text: "Nenhum aluguel foi selecionado!",
                type: "info",
                confirmButtonText: "Fechar"
            }); 
        }else{
            if($("#comboboxProduto").val() === '' || $("#qtdProdutoAluguel").val() == ''){
                swal({
                    title: "Aviso!",
                    text: "Selecione um produto e informe a quantidade!",
                    type: "info",
                    confirmButtonText: "Fechar"
                }); 
            }else{
                if($('#codProdutoAluguel').val() == ''){
                    insertProdutoAluguel();
                }else{
                    updateProdutoAluguel();
                }
            }
        }
    });
});
  
function insertProdutoAluguel(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    parametros = 'codAluguel;'+$("#codAluguel").val()+'|codProdutoCor;'+$("#comboboxProduto").val()+'|qtdProdutoAluguel;'+$("#qtdProdutoAluguel").val()+'|qtdDisponivel;'+$(".qtdDisponivel").val();
    ExecutaDispatch('ProdutoAluguel', 'InsertProdutoAluguel', parametros, retornoInsertProdutoAluguel);
}

function retornoInsertProdutoAluguel(retorno){
    if (retorno[0]){
        $('#codProdutoAluguel').val('');
        $('#comboboxProduto').val('');
        $('#qtdProdutoAluguel').val('');
        listaProdutosAluguel();
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

function carregaCamposProdutoAluguel(codProdutoAluguel, codProdutoCor, qtdProdutoAluguel){
    $('#codProdutoAluguel').val(codProdutoAluguel);
    $('#comboboxProduto').val(codProdutoCor);
    $('#qtdProdutoAluguel').val(qtdProdutoAluguel);
}

function listaProdutosAluguel(codAluguel){
    ExecutaDispatch('ProdutoAluguel','ListarProdutoAluguel','codAluguel;'+codAluguel, montaGridProdutosAluguel);
}

function montaGridProdutosAluguel(dados){
    if(dados[0]){
        dados = dados[1];
        if(dados != null){
            console.log(dados);
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
            for (i=0;i<dados.length;i++){
                tabela += '<tr>';
                tabela += '<td>'+dados[i].DSC_PRODUTO_COR+'</td>';
                tabela += '<td>'+dados[i].QTD_PRODUTO_ALUGUEL+'</td>';
                tabela += '<td>R$ '+dados[i].VLR_PRODUTO_COR+'</td>';
                tabela += '<td>R$ '+dados[i].VLR_ALUGUEL+'</td>';
                tabela += "<td><a href=\"javascript:carregaCamposProdutoAluguel('"+dados[i].COD_PRODUTO_ALUGUEL+"', '"+dados[i].COD_PRODUTO_COR+"', '"+dados[i].QTD_PRODUTO_ALUGUEL+"');\">Editar</a> \n\
                               &nbsp;&nbsp; <a href=\"javascript:removeProdutoAluguel('"+dados[i].COD_PRODUTO_ALUGUEL+"');\">Excluir</a></td>";
                tabela += '</tr>';

            }
            tabela += '</tbody>';
            tabela += '<tfoot>';
            tabela += '<tr>';
            tabela += '<th colspan= "3"></th>';
            tabela += '<th><b>Total</b></th>';
            tabela += '<th>'+totalFinal+'</th>';
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

//function updateProdutoAluguel(){
//    swal({
//        title: "Aguarde, salvando registro!",
//        imageUrl: "../../Resources/images/preload.gif",
//        showConfirmButton: false
//    });
//    parametros = 'codProdutoAluguel;'+$("#codProdutoAluguel").val()+'|codProdutoCor;'+$("#comboboxProduto").val()+'|qtdProdutoAluguel;'+$("#qtdProdutoAluguel").val()+'|qtdDisponivel;'+$(".qtdDisponivel").val();
//    ExecutaDispatch('ProdutoAluguel', 'UpdateProdutoAluguel', parametros, retornoInsertProdutoAluguel);
//}

function removeProdutoAluguel(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    ExecutaDispatch('ProdutoAluguel', 'DeleteProdutoAluguel', 'codProdutoAluguel;'+$("#codProdutoAluguel").val(), retornoInsertProdutoAluguel);
}

function listarComboboxProduto(dtaAluguel = ''){
    ExecutaDispatch('Produto', 'ListarProdutoCor', 'dtaAluguel;'+dtaAluguel , montaComboboxProduto);
}

function montaComboboxProduto(dados){
    if(dados[0]){
        dados = dados[1];
         combo = '<select id="comboboxProduto" class="form-control">';
         combo += '<option value="" disabled selected hidden></option>';
        for (i=0;i<dados.length;i++){
            combo += '<option value="'+dados[i].COD_PRODUTO_COR+'" qtdDisponivel="'+dados[i].QTD_DISPONIVEL+'">'+dados[i].DSC_PRODUTO_COR+' - '+dados[i].QTD_DISPONIVEL+'</option>';
        }
         combo +='</select>';
         $("#divComboboxProduto").html(combo);
    }   
}

$(document).ready(function(){
    listarComboboxProduto();
});