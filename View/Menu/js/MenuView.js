function carregarListaMenus(){
    ExecutaDispatch('Menu', 'CarregaMenu', undefined, MontaGrid);
}

function MontaGrid(dados){
    if (dados[0]){
        dados = dados[1];
        var tabela = '<table class="table table-striped">';
        tabela += '<thead>';
        tabela += '<tr>';
        tabela += '<th>Menu</th>';
        tabela += '<th>Controller</th>';
        tabela += '<th>Método</th>';
        tabela += '<th>Ativo?</th>';
        tabela += '<th>Visível?</th>';
        tabela += '<th>Ações</th>';
        tabela += '</tr>';
        tabela += '</thead>';
        tabela += '<tbody>';
        for (i=0;i<dados.length;i++){

            tabela += '<tr>';
            tabela += '<td>'+dados[i].DSC_MENU+'</td>';
            tabela += '<td>'+dados[i].NME_CONTROLLER+'</td>';
            tabela += '<td>'+dados[i].NME_METHOD+'</td>';
            tabela += '<td>'+dados[i].IND_ATIVO+'</td>';
            tabela += '<td>'+dados[i].IND_VISIBLE+'</td>';
            tabela += '<td><a href="javascript:abreTelaCadastro('+dados[i].COD_MENU+');">Editar</a></td>';
            tabela += '</tr>';

        }
        tabela += '</tbody>';         
        tabela += '</tbody>';
        tabela += '</table>';
        $("#ListaMenus").html(tabela);
        swal.close();
    }
}

function abreTelaCadastro(codMenu){
    ExecutaDispatch('Menu', 'CarregaMenuByCod', "codMenu;"+codMenu, carregaCampos);
}

function carregaCampos(dados){
    if (dados[0]){
        dados = dados[1][0];
        $("#codMenu").val(dados.COD_MENU);
        $("#dscMenu").val(dados.DSC_MENU);
        $("#nmeController").val(dados.NME_CONTROLLER);
        $("#nmeMethod").val(dados.NME_METHOD);
        $("#codMenuPai").val(dados.COD_MENU_PAI);
        $("#indAtivo").prop('checked', dados.ATIVO);
        $("#indVisible").prop('checked', dados.VISIBLE);
        $("#cadastroMenu").modal('show');
    }
}

function limparCampos(){
    $("#cadastroMenu").modal('show');
    $("#codMenu").val('');
    $("#dscMenu").val('');
    $("#nmeController").val('');
    $("#nmeMethod").val('');
    $("#codMenuPai").val('');
    $("#indAtivo").prop('checked', false);
    $("#indVisible").prop('checked', false); 
}

$(document).ready(function(){
    carregarListaMenus();
    $("#btnNovo").click(function(){
        limparCampos();
        $("#cadastroMenu").modal('show');
    });
});