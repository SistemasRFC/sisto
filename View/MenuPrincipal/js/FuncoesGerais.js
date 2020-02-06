
function retornaParametros(classe=null){
    if(classe == null) {
        classe = 'persist';
    }
    var name;
    var value;
    var retorno='';
    $("."+classe).each(function(index) { 
        name = $(this).prop('name');
        switch ($(this).attr('type')) {
            case 'checkbox':
                if ($(this).is(":checked")){
                    value = 'S';
                }else{
                    value = 'N';
                }
                break;
                
            default:
                value = $(this).val();
                break;
        }
        retorno += name+';'+value+'|';
    });
    return retorno;
}

function ExecutaDispatch(Controller, Method, Parametros, Callback, MensagemAguarde, MensagemRetorno){
    if (MensagemAguarde!=undefined){
        swal({
            title: MensagemAguarde,
            imageUrl: "../../Resources/images/preload.gif",
            showConfirmButton: false
        });
    }
    var obj = new Object();
    Object.defineProperty(obj, 'method', {
        __proto__: null,
        enumerable : true,
        configurable : true,
        value: Method
    });    
    Object.defineProperty(obj, 'controller', {
        __proto__: null,
        enumerable : true,
        configurable : true,
        value: Controller
    });        
    if (Parametros != undefined){
        var dados = Parametros.split('|'); 
        for (i=0;i<dados.length;i++){
            var campos = dados[i].split(';');
            Object.defineProperty(obj, campos[0], {
                                __proto__: null,
                                enumerable : true,
                                configurable : true,
                                value: campos[1] });
        }    
    }
    $.post('../../Dispatch.php',
        obj,
        function(retorno){
            retorno = eval ('('+retorno+')');
            if (retorno[0]==true){
                if (MensagemRetorno!=undefined){
                    $(".jquery-waiting-base-container").fadeOut({modo:"fast"});
                    swal({
                        title: "Sucesso!",
                        text: MensagemRetorno,
                        showConfirmButton: false,
                        type: "success"
                    });
                    setTimeout(function(){
                        swal.close();
                    }, 2000);
                }
                if (Callback!=undefined){
                    Callback(retorno);
                }
            }else{
                $(".jquery-waiting-base-container").fadeOut({modo:"fast"});
                swal({
                    title: "Erro ao executar!",
                    text: "Erro: "+retorno[1],
                    type: "error",
                    confirmButtonText: "Fechar"
                });
             }
        }
    );     
}