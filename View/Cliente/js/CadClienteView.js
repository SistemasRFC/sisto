$(function () {
    $("#dataNascimento").jqxDateTimeInput({ width: '100%', height: '40px', formatString: 'dd/MM/yyyy', value: null });
    // $("#nroCpf").jqxMaskedInput({ width: '100%', height: '40px', mask: '###.###.###-##' });
    // $("#nroTelefone").jqxMaskedInput({ width: '100%', height: '40px', mask: '(##) #####-####' });

    $("#nroCep").blur(function() {
        var params = 'nroCep;'+$(this).val();
        ExecutaDispatch('Cliente', 'PesquisaCep', params, preencheEndereco);
    });

    $("#dataNascimento").change(function() {
        $("#dtaNascimento").val($(this).val());
    });
});

function preencheEndereco(retorno) {
    var endereco = ""+retorno[1][0].logradouro+" "+retorno[1][0].bairro;
    $("#dscEndereco").val(endereco);
}

function inserirCliente() {
    var params = retornaParametros('cadCliente');
    ExecutaDispatch('Cliente', 'InsertCliente', params, retornoInsertCliente, 'Aguarde, cadastrando Cliente', 'Cliente cadastrado com sucesso!');
}


// function carregaCamposCliente(codCliente, nmeCliente, nroCpf, nroTelefone, txtEmail, dscEndereco, dtaNascimento) {
function carregaCamposCliente(indice) {
    console.log('>>', listaCliente[indice]);
    $("#codCliente").val(listaCliente[indice].codCliente);
    $("#nmeCliente").val(listaCliente[indice].nmeCliente);
    $("#nroCpf").val(listaCliente[indice].nroCpf);
    $("#nroTelefone").val(listaCliente[indice].nroTelefone);
    $("#txtEmail").val(listaCliente[indice].txtEmail);
    $("#nroCep").val(listaCliente[indice].nroCep);
    $("#dscEndereco").val(listaCliente[indice].dscEndereco);
    $("#dataNascimento").val(listaCliente[indice].dtaNascimento);
    $("#modalCadCliente").modal('show');
}

function updateCliente() {
    var params = retornaParametros('cadCliente');
    ExecutaDispatch('Cliente', 'UpdateCliente', params, retornoInsertCliente, 'Aguarde, atualizando cadastro', 'Cadastro atualizado com sucesso!');
}