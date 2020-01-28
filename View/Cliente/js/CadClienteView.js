$(function () {
    $("#dtaNascimento").jqxDateTimeInput({ width: '100%', height: '40px', formatString: 'dd/MM/yyyy', value: null });
    $("#nroCpf").jqxMaskedInput({ width: '100%', height: '40px', mask: '###.###.###-##' });
    $("#nroTelefone").jqxMaskedInput({ width: '100%', height: '40px', mask: '(##) #####-####' });
});

function inserirCliente() {
    var params = retornaParametros('cadCliente');
    ExecutaDispatch('Cliente', 'InsertCliente', params, retornoInsertCliente, 'Aguarde, cadastrando Cliente', 'Cliente cadastrado com sucesso!');
}


function carregaCamposCliente(codCliente, nmeCliente, nroCpf, nroTelefone, txtEmail, dscEndereco, dtaNascimento) {
    $("#codCliente").val(codCliente);
    $("#nmeCliente").val(nmeCliente);
    $("#nroCpf").val(nroCpf);
    $("#nroTelefone").val(nroTelefone);
    $("#txtEmail").val(txtEmail);
    $("#dscEndereco").val(dscEndereco);
    $("#dtaNascimento").val(dtaNascimento);
    $("#modalCadCliente").modal('show');
}

function updateCliente() {
    var params = retornaParametros('cadCliente');
    ExecutaDispatch('Cliente', 'UpdateCliente', params, retornoInsertCliente, 'Aguarde, atualizando cadastro', 'Cadastro atualizado com sucesso!');
}