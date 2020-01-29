<script src="../../View/Aluguel/js/CadProdutoAluguelView.js?rdm=<?php echo V; ?>"></script>
<input type="hidden" id="codProdutoAluguel" name="codVendaProduto" class="cadAluguel">
<div class="container-fluid">
    <div class="row">
        <div class="col-11 col-sm-11 col-md-6 col-lg-5">
            <label><b>Produto</b></label><br>
            <input type='hidden' id='codProdutoCorAluguel' name="codProdutoCor" class='persist cadAluguel refProduto'>
            <input id="dscProdutoAluguel" class='form-control' autocomplete="off"/>
        </div>
        <div class="col-1 col-sm-1 col-md-1 col-lg-1" style="padding: 0px;padding-top: 32px;">
            <button id="bntIncProduto" class="btn btn-default" title="Incluir Produto" style="border: 1px solid #ccc;cursor: pointer;">...</button>
        </div>
        <div class="col-11 col-sm-11 col-md-2 col-lg-3">
            <label><b>Quantidade</b></label>
            <input type="text" id="qtdProdutoAluguel" name="qtdVenda" class="form-control cadAluguel">
        </div>
        <div class="col-11 col-sm-11 col-md-3 col-lg-3">
            <label><b>Valor</b></label>
            <input type="text" id="vlrProdutoAluguel" name="vlrVenda" class="form-control cadAluguel">
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12" style="padding-top: 8px;">
            <div id="tabelaRefProduto"></div>
        </div>
    </div>
    <div class="row">&nbsp;</div>
</div>
<div class="modal fade bd-example-modal-lg" id="modalProduto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Produto</h5>
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