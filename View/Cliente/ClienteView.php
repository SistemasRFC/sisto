<!DOCTYPE html>
<html>
    <head>
        <?php include "../../View/Scripts.php"; ?>
        <script src="../../View/Cliente/js/ClienteView.js?rdm=<?php echo time(); ?>"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <?php include "../../View/MenuPrincipal/Cabecalho.php"; ?>
        <input type="hidden" id="codCliente">
        <div class="container-fluid" id="tdCliente">
            <div class="row">&nbsp;</div>
            <div class="row">&nbsp;</div>
            <div class="row">&nbsp;</div>
            <div class="row">&nbsp;</div>
            <div class="row">
                <div class="col-1">
                    <input type="button" id="btnNovoCliente" class="btn btn-secondary" value="Novo Cliente">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <?php include_once "CadClienteView.php";?>
                </div>
            </div>
            <div class="row">&nbsp;</div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div id="tabelaClientes" class="table-responsive"></div>
                </div>
            </div>
            <div class="row">&nbsp;</div>
            <div class="row">&nbsp;</div>
        </div>
    </body>
</html>