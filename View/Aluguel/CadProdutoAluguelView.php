<script src="../../View/Aluguel/js/CadProdutoAluguelView.js?rdm=<?php echo V; ?>"></script>
<input type="hidden" id="codProdutoAluguel">
<div class="container-fluid">
    <div class="row">
        <div class="col-11 col-sm-11 col-md-10 col-lg-6" style="padding: 0px;">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                <label><b>Produto</b></label><br>
                <input type='hidden' id='codProdutoCorAluguel' class='persist refProduto'>
                <input id="dscProdutoAluguel" class='form-control'/>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-12" style="padding-top: 8px;">
                <div id="tabelaRefProduto"></div>
            </div>
        </div>
        <div class="col-1 col-sm-1 col-md-1 col-lg-1" style="padding: 0px;padding-top: 32px;">
            <button id="bntIncProduto" class="btn btn-default" title="Incluir Produto" style="border: 1px solid #ccc;cursor: pointer;">...</button>
        </div>
        <div class="col-11 col-sm-11 col-md-5 col-lg-4">
            <label><b>Quantidade</b></label>
            <input type="text" id="qtdProdutoAluguel" class="form-control">
        </div>
    </div>
    <!-- <div class="row">
    </div> -->
    <div class="row">&nbsp;</div>
</div>
<div class="modal fade bd-example-modal-lg" id="modalProduto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Cliente</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <?php include_once "../Produto/CadProdutoView.php";?>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Voltar</button>
                <button type="button" class="btn btn-primary" id="btnSalvarProduto">Salvar</button>
            </div>
        </div>
    </div>
</div>