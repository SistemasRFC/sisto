$(function() {
    $("#btnSalvarProduto").click(function(){
        if($("#dscProduto").val() == ''){
            swal({
                title: "Aviso!",
                text: "O campo Produto não foi preenchido!",
                type: "info",
                confirmButtonText: "Fechar"
            }); 
        }else{
            if($("#codProduto").val() === ''){
                inserirProduto();
            }else{
                updateProduto();
            }
        }
    });
});
    
function inserirProduto(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    var checkBoxes = '';
    $(".vlrProdutoCor").each(function(index, value) {
        var id = value.id;
        checkBoxes += id+'#'+value.value;
        $(".qtdProdutoCor").each(function(index, value){
            if ($(this).attr("codCor")==id){
                checkBoxes += '#'+value.value+'$';
            }
        });
    });
    parametros = 'dscProduto;'+$("#dscProduto").val()+'|codCor;'+checkBoxes;
    ExecutaDispatch('Produto', 'InsertProduto', parametros, retornoInsertProduto);
}

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

function carregaCamposProduto(codProduto, dscProduto){
    listarCoresProduto(codProduto);
    $("#codProduto").val(codProduto);
    $("#dscProduto").val(dscProduto);
//    $("#cadProduto").modal('show');
}

function updateProduto(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    var checkBoxes = '';
    $(".vlrProdutoCor").each(function(index, value) {
        var id = value.id;
        checkBoxes += id+'#'+value.value;
        $(".qtdProdutoCor").each(function(index, value){
            if ($(this).attr("codCor")==id){
                checkBoxes += '#'+value.value+'$';
            }
        });
    });
    parametros = 'codProduto;'+$("#codProduto").val()+'|dscProduto;'+$("#dscProduto").val()+'|codCor;'+checkBoxes;
    ExecutaDispatch('Produto', 'UpdateProduto', parametros, retornoInsertProduto);
}

function listarCoresProduto(codProduto){
    ExecutaDispatch('Cor', 'ListarCoresAtivas', 'codProduto;'+codProduto , montaGridCoresProduto);
}

function montaGridCoresProduto(dados){
    if (dados[0]){
        dados = dados[1];
        tabela = '<table width="100%">';
        tabela += '<tr>';
        tabela += '<td><b>Cor:</b></td>';
        tabela += '<td><b>Valor:</b></td>';
        tabela += '<td><b>Quantidade:</b></td>';
        tabela += '</tr>';
        for(i=0;i<dados.length;i++){
            tabela += "<tr>";
            tabela += "<td width='150px' codCor='"+dados[i].COD_COR+"'><span>"+dados[i].DSC_COR+"</span></div><br></td>";
            tabela += "<td><input type='text' id='"+dados[i].COD_COR+"' class='vlrProdutoCor' value='"+dados[i].VLR_PRODUTO_COR+"'></div><br></td>";
            tabela += "<td><input type='text' codCor='"+dados[i].COD_COR+"' id='"+dados[i].COD_COR+"' class='qtdProdutoCor' value='"+dados[i].QTD_PRODUTO_COR+"'></div><br></td>";
            tabela += "</tr>";
        }
        tabela += '</table>';
        $("#tbCoresProduto").html(tabela);
        for(i=0;i<dados.length;i++){
            if ($("#codProduto").val() == ''){
                $("#vlrProdutoCor").val('');
                $("#qtdProdutoCor").val('');
            }else{
                $("#vlrProdutoCor").val(dados[i].VLR_PRODUTO_COR);
                $("#qtdProdutoCor").val(dados[i].QTD_PRODUTO_COR);
            }
        }   
    }
}

$(document).ready(function(){
    ExecutaDispatch('Cor', 'ListarCoresAtivas', undefined , montaGridCoresProduto);
});