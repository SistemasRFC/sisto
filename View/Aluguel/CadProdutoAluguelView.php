<!--<link href="../../Resources/bootstrap/css/bootstrap-combobox.css" rel="stylesheet">-->
<!--<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
---- Include the above in your HEAD tag --------
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>-->
<!--<div class="container">
	<div class="row">
            <div class="ui-widget">
                <label>Produto: </label><div id="divComboboxProduto"></div>
            </div>
	</div>
</div>-->
<!--<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>-->
<!------ Include the above in your HEAD tag ---------->

<!--<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">-->
<!--<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>-->
<script src="../../View/Aluguel/js/CadProdutoAluguelView.js?rdm=<?php echo time(); ?>"></script>
<input type="hidden" id="codProdutoAluguel">
<div class="container-fluid">
    <div class="row">
        <div class="col-6">
            <label for="search"><b>Produto:</b></label>
        </div>
        <div class="col-4">
            <b>Quantidade:</b>
        </div>
        <div class="col-2">&nbsp;</div>
    </div>
    <div class="row">
        <div class="col-6">
            <div id="divComboboxProduto"></div>
        </div>
        <div class="col-4">
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
    <div class="row">&nbsp;</div>
</div>