$(function() {  
    valor = '{x:'+$(window).width/2+', y:'+$(window).heigth/2+'}';
    $(".btnSalvarPermissao").click(function(){
        SalvarPermissao();
    });
    $("#btnPesquisar").click(function(){
        ExecutaDispatch('Menu', 'ListarMenusPermissao', 
                        'codPerfil;'+$("#codPerfil").val(),
                        MontaListaMenus);
    });
});

function SalvarPermissao(){
    swal({
        title: "Aguarde!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });    
    var checkBoxes = '';
    $(".check").each(function(){
        if ($(this).is(':checked')){
            checkBoxes += $(this).attr('codMenu')+'#S$';
        }else{
            checkBoxes += $(this).attr('codMenu')+'#N$';
        }        
    }); 
    ExecutaDispatch('Permissao', 'SalvarPermissao', 
                    'codPerfil;'+$("#codPerfil").val()+'|codMenu;'+checkBoxes,
                    swal.close());    
}

function MontaListaMenus(ListaMenus){
    if (ListaMenus[0]){
        ListaMenus = ListaMenus[1];
        count=3;
        tabela = '<table width="100%">';
        for(i=0;i<ListaMenus.length;i++){
            if (count==3){
                tabela += "<tr>";
                count=0;
            }       
            if (ListaMenus[i].DSC_MENU_PAI!=null){
                dscMenu = "<strong>"+ListaMenus[i].DSC_MENU_PAI+"</strong>>>>"+ListaMenus[i].DSC_MENU;
            }else{
                dscMenu = ListaMenus[i].DSC_MENU;
            }
            tabela += "<td width='400px'>";
            tabela += "<input type='checkbox' id='chk"+ListaMenus[i].COD_MENU+"' name='codMenu[]' codMenu='"+ListaMenus[i].COD_MENU+"' class='check'><span>"+dscMenu+"</span></div><br>";
            tabela += "</td>";
            count++;
            if (count==3){
                tabela += "</tr>";
            }
        }
        tabela += '</table>';
        $("#ListaPermissaos").html(tabela);
        $('.check').attr('checked', false);
        for(i=0;i<ListaMenus.length;i++){        
            if (parseInt(ListaMenus[i].QTD)==0){            
                $("#chk"+ListaMenus[i].COD_MENU).prop('checked', false);
            }else{            
    //            alert(123);
                $("#chk"+ListaMenus[i].COD_MENU).prop('checked', 'checked');
            }
        }   
    }
    
}

function MontaComboPerfil(ListaPerfis){
    if (ListaPerfis[0]){
        ListaPerfis = ListaPerfis[1];
        var combo = '<select id="codPerfil" class="form-control">';
        for (i=0;i<ListaPerfis.length;i++){
            combo += '<option value="'+ListaPerfis[i].COD_PERFIL+'">'+ListaPerfis[i].DSC_PERFIL+'</option>';
        }
        combo += '</select>';
        $("#tdCodPerfil").html(combo);
    }
}

$(document).ready(function(){
    ExecutaDispatch('Perfil', 'ListarPerfilAtivo', undefined, MontaComboPerfil);
});
