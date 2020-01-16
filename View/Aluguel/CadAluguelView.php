<html>
<script src="../../View/Aluguel/js/CadAluguelView.js?rdm=<?php echo time(); ?>"></script>
<div class="container-fluid">
    <input type="hidden" value="8" id="codSituacao" class="persist">
    <div class="row">&nbsp;</div>
    <div class="row">
        <div class="col-3">
            <label><b>Data</b></label>
            <input type="text" class="form-control input-group date" id="dtaAluguel" >
        </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
        <div class="col-6">
            <form autocomplete="off">
                <label><b>Cliente</b></label>
                <div class="autocomplete" >
                    <input id="nmeCliente" class="form-control" type="text" name="nmeCliente" placeholder="Nome...">
                </div>
            </form>
        </div>
        <div class="col-1" style="padding: 0px;padding-top: 32px;">
            <button id="bntIncCliente" class="btn btn-default" title="Incluir Cliente" style="border: 1px solid #ccc;cursor: pointer;">...</button>
        </div>
    </div>
        <!-- <div class="col-5">
            <b>Cliente</b>
        </div> -->
    <!-- <div class="row">
        <div class="col-5">
            <div id="divComboCliente"></div>
        </div>
    </div> -->
    <!-- <div class="row">&nbsp;</div>
    <div class="row">
        <div class="col-4">
            <b>Situação</b>
        </div>
    </div>
    <div class="row">
        <div class="col-4">
            <div id="divComboSituacao"></div>
        </div>
    </div> -->
    <div class="row">&nbsp;</div>
    <div class="row">

    </div>
</div>
<!-- <div class="container-fluid"> -->
    <div class="row" id="cadProdutoCor">
        <div class="col-12">
            <?php include_once "CadProdutoAluguelView.php";?>
        </div>
    </div>
<!-- </div> -->
<div class="container-fluid">
    <div class="row">
        <div class="col-9"></div>
        <div class="col-2">
            <button type="button" class="btn btn-primary" id="btnSalvarAluguel">Salvar Aluguel</button>
        </div>
    </div>
</div>
</html>
<div class="modal fade bd-example-modal-lg" id="modalCliente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Cliente</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <?php include_once "../Cliente/CadClienteView.php";?>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Voltar</button>
                <button type="button" class="btn btn-primary" id="btnSalvarProdutoCor">Salvar</button>
            </div>
        </div>
    </div>
</div>