$(function() {  
    valor = '{x:'+$(window).width/2+', y:'+$(window).heigth/2+'}';
    $("#txtSenhaAtual").jqxPasswordInput({height: 35, width: 255, placeHolder: 'Senha Atual', theme: 'bootstrap'});
    $("#txtSenhaNova").jqxPasswordInput({height: 35, width: 255, placeHolder: 'Nova Senha', theme: 'bootstrap'});
    $("#txtSenhaConfirmacao").jqxPasswordInput({height: 35, width: 255, placeHolder: 'Confirme a Senha', theme: 'bootstrap'});
    $("#CadastroForm").jqxWindow({
        autoOpen: true,
        height: 450,
        width: 350,
        showCloseButton: false,
        theme: 'energyblue',
        animationType: 'fade',
        showAnimationDuration: 500,
        closeAnimationDuration: 500,
        position: valor,
        isModal: false
    });
    $("#btnLogin").click(function(){
        if ($("#txtSenhaNova").val()!=$("#txtSenhaConfirmacao").val()){
            swal("", "A Nova senha não confere com a confirmação!", "error");
            return;
        }
        swal({
            title: "Aguarde!",
            imageUrl: "../../Resources/images/preload.gif",
            showConfirmButton: false
        });
        $.post('Dispatch.php',
               {
                   method: 'AlterarSenha',
                   controller: 'LoginController',
                   txtSenhaNova: $("#txtSenhaNova").val(),
                   txtSenhaAtual: $("#txtSenhaAtual").val()
               },
               function(logar){
                    logar = eval ('('+logar+')');
                    if (logar[0]==true){
                        swal({
                            title: "Auto close alert!",
                            text: logar[1]['TXT_MSG'],
                            timer: 2000,
                            showConfirmButton: false
                        },
                        function(){
                            $(location).attr('href',logar[1]['DSC_PAGINA']+'?method='+logar[1]['NME_METHOD']);
                        });                        
                        
                    }else{
                        $(".jquery-waiting-base-container").fadeOut({modo:"fast"});
                        swal({
                            title: "Erro!",
                            text: logar[1],
                            type: "error",
                            confirmButtonText: "Fechar"
                        });
                    }
               }
        );
    });

});
$(document).ready(function(){
    $("#nmeLogin").focus();
});
