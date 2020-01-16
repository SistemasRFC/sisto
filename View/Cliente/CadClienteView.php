<script src="../../View/Cliente/js/CadClienteView.js?rdm=<?php echo time(); ?>"></script>
<div class="container-fluid">
    <input id="codCliente" type="hidden" class="form-control">
    <div class="row">&nbsp;</div>
    <div class="row">
        <div class="col-7">
            <label><b>Nome</b></label>
            <input id="nmeCliente" type="text" class="form-control">
        </div>
        <div class="col-5">
            <label><b>CPF</b></label>
            <input id="nroCpf" type="text" class="form-control">
        </div>
    </div>
    <div class="row">
        <div class="col-3">
            <label><b>Telefone</b></label>
            <input id="nroTelefone" type="text" class="form-control">
        </div>
        <div class="col-6">
            <label><b>E-mail</b></label>
            <input type="text" id="txtEmailCliente" class="form-control">
        </div>
    </div>
    <div class="row">
        <div class="col-11">
            <label><b>Endereço</b></label>
            <input type="text" id="dscEndereco" class="form-control">
        </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
        <div class="col-1" align="right">
            <button type="button" class="btn btn-primary" id="btnSalvarCliente">Salvar</button>
        </div>
    </div>
</div>