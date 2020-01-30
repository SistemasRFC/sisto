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

function limparCamposProduto() {
    $("#codProduto").val('');
    $("#dscProduto").val('');
    $(".vlrProdutoCor").val('');
    $(".qtdProdutoCor").val('');
}
    
function inserirProduto(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    var checkBoxes = '';
    $(".vlrProdutoCor").each(function(index, value) {
        var id = $(this).attr('codCor');
        console.log(id);
        checkBoxes += id+'#'+$(this).val()+'#'+$("#qtd"+id).val()+'$';
    });
    parametros = 'dscProduto;'+$("#dscProduto").val()+'|codCor;'+checkBoxes;
    ExecutaDispatch('Produto', 'InsertProduto', parametros, retornoInsertProduto);
}

function carregaCamposProduto(codProduto, dscProduto){
    listarCoresProduto(codProduto);
    $("#codProduto").val(codProduto);
    $("#dscProduto").val(dscProduto);
   $("#cadProduto").modal('show');
}

function updateProduto(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    var checkBoxes = '';
    $(".vlrProdutoCor").each(function(index, value) {
        var id = $(this).attr('codCor');
        console.log(id);
        checkBoxes += id+'#'+$(this).val()+'#'+$("#qtd"+id).val()+'$';
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
        tabela = "<div class='row'>";
        tabela += " <div class='col-3 col-sm-4 col-md-2 col-lg-2'>";
        tabela += "  <label><b>Cor:</b></label>";
        tabela += " </div>";
        tabela += " <div class='col-5 col-sm-4 col-md-4 col-lg-4'>";
        tabela += "  <label><b>Valor:</b></label>";
        tabela += " </div>";
        tabela += " <div class='col-4 col-sm-4 col-md-4 col-lg-4'>";
        tabela += "  <label><b>Quantidade:</b></label>";
        tabela += " </div>";
        tabela += "</div>";
        for(i=0;i<dados.length;i++){
            tabela += "<div class='row'>";
            tabela += " <div class='col-3 col-sm-4 col-md-2 col-lg-2'>";
            tabela += "  <label codCor='"+dados[i].COD_COR+"'>"+dados[i].DSC_COR+"</label>";
            tabela += " </div>";
            tabela += " <div class='col-5 col-sm-4 col-md-4 col-lg-4'>";
            tabela += "  <input type='text' codCor='"+dados[i].COD_COR+"' id='vlr"+dados[i].COD_COR+"' class='vlrProdutoCor form-control' value='"+dados[i].VLR_PRODUTO_COR+"'>";
            tabela += " </div>";
            tabela += " <div class='col-4 col-sm-4 col-md-4 col-lg-4'>";
            tabela += "  <input type='text' codCor='"+dados[i].COD_COR+"' id='qtd"+dados[i].COD_COR+"' class='qtdProdutoCor form-control' value='"+dados[i].QTD_PRODUTO_COR+"'>";
            tabela += " </div>";
            tabela += "</div>";
        }
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
        $(".vlrProdutoCor").maskMoney({showSymbol:true, symbol:"R$", decimal:",", thousands:"."});
        $(".qtdProdutoCor").maskMoney({showSymbol:true, symbol:"", decimal:",", thousands:".", precision:0});
    }
}

$(document).ready(function(){
    ExecutaDispatch('Cor', 'ListarCoresAtivas', undefined , montaGridCoresProduto);
});