var ListaRelatorioAluguel;
$(function(){
    $("#btnBuscar").click(function(){
        var parametros = retornaParametros();
        ExecutaDispatch('RelatorioAluguel', 'ListarRelatorioAluguel', parametros, MontaTabelaAlugueis);
    });
});

function MontaTabelaAlugueis(dados){
    lista = dados[1];
    dadosCliente = dados[2];
    ListaRelatorioAluguel = dados;
    var tabela = '';
    if(dadosCliente != null){
        tabela += '<table id="tbAluguel" style="width:100%;font-size: 20px;border: 1px solid #000;background-color: #ccc">';
        tabela += ' <tr style="height: 40px;">';
        tabela += "  <td><b>Cliente: </b>"+dadosCliente[0].NME_CLIENTE+"</td>";
        tabela += "  <td><b>CPF: </b>"+dadosCliente[0].NRO_CPF+"</td>";
        tabela += ' </tr>';
        tabela += ' <tr style="height: 40px;">';
        tabela += "  <td colspan='2'><b>Telefone: </b>"+dadosCliente[0].NRO_TELEFONE+"</td>";
        tabela += ' </tr>';
        tabela += ' </table>';
    }
    tabela += ' <br>';
    if(lista != null){
        var trCor = 'white';
        tabela += '<table id="tbAluguel" style="width:100%">';
        tabela += '<thead>';
        tabela += ' <tr style="height: 45px;">';
        tabela += "  <th width='10%' style='text-align: center;'><b>Data</b></th>";
        tabela += "  <th width='37%'><b>Produtos</b></th>";
        tabela += "  <th width='8%' style='text-align: center;'><b>Situação</b></th>";
        tabela += "  <th width='11%' style='text-align: right;'><b>Valor</b></th>";
        tabela += "  <th width='8%' style='text-align: right;'></th>";
        tabela += ' </tr>';
        tabela += '</thead>';
        tabela += '<tbody>';
        for (i=0;i<lista.length;i++){
            if(trCor == "white") { trCor = "#DCDCDC" } else { trCor = "white"}
            tabela += "<tr style='background-color:"+trCor+";height: 45px;border-top: 1px solid #000;border-bottom: 1px solid #000;'>";
            tabela += "<td style='text-align: center;'>"+lista[i].DTA_ALUGUEL+"</td>";
            tabela += '<td>';
            var produtos = lista[i].PRODUTOS;
            if ( produtos !== null ) {
                for ( var j = 0;j < produtos.length; j++ ) {
                    tabela += ''+produtos[j].DSC_PRODUTO_COR+' - '+produtos[j].QTD_VENDA+'<br>';
                }
            }
            tabela += '</td>';
            tabela += "<td style='text-align: center;'>"+lista[i].DSC_SITUACAO+"</td>";
            tabela += "<td style='text-align: right;'>R$ "+lista[i].VLR_TOTAL+"</td>";
            tabela += "<td style='text-align: center;'>";
            if(lista[i].COD_SITUACAO != 7) {
                tabela += " <a href=\"javascript:montaRecibo('"+i+"');\">Recibo</a>";
            }
            tabela += "</td>";
            tabela += '</tr>';

        }
        tabela += '</tbody>';
        tabela += '</table>';
    }else{
        tabela += '<h4>Não há alugueis com esse cliente</h4>'   
    }
    $("#listaAlugueisPorCliente").html(tabela);
}

function montaRecibo(indice) {
    var aluguel = ListaRelatorioAluguel[1][indice];
    var cliente = ListaRelatorioAluguel[2][0];
    // Montar Recibo 
    var recibo;
    recibo = "<table width='80%' style='margin: auto'>";
    recibo += "  <tr>";
    recibo += "      <td>";
    recibo += "          <table width='100%' style='border: 1px solid #000; border-radius: 5px;'>";
    recibo += "             <tr>";
    recibo += "                 <td width='70%'>";
    recibo += "                     <img src='../../Resources/images/topoLG.png' alt='Logo LG' width='100%'/>";
    recibo += "                 </td>";
    recibo += "                 <td>";
    recibo += "                     <table width='100%'>";
    recibo += "                         <tr>";
    recibo += "                             <td>";
    recibo += "                                 <b style='font-size: 40px;'>Recibo</b>";
    recibo += "                             </td>";
    recibo += "                         </tr>";
    recibo += "                         <tr>";
    recibo += "                             <td>";
    recibo += "                                 <span style='border-bottom: 1px solid #000'>"+aluguel.DATA_RECIBO+"</span>";
    recibo += "                             </td>";
    recibo += "                         </tr>";
    recibo += "                     </table>";
    recibo += "                 </td>";
    recibo += "             </tr>";
    recibo += "          </table>";
    recibo += "      </td>";
    recibo += "  </tr>";
    recibo += "  <tr>";
    recibo += "     <td colspan='2'>";
    recibo += "         <table width='100%' style='border: 1px solid #000'>";
    recibo += "             <tr>";
    recibo += "                 <td>";
    recibo += "                     <b>Nome do Locatário: </b>"+cliente.NME_CLIENTE;
    recibo += "                 </td>";
    recibo += "                 <td>";
    recibo += "                     <b>CPF: </b>"+cliente.NRO_CPF;
    recibo += "                 </td>";
    recibo += "             </tr>";
    recibo += "             <tr>";
    recibo += "                 <td>";
    recibo += "                     <b>Local de Entrega: </b>"+aluguel.DSC_ENDERECO_ENTREGA;
    recibo += "                 </td>";
    recibo += "                 <td>";
    recibo += "                     <b>Fone: </b>"+cliente.NRO_TELEFONE;
    recibo += "                 </td>";
    recibo += "             </tr>";
    recibo += "             <tr>";
    recibo += "                 <td>";
    recibo += "                     <b>Data de Entrega: </b>"+aluguel.DTA_ALUGUEL;
    recibo += "                 </td>";
    recibo += "                 <td>";
    recibo += "                     <b>Data de Devolução: </b>"; // Não existe ainda
    recibo += "                 </td>";
    recibo += "             </tr>";
    recibo += "         </table>";
    recibo += "     </td>";
    recibo += "  </tr>";
    recibo += "  <tr>";
    recibo += "     <td colspan='2'>";
    recibo += "         <table width='100%' border='1'>";
    recibo += "             <tr>";
    recibo += "                 <th>";
    recibo += "                     <b>QUANT.</b>";
    recibo += "                 </th>";
    recibo += "                 <th>";
    recibo += "                     <b>DESCRIÇÃO</b>";
    recibo += "                 </th>";
    recibo += "                 <th>";
    recibo += "                     <b>VLR. UNITÁRIO</b>";
    recibo += "                 </th>";
    recibo += "                 <th>";
    recibo += "                     <b>VLR. TOTAL</b>";
    recibo += "                 </th>";
    recibo += "             </tr>";
    var produtos = aluguel.PRODUTOS;
    if ( produtos !== null ) {
        for ( var i = 0;i < produtos.length; i++ ) {
            // tabela += ''+produtos[j].DSC_PRODUTO_COR+' - '+produtos[j].QTD_VENDA+'<br>';
    recibo += "             <tr>";
    recibo += "                 <td>";
    recibo += "                     "+produtos[i].QTD_VENDA;
    recibo += "                 </td>";
    recibo += "                 <td>";
    recibo += "                     "+produtos[i].DSC_PRODUTO_COR;
    recibo += "                 </td>";
    recibo += "                 <td>";
    recibo += "                     "+produtos[i].VLR_VENDA;
    recibo += "                 </td>";
    recibo += "                 <td>";
    recibo += "                     "+produtos[i].VLR_TOTAL_PRODUTO;
    recibo += "                 </td>";
    recibo += "             </tr>";
        }
    }
    recibo += "         </table>";
    recibo += "     </td>";
    recibo += "  </tr>";
    recibo += "</table>";
    recibo += "<table width='80%' style='margin: auto'>";
    recibo += "  <tr>";
    recibo += "      <td>";
    recibo += "  <div class='col-8'>";
    recibo += "     <div class='row'>";
    recibo += "         <div class='col-12'>";
    recibo += "             Pagamento: () Dinheiro () Cartão () Boleto () Dep.Bancário";
    recibo += "         </div>";
    recibo += "         <div class='col-12'>";
    recibo += "             <table width='100%' style='border: 1px solid #000;border-radius: 5px'>";
    recibo += "                 <tr>";
    recibo += "                     <td>";
    recibo += "                         <p>Em caso de extravio ou danificações dos esquipamentos acima locados,";
    recibo += "                            fica sob responsabilidade do locatário o pagamento em dinheiro do mesmo.";
    recibo += "                            Vide Tabela do verso</p>";
    recibo += "                     </td>";
    recibo += "                 </tr>";
    recibo += "             </table>";
    recibo += "         </div>";
    recibo += "         <div class='col-12'>";
    recibo += "             <br>";
    recibo += "             _____________________________________________________<br>LOCADOR";
    recibo += "         </div>";
    recibo += "     </div>";
    recibo += "  </div>";
    recibo += "  <div class='col-4'>";
    recibo += "     <div class='row'>";
    recibo += "         <div class='col-12'>";
    recibo += "             <table width='60%' border='1'>";
    recibo += "                 <tr>";
    recibo += "                     <td>";
    recibo += "                         TOTAL R$: "+aluguel.VLR_TOTAL;
    recibo += "                     </td>";
    recibo += "                 </tr>";
    recibo += "             </table>";
    recibo += "         </div>";
    recibo += "         <div class='col-12'>";
    recibo += "             <br>";
    recibo += "             _____________________________________________________<br>CPF/CNPJ";
    recibo += "         </div>";
    recibo += "         <div class='col-12'>";
    recibo += "             <br>";
    recibo += "             _____________________________________________________<br>CLIENTE RESPONSÁVEL";
    recibo += "         </div>";
    recibo += "     </div>";
    recibo += "  </div>";
    recibo += "</td>";
    recibo += "</tr>";
    recibo += "</table>";


    wLeft = window.screenLeft ? window.screenLeft : window.screenX;
    wTop = window.screenTop ? window.screenTop : window.screenY;
    var w = 1000;
    var h = 700;
    var left = wLeft + (window.innerWidth / 2) - (w / 2);
    var top = wTop + (window.innerHeight / 2) - (h / 2);    
    var tmpSinteticoPagamentoColaborador = window.open('', 'Recibo LG Festas e Eventos', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left + ', screenX=' + left + ', screenY=' + top);
    tmpSinteticoPagamentoColaborador.document.body.innerHTML='';
    tmpSinteticoPagamentoColaborador.document.write(recibo);
    tmpSinteticoPagamentoColaborador.focus();
}

$(document).ready(function(){

    $("#nmeCliente").keyup(function(key){ 
        if ((key.keyCode!=40) && (key.keyCode!=38)){
            if ($(this).val().trim()!=''){
                var autoComplete = new AutoCompleteClass();
                autoComplete._height=150;
                autoComplete._nmeDiv='painelAutoComplete';
                autoComplete._nmeInput=$(this).attr('id');
                autoComplete._dataField="codCliente;COD|nmeCliente;TEXT";
                autoComplete._camposPesquisa='controller;Cliente|method;ListarClientesAutoComplete|verificaPermissao;N|term;'+$("#nmeCliente").val();
                autoComplete._displayMember="TEXT";
                autoComplete._valueMember="COD";
                
                autoComplete.CriarDivAutoComplete();            
            }else{
                if ( $("#divAutoComplete").length ){
                    $("#divAutoComplete").jqxWindow("destroy");
                }
            }
        }else{            
            $("#listaPesquisa").jqxListBox('selectedIndex' ,0);
            $("#listaPesquisa").jqxListBox("focus");
        }
    });
    
    $("#nmeCliente").focus(function(){
        if ($("#divAutoComplete").length){
            $("#divAutoComplete").jqxWindow("destroy");
        }
    }); 

    $("input[type=text]").focus(function(){
        if ($("#divAutoComplete").length){
            $("#divAutoComplete").jqxWindow("destroy");
        }
    }); 
});