<script src="../../View/Cliente/js/CadClienteView.js?rdm=<?php echo V; ?>"></script>
<!-- <div class="container"> -->
    <input id="codCliente" name="codCliente" type="hidden" class="form-control cadCliente">
    <div class="row">
        <div class="col-7">
            <label><b>Nome</b></label>
            <input id="nmeCliente" name="nmeCliente" type="text" class="form-control cadCliente">
        </div>
        <div class="col-5">
            <label><b>CPF</b></label>
            <input id="nroCpf" name="nroCpf" type="text" class="form-control cadCliente">
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <label><b>Telefone</b></label>
            <input id="nroTelefone" name="nroTelefone" type="text" class="form-control cadCliente">
        </div>
        <div class="col-5">
            <label><b>E-mail</b></label>
            <input type="text" id="txtEmail" name="txtEmail" class="form-control cadCliente">
        </div>
        <div class="col-4">
            <label><b>Data de Nascimento</b></label>
            <input type="hidden" id="dtaNascimento" name="dtaNascimento" class="cadCliente">
            <input type="text" id="dataNascimento" class="form-control">
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <label><b>CEP</b></label>
            <input type="text" id="nroCep" name="nroCep" class="form-control cadCliente">
        </div>
        <div class="col-12">
            <label><b>Endereço</b></label>
            <input type="text" id="dscEndereco" name="dscEndereco" class="form-control cadCliente">
        </div>
    </div>
<!-- </div> -->