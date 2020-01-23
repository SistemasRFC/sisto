<html>
    <title> Configuração de cores </title>
    <head>
        <?php include "../../View/Scripts.php"; ?>
        <script src="../../View/Cor/js/CorView.js?rdm=<?php echo V; ?>"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <?php include "../../View/MenuPrincipal/Cabecalho.php"; ?>
        <input type="hidden" id="codCor">
        <div class="container-fluid" id="tdCores">
            <div class="row">&nbsp;</div>
            <div class="row">
                <div class="col-2 col-sm-2 col-md-1 col-lg-1">
                    <input type="button" id="btnNovaCor" class="btn btn-secondary" value="Nova Cor">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <?php include_once "CadCorView.php";?>
                </div>
            </div>
            <div class="row">&nbsp;</div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div id="tabelaCores" class="table-responsive"></div>
                </div>
            </div>
            <div class="row">&nbsp;</div>
            <div class="row">&nbsp;</div>
        </div>
    </body>
</html>