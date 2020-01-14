function CarregaItensMenu(){
    $.post('../../Dispatch.php',
           {
               method: 'CarregaMenu',
               controller: 'MenuPrincipal'
           },
           function(retorno){
                retorno = eval ('('+retorno+')');
                if (retorno[0]==true){
                    MontaGrid(retorno[1]);
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
    );    
}
$(document).ready(function(){
    CarregaItensMenu();
});