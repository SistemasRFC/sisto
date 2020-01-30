<html>
<script src="../../View/Aluguel/js/CadAluguelView.js?rdm=<?php echo V; ?>"></script>
<div class="container-fluid">
    <input type="hidden" id="codAluguel" name="codVenda" class="cadAluguel">
    <input type="hidden" value="8" id="codSituacao" name="codSituacao" class="cadAluguel persist">
    <div class="row">&nbsp;</div>
    <div class="row">
        <div class="col-12 col-sm-12 col-md-3 col-lg-3">
            <label><b>Data</b></label>
            <input type="hidden" id="dtaVenda" name="dtaVenda" class="cadAluguel" />
            <input type="text" id="dtaAluguel" class="refProduto" />
        </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
        <div class="col-11 col-xs-7 col-md-6 col-lg-6">
            <label><b>Cliente</b></label><br>
            <input type='hidden' id='codClienteAluguel' name="codCliente" class='persist cadAluguel'>
            <input id="nmeClienteAluguel" class='form-control' autocomplete="off"/>
            <div id="semResposta" style="display: none;"></div>
        </div>
        <div class="col-1 col-xs-1 col-md-1 col-lg-1" style="padding: 0px;padding-top: 32px;">
            <button id="bntIncCliente" class="btn btn-default" title="Incluir Cliente" style="border: 1px solid #ccc;cursor: pointer;">...</button>
        </div>
        <div class="col-12 col-xs-4 col-md-3 col-lg-3">
            <label for="codTipoPagamento"><b>Tipo de Pagamento</b></label>
            <div id="tdCodTipoPagamento"></div>
        </div>
    </div>
    <div class="row">&nbsp;</div>
</div>
<div class="row" id="cadProdutoCor">
    <div class="col-12 col-sm-12">
        <?php include_once "CadProdutoAluguelView.php";?>
    </div>
</div>
<div class="row">
    <div class="col-12 col-xs-11 col-md-11 col-lg-11" align="right">
        <button type="button" class="btn btn-primary" id="btnSalvarAluguel">Salvar</button>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-12">
            <div id="tabelaProdutosAluguel" class="table-responsive"></div>
        </div>
    </div>
    <div class="row">&nbsp;</div>
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
                <button type="button" class="btn btn-primary" id="btnSalvarCliente">Salvar</button>
            </div>
        </div>
    </div>
</div>