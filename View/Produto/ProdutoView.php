<!DOCTYPE html>
<html>
    <head>
        <?php include "../../View/Scripts.php"; ?>
        <script src="../../View/Produto/js/ProdutoView.js?rdm=<?php echo time(); ?>"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <?php include "../../View/MenuPrincipal/Cabecalho.php"; ?>
        <input type="hidden" id="codProduto">
        <div class="container-fluid" id="tdProduto">
            <div class="row">&nbsp;</div>
            <div class="row">
                <div class="col-2 col-sm-2 col-md-1 col-lg-1" style="padding-bottom: 5px;">
                    <input type="button" id="btnNovoProduto" class="btn btn-secondary" value="Novo Produto">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                    <?php include_once "CadProdutoView.php";?>
                </div>
            </div>
            <div class="row">&nbsp;</div>
        </div>
        <div class="container">
            <div class="row">
                <div  class="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div id="tabelaProdutos" class="table-responsive"></div>
                </div>
            </div>
            <!-- <div class="row">&nbsp;</div> -->
        </div>
    </body>
</html>
<!--<div class="modal fade bd-example-modal-lg" id="cadProduto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Editar Produto</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <?php // include_once "CadProdutoView.php";?>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Voltar</button>
                <button type="button" class="btn btn-primary" id="btnSalvarProduto">Salvar</button>
            </div>
        </div>
    </div>
</div>-->