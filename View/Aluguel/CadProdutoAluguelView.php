<script src="../../View/Aluguel/js/CadProdutoAluguelView.js?rdm=<?php echo V; ?>"></script>
<input type="hidden" id="codProdutoAluguel">
<div class="container-fluid">
    <div class="row">
        <div class="col-11 col-sm-11 col-md-10 col-lg-6">
            <label><b>Produto</b></label><br>
            <input type='hidden' id='codProdutoAluguel' class='persist'>
            <input id="dscProdutoAluguel" class='form-control'/>
        </div>
        <div class="col-1 col-sm-1 col-md-1 col-lg-1" style="padding: 0px;padding-top: 32px;">
            <button id="bntIncProduto" class="btn btn-default" title="Incluir Produto" style="border: 1px solid #ccc;cursor: pointer;">...</button>
        </div>
        <div class="col-11 col-sm-11 col-md-5 col-lg-4">
            <label><b>Quantidade</b></label>
            <input type="text" id="qtdProdutoAluguel" class="form-control">
        </div>
    </div>
    <div class="row">&nbsp;</div>
</div>
<div class="container">
    <div class="row">
        <div class="col-12">
            <div id="tabelaProdutosAluguel" class="table-responsive"></div>
        </div>
    </div>
    <div class="row">&nbsp;</div>
</div>