$(function() {   
    $("#btnSalvarMenu").click(function(){
        salvarMenu();
    });
    $("#btnController").click(function(){
        ListarControllers();
    });
    $("#btnMetodo").click(function(){
        ListarMetodos();
    });  
    $("#nmeController").change(function(){
        $("#nmeMethod").val('');
    });
});

function salvarMenu(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });    
    var indAtivo='N';
    var indVisible='N';
    if ($("#indAtivo").is(":checked")){
        indAtivo = 'S';
    }
    if ($("#indVisible").is(":checked")){
        indVisible = 'S';
    }      
    ExecutaDispatch('Menu', 'SalvarMenu', 
                    "dscMenu;"+$("#dscMenu").val()+"|"+
                    "codMenu;"+$("#codMenu").val()+"|"+
                    "nmeController;"+$("#nmeController").val()+"|"+
                    "nmeMethod;"+$("#nmeMethod").val()+"|"+
                    "codMenuPai;"+$("#codMenuPai").val()+"|"+
                    "indAtivo;"+indAtivo+"|"+
                    "indVisible;"+indVisible, trataRetornoSalvar);
}

function trataRetornoSalvar(retorno){
    if (retorno[0]==true){
        $("#codMenu").val(retorno[2]);
        carregarListaMenus();
        $("#cadastroMenu").modal('hide');
        swal.close();
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

function ListarControllers(){
    swal({
        title: "Aguarde!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    $.post('../../Dispatch.php',
           {
               method: 'ListarClasses',
               controller: 'Menu'
           },
           function(retorno){
               
                retorno = eval ('('+retorno+')');
                swal.close();
                carregarListaControllers(retorno);
           }
    );
}

function carregarListaControllers(retorno){
    var tabela = '<div class="row">';
    tabela += ' <div class="col-12 col-sm-12 col-md-12 col-lg-12">';
    tabela += '  <table>';
    for(i=0;i<retorno.length;i++){
        tabela += '   <tr><td><a href="javascript:preencheCampo(\'nmeController\', \''+retorno[i].nmeArquivo+'\', \'modalControllers\');">'+retorno[i].nmeArquivo+'</a></td></tr>';
    }
    tabela += '  </table>'; 
    tabela += ' </div>';
    tabela += '</div>';
    $("#conteudoController").html(tabela);
    $('#modalControllers').modal('show');
}

function ListarMetodos(){
    if ($.trim($("#nmeController").val())==''){
        swal({
            title: "Erro!",
            text: 'Selecione uma controller, por favor!',
            type: "error",
            confirmButtonText: "Fechar"
        });
        return;
    }
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    $.post('../../Dispatch.php',
           {
               method: 'ListarMetodos',
               controller: 'Menu',
               nmeController: $("#nmeController").val()
           },
           function(retorno){
                retorno = eval ('('+retorno+')');
                swal.close();
                carregarListaMetodos(retorno);
           }
    );
}

function carregarListaMetodos(retorno){
    var tabela = '<table>';
    for(i=0;i<retorno.length;i++){
        tabela += '<tr><td><a href="javascript:preencheCampo(\'nmeMethod\', \''+retorno[i].dscMetodo+'\', \'modalMetodos\');">'+retorno[i].dscMetodo+'</a></td></tr>';
    }
    tabela += '</table>';  
    $("#conteudoMetodos").html(tabela);
    $('#modalMetodos').modal('show');
}

function preencheCampo(Campo, Valor, modal){
    $("#"+Campo).val(Valor);
    $('#'+modal).modal('hide');
}

function carregaComboMenuPai(Dados){
    var DropDown = '';
    if (Dados[0]){
        Dados = Dados[1];
        DropDown += '<select class="form-control" id="codMenuPai">';
        DropDown += ' <option value="-1">Selecione</option>';
        for (i=0;i<Dados.length;i++){
            DropDown += ' <option value="'+Dados[i].COD_MENU+'">'+Dados[i].DSC_MENU+'</option>';
        }
        DropDown += '</select>';        
    }
    $("#divCodMenuPai").html(DropDown);
}

$(document).ready(function(){
    ExecutaDispatch('Menu', 'ListarMenusAtivos', undefined, carregaComboMenuPai);
});
