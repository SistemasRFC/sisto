<html>
<script src="../../View/Aluguel/js/CadAluguelView.js?rdm=<?php echo time(); ?>"></script>
<div class="container-fluid">
    <div class="row">&nbsp;</div>
    <div class="row">
        <div class="col-8">
            <b>Data</b>
        </div>
    </div>
    <div class="row">
        <div class="col-8">
            <input type="text" class="form-control input-group date" id="dtaAluguel" >
        </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
        <div class="col-5">
            <b>Cliente</b>
        </div>
    </div>
    <div class="row">
        <div class="col-5">
            <div id="divComboCliente"></div>
        </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
        <div class="col-4">
            <b>Situação</b>
        </div>
    </div>
    <div class="row">
        <div class="col-4">
            <div id="divComboSituacao"></div>
        </div>
    </div>
    <div class="row">&nbsp;</div>
</div>
<div class="container-fluid">
    <div class="row" id="cadProdutoCor">
        <div class="col-12">
            <?php include_once "CadProdutoAluguelView.php";?>
        </div>
    </div>
</div>
<div class="container-fluid">
    <div class="row">
        <div class="col-2">
            <button type="button" class="btn btn-primary" id="btnSalvarAluguel">Salvar Aluguel</button>
        </div>
    </div>
</div>
</html>
<!--<div class="modal fade bd-example-modal-lg" id="CadProdutoAluguel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Produtos</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <?php //include_once "CadProdutoAluguelView.php";?>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Voltar</button>
                <button type="button" class="btn btn-primary" id="btnSalvarProdutoCor">Salvar</button>
            </div>
        </div>
    </div>
</div>-->