$(function () {
    $("#dtaNascimento").mask('99/99/9999');
    $("#nroCpf").mask('999.999.999-99');
    $("#nroTelefone").mask('(61) 99999-9999');
    $("#nroCep").mask('99999-999');

    $("#nroCep").blur(function () {
        var params = 'nroCep;' + $(this).val();
        ExecutaDispatch('Cliente', 'PesquisaCep', params, preencheEndereco, 'Aguarde, buscando endereço');
    });
});

function preencheEndereco(retorno) {
    if (retorno[1][0] == null || retorno[1][0].erro) {
        swal({
            title: "Erro ao executar!",
            text: "Erro: CEP inválido",
            type: "error",
            confirmButtonText: "Fechar"
        });
        $("#dscEndereco").val('');
    } else {
        swal.close();
        var endereco = "" + retorno[1][0].logradouro + " - " + retorno[1][0].bairro;
        $("#dscEndereco").val(endereco);
    }
}

function inserirCliente() {
    var params = retornaParametros('cadCliente');
    ExecutaDispatch('Cliente', 'InsertCliente', params, retornoInsertCliente, 'Aguarde, cadastrando Cliente', 'Cliente cadastrado com sucesso!');
}

function carregaCamposCliente(indice) {
    $("#codCliente").val(listaCliente[indice].codCliente);
    $("#nmeCliente").val(listaCliente[indice].nmeCliente);
    $("#nroCpf").val(listaCliente[indice].nroCpf);
    $("#nroTelefone").val(listaCliente[indice].nroTelefone);
    $("#txtEmail").val(listaCliente[indice].txtEmail);
    $("#nroCep").val(listaCliente[indice].nroCep);
    $("#dscEndereco").val(listaCliente[indice].dscEndereco);
    $("#dtaNascimento").val(listaCliente[indice].dtaNascimento);
    $("#modalCadCliente").modal('show');
}

function updateCliente() {
    var params = retornaParametros('cadCliente');
    ExecutaDispatch('Cliente', 'UpdateCliente', params, retornoInsertCliente, 'Aguarde, atualizando cadastro', 'Cadastro atualizado com sucesso!');
}