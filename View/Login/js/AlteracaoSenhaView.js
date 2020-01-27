$(function() {  
    valor = '{x:'+$(window).width/2+', y:'+$(window).heigth/2+'}';

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
        $.post('../../Dispatch.php',
               {
                   method: 'AlterarSenha',
                   controller: 'Login',
                   txtSenhaNova: $("#txtSenhaNova").val(),
                   txtSenhaAtual: $("#txtSenhaAtual").val()
               },
               function(logar){
                    logar = eval ('('+logar+')');
                    if (logar[0]==true){
                        swal({
                            title: "",
                            type: "success",
                            text: logar[1]['TXT_MSG'],
                            timer: 2000,
                            showConfirmButton: false
                        },
                        function(){
                            $(location).attr('href','../../Dispatch.php?controller='+logar[1]['DSC_PAGINA']+'&method='+logar[1]['NME_METHOD']);
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
    $("#txtSenhaAtual").focus();
});
