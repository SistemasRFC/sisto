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
            <form autocomplete="off">
                <label><b>Produto</b></label><br>
                <input type='hidden' id='codProdutoAluguel' class='persist'>
                <input id="dscProdutoAluguel" class='form-control'/>
            </form>
        </div>
        <div class="col-1" style="padding: 0px;padding-top: 32px;">
            <button id="bntIncProduto" class="btn btn-default" title="Incluir Produto" style="border: 1px solid #ccc;cursor: pointer;">...</button>
        </div>
            <!-- <label for="search"><b>Produto: </b></label> -->
            <!-- Transformar para ficar igual campo do cliente-->
            <!-- <div id="divComboboxProduto"></div> -->
        <!-- </div> -->
        <div class="col-2">
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
    <div class="row">&nbsp;</div>
</div>