var corClass = new Array();
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
    var tabela = "<div class='row'>";
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
    tabela += "<div class='row'>";
    tabela += " <div class='col-3 col-sm-4 col-md-2 col-lg-2'>";
    var totalCores = corClass.length;
    tabela += " <select id='codCorProduto' class='form-control'>";
    tabela += "<option value=-1>Selecione uma cor</option>";
    for (i=0;i<totalCores;i++){
        tabela += "<option value="+corClass[i]._codCor+">"+corClass[i]._dscCor+"</option>";
    }
    tabela += "</select>";
    tabela += " </div>";
    tabela += " <div class='col-5 col-sm-4 col-md-4 col-lg-4'>";
    tabela += "  <input type='text' codCor='' id='vlrNovo' class='form-control' value=''>";
    tabela += " </div>";
    tabela += " <div class='col-4 col-sm-4 col-md-4 col-lg-4'>";
    tabela += "  <input type='text' codCor='' id='qtdNovo' class='form-control' value=''>";
    tabela += " </div>";
    tabela += "</div>";    
    $("#tbCoresProduto").html(tabela);
    $("#vlrNovo").maskMoney({showSymbol:true, symbol:"R$", decimal:",", thousands:"."});
    $("#qtdNovo").maskMoney({showSymbol:true, symbol:"", decimal:",", thousands:".", precision:0});
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
    if ($("#vlrNovo").val()!=''){
        checkBoxes += $("#codCorProduto").val()+'#'+$("#vlrNovo").val()+'#'+$("#qtdNovo").val()+'$';
    }    
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
    if ($("#vlrNovo").val()!='' && $("#codCorProduto").val()!=-1){
        checkBoxes += $("#codCorProduto").val()+'#'+$("#vlrNovo").val()+'#'+$("#qtdNovo").val()+'$';
    }
    parametros = 'codProduto;'+$("#codProduto").val()+'|dscProduto;'+$("#dscProduto").val()+'|codCor;'+checkBoxes;
    ExecutaDispatch('Produto', 'UpdateProduto', parametros, retornoInsertProduto);
}

function listarCoresProduto(codProduto){
    ExecutaDispatch('ProdutoCor', 'ListarProdutosCor', 'codProduto;'+codProduto , montaGridCoresProduto);
}

function montaGridCoresProduto(dados){
    if (dados[0]){
        dados = dados[1];
        var tabela = "<div class='row'>";
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
        if (dados!=null){
            for(i=0;i<dados.length;i++){
                tabela += "<div class='row'>";
                tabela += " <div class='col-3 col-sm-4 col-md-2 col-lg-2'>";
                tabela += '  <a href="javascript:removeProdutoCor('+dados[i].COD_PRODUTO_COR+');"><img id="img'+dados[i].COD_PRODUTO+'" src="../../Resources/bootstrap/glyphicons_free/glyphicons/png/glyphicons-192-minus-sign.png"></a>';
                tabela += "  <label codCor='"+dados[i].COD_COR+"' class='cores'>"+dados[i].DSC_COR+"</label>";
                tabela += " </div>";
                tabela += " <div class='col-5 col-sm-4 col-md-4 col-lg-4'>";
                tabela += "  <input type='text' codCor='"+dados[i].COD_COR+"' id='vlr"+dados[i].COD_COR+"' class='vlrProdutoCor form-control' value='"+dados[i].VLR_PRODUTO_COR+"'>";
                tabela += " </div>";
                tabela += " <div class='col-4 col-sm-4 col-md-4 col-lg-4'>";
                tabela += "  <input type='text' codCor='"+dados[i].COD_COR+"' id='qtd"+dados[i].COD_COR+"' class='qtdProdutoCor form-control' value='"+dados[i].QTD_PRODUTO_COR+"'>";
                tabela += " </div>";
                tabela += "</div>";
            }
        }
        tabela += "<div class='row'>";
        tabela += " <div class='col-3 col-sm-4 col-md-2 col-lg-2'>";
        var totalCores = corClass.length;
        tabela += " <select id='codCorProduto' class='form-control'>";
        tabela += "<option value=-1>Selecione uma cor</option>";
        for (i=0;i<totalCores;i++){
            tabela += "<option value="+corClass[i]._codCor+">"+corClass[i]._dscCor+"</option>";
        }
        tabela += "</select>";
        tabela += " </div>";
        tabela += " <div class='col-5 col-sm-4 col-md-4 col-lg-4'>";
        tabela += "  <input type='text' codCor='' id='vlrNovo' class='form-control' value=''>";
        tabela += " </div>";
        tabela += " <div class='col-4 col-sm-4 col-md-4 col-lg-4'>";
        tabela += "  <input type='text' codCor='' id='qtdNovo' class='form-control' value=''>";
        tabela += " </div>";
        tabela += "</div>";
        
        $("#tbCoresProduto").html(tabela);
 
        $(".vlrProdutoCor").maskMoney({showSymbol:true, symbol:"R$", decimal:",", thousands:"."});
        $(".qtdProdutoCor").maskMoney({showSymbol:true, symbol:"", decimal:",", thousands:".", precision:0});
        $("#vlrNovo").maskMoney({showSymbol:true, symbol:"R$", decimal:",", thousands:"."});
        $("#qtdNovo").maskMoney({showSymbol:true, symbol:"", decimal:",", thousands:".", precision:0});
        $("#codCorProduto").change(function(){
            $(".cores").each(function(){
                if ($("#codCorProduto").val()==$(this).attr('codCor')){
                    swal({
                        title: "Aviso!",
                        text: "Esta cor já foi utilizada para este produto!",
                        type: "info",
                        confirmButtonText: "Fechar"
                    }); 
                    $("#codCorProduto").val('-1');
                }
            });
        });
    }
}

function removeProdutoCor(codProdutoCor){
    parametros = 'codProdutoCor;'+codProdutoCor;
    ExecutaDispatch('ProdutoCor', 'DeleteProdutoCor', parametros, retornoRemoveProdutoCor, 'Aguarde, removendo!', 'Cor removida com sucesso!');
}

function retornoRemoveProdutoCor(){
    listarCoresProduto($("#codProduto").val());
}

function carregaCores(lista){
    for (var i=0; i<lista[1].length;i++){
        var cor = new CorClass();
        cor._codCor = lista[1][i].COD_COR;
        cor._dscCor = lista[1][i].DSC_COR;
        corClass.push(cor);
    }
}
$(document).ready(function(){
    ExecutaDispatch('Cor', 'ListarCores', undefined , carregaCores);
});