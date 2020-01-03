$(function() {
    $("#btnSalvarCliente").click(function(){
        if($("#nmeCliente").val() == '' || $("#nroTelefone").val() == ''){
            swal({
                title: "Aviso!",
                text: "Preencha os campos: Nome e Telefone!",
                type: "info",
                confirmButtonText: "Fechar"
            }); 
        }else{
            if($("#codCliente").val() === ''){
                inserirCliente();
            }else{
                updateCliente();
            }   
        }
    });
});
    
function inserirCliente(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    parametros = 'nmeCliente;'+$("#nmeCliente").val()+'|nroTelefone;'+$("#nroTelefone").val()+'|txtEmail;'+$("#txtEmailCliente").val();
    ExecutaDispatch('Cliente', 'InsertCliente', parametros, retornoInsertCliente);
}

function retornoInsertCliente(retorno){
    if (retorno[0]){
        $("#codCliente").val('');
        $("#nmeCliente").val('');
        $("#nroTelefone").val('');
        $("#txtEmailCliente").val('');
        carregaGridClientes();
        swal({
            title: "Sucesso!",
            text: "Registro salvo com sucesso!",
            type: "success",
            confirmButtonText: "Fechar"
        });
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


function carregaCamposCliente(codCliente, nmeCliente, nroTelefone, txtEmail){
    $("#codCliente").val(codCliente);
    $("#nmeCliente").val(nmeCliente);
    $("#nroTelefone").val(nroTelefone);
    $("#txtEmailCliente").val(txtEmail);
}

function updateCliente(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    parametros = 'codCliente;'+$("#codCliente").val()+'|nmeCliente;'+$("#nmeCliente").val()+'|nroTelefone;'+$("#nroTelefone").val()+'|txtEmail;'+$("#txtEmailCliente").val();
    ExecutaDispatch('Cliente', 'UpdateCliente', parametros, retornoInsertCliente);
}