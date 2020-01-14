$(function() {  
    $("#btnLogin").click(function(){
        swal({title: "Aguarde!", imageUrl: "Resources/images/preload.gif",showConfirmButton: false});
        if ($("#nmeLogin").val().trim()==''){
            swal({title: "", text: 'Por favor, preencha o login!', type: "warning",confirmButtonText: "Fechar"});
            return;
        }
        if ($("#txtSenha").val().trim()==''){
            swal({title: "", text: 'Por favor, preencha a senha!', type: "warning",confirmButtonText: "Fechar"});
            return;
        }        
        $.post('Dispatch.php',
               {
                   method: 'Logar',
                   controller: 'Login',
                   verificaPermissao: 'N',
                   nmeUsuario: $("#nmeLogin").val(),
                   txtSenha: $("#txtSenha").val(),
                   codSistema: 1
               },
               function(logar){
                    logar = eval ('('+logar+')');
                    console.log(logar);
                    if (logar[0]==true){
                        $(location).attr('href','Dispatch.php?controller='+logar[1][0]['DSC_PAGINA']+'&method='+logar[1][0]['NME_METHOD']);
                    }else{
                        $(".jquery-waiting-base-container").fadeOut({modo:"fast"});
                        swal({title: "Erro!", text: logar[1], type: "error",confirmButtonText: "Fechar"});
                    }
               }
        );
    });

});