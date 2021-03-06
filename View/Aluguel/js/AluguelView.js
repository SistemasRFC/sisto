var listaAluguel=[];
$(function() {
    $("#btnNovoAluguel").click(function(){
        $(".cadAluguel").val('');
        $("#dtaAluguel").val('');
        $("#dataRecibo").val('');
        $("#nmeClienteAluguel").val('');
        $("#dscProdutoAluguel").val('');
        $("#indEnderecoCad").prop('checked', false);
        $("#tabelaProdutosAluguel").hide();
    });
    
    $("#btnListaAlugueis").click(function(){
        carregaGridAluguel();
        $("#modalListaAlugueis").modal('show');
    });

});

function carregaGridAluguel(){
    ExecutaDispatch('Aluguel', 'ListarAluguel', undefined, montaGridAluguel);
}

function montaGridAluguel(dados){
    if(dados[0]){
        dados = dados[1];
        if(dados != null){
            var tabela = '<table id="tbAluguel" class="display" style="width:100%">';
            tabela += '<thead>';
            tabela += '<tr>';
            tabela += " <th width='10%' style='text-align: center;'><b>Data</b></th>";
            tabela += " <th width='24%'><b>Cliente</b></th>";
            tabela += " <th width='37%'><b>Produtos</b></th>";
            tabela += " <th width='8%'><b>Situação</b></th>";
            tabela += " <th width='11%' style='text-align: center;'><b>Valor</b></th>";
            tabela += " <th width='8%' style='text-align: right;'><b>Ações</b></th>";
            tabela += '</tr>';
            tabela += '</thead><tbody>';
            for (i=0;i<dados.length;i++){
                listaAluguel[i] = new AluguelClass();
                listaAluguel[i].codVenda = dados[i].COD_ALUGUEL;
                listaAluguel[i].dtaVenda = dados[i].DTA_ALUGUEL;
                listaAluguel[i].codUsuario = dados[i].COD_USUARIO;
                listaAluguel[i].nmeUsuario = dados[i].NME_USUARIO;
                listaAluguel[i].codCliente = dados[i].COD_CLIENTE;
                listaAluguel[i].nmeCliente = dados[i].NME_CLIENTE;
                listaAluguel[i].codSituacao = dados[i].COD_SITUACAO;
                listaAluguel[i].codTipoPagamento = dados[i].COD_TIPO_PAGAMENTO;
                listaAluguel[i].dscEnderecoEntrega = dados[i].DSC_ENDERECO_ENTREGA;
                listaAluguel[i].dscPontoReferencia = dados[i].DSC_PONTO_REFERENCIA;
                listaAluguel[i].nroCepEntrega = dados[i].NRO_CEP_ENTREGA;
                listaAluguel[i].dtaRecibo = dados[i].DTA_RECIBO;
                listaAluguel[i].vlrTotal = dados[i].VLR_TOTAL;
                listaAluguel[i].produtosAluguel = dados[i].PRODUTOS;
                tabela += '<tr>';
                tabela += "<td style='text-align: center;'>"+dados[i].DTA_ALUGUEL+"</td>";
                tabela += '<td>'+dados[i].NME_CLIENTE+'</td>';
                tabela += '<td>';
                var produtos = dados[i].PRODUTOS;
                if ( produtos !== null ) {
                    for ( var j = 0;j < produtos.length; j++ ) {
                        tabela += ''+produtos[j].DSC_PRODUTO_COR+' - '+produtos[j].QTD_VENDA+'<br>';
                    }
                }
                tabela += '</td>';
                tabela += "<td style='text-align: center;'>"+dados[i].DSC_SITUACAO+"</td>";
                tabela += "<td style='text-align: right;'>R$ "+dados[i].VLR_TOTAL+"</td>";
                tabela += "<td style='text-align: center;'>";
                tabela += " <a href=\"javascript:carregaCamposAluguel('"+i+"');\">Editar</a>";
                tabela += " <a href=\"javascript:alteraStatusAluguel('"+dados[i].COD_ALUGUEL+"', '9');\">Entregar</a><br>";
                tabela += " <a href=\"javascript:alteraStatusAluguel('"+dados[i].COD_ALUGUEL+"', '7');\">Cancelar</a>";
                tabela += "</td>";
                tabela += '</tr>';

            }
            tabela += '</tbody>';
            tabela += '</table>';
            $("#tabelaAlugueis").html(tabela);
           $('#tbAluguel').DataTable({
               "ordering": true,
               "searching": false,
               "paging": false,
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
            var tabela = 'Não há alugueis!';            
            $("#tabelaAlugueis").html(tabela);
        }
    }
}

function alteraStatusAluguel(codAluguel, status) {
    var parametros = 'codVenda;'+codAluguel+'|codSituacao;'+status;
    ExecutaDispatch('Aluguel', 'UpdateStatusAluguel', parametros, retornoAlteraStatusAluguel);
}

function retornoAlteraStatusAluguel() {
    carregaGridAluguel();

}

$(document).ready(function(){
    $("#modalListaAlugueis").modal('hide');
});