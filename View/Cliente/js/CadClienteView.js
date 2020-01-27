$(function() {
    // $("#nroCpf").mask('999.999.999-99');
    // $("#nroTelefone").mask('(99) 99999-9999');
    // $("#btnSalvarCliente").click(function(){
    //     if($("#nmeCliente").val() == '' || $("#nroTelefone").val() == ''){
    //         swal({
    //             title: "Aviso!",
    //             text: "Preencha os campos: Nome e Telefone!",
    //             type: "info",
    //             confirmButtonText: "Fechar"
    //         }); 
    //     }else{
    //         if($("#codCliente").val() === ''){
    //             inserirCliente();
    //         }else{
    //             updateCliente();
    //         }   
    //     }
    // });
});
    
function inserirCliente(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    parametros = 'nmeCliente;'+$("#nmeCliente").val()+'|nroTelefone;'+$("#nroTelefone").val()+'|txtEmail;'+$("#txtEmail").val();
    parametros += '|nroCpf;'+$("#nroCpf").val()+'|dscEndereco;'+$("#dscEndereco").val();
    ExecutaDispatch('Cliente', 'InsertCliente', parametros, retornoInsertCliente);
}


function carregaCamposCliente(codCliente, nmeCliente, nroCpf, nroTelefone, txtEmail, dscEndereco){
    $("#codCliente").val(codCliente);
    $("#nmeCliente").val(nmeCliente);
    $("#nroCpf").val(nroCpf);
    $("#nroTelefone").val(nroTelefone);
    $("#txtEmail").val(txtEmail);
    $("#dscEndereco").val(dscEndereco);
    $("#modalCadCliente").modal('show');
}

function updateCliente(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    parametros = 'codCliente;'+$("#codCliente").val()+'|nmeCliente;'+$("#nmeCliente").val()+'|nroTelefone;'+$("#nroTelefone").val();
    parametros += '|txtEmail;'+$("#txtEmail").val()+'|nroCpf;'+$("#nroCpf").val()+'|dscEndereco;'+$("#dscEndereco").val();
    ExecutaDispatch('Cliente', 'UpdateCliente', parametros, retornoInsertCliente);
}