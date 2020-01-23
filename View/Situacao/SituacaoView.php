<html>
    <title> Cadastro de Situações </title>
    <head>
        <?php include "../../View/Scripts.php"; ?>           
        <script src="../../View/Situacao/js/SituacaoView.js?rdm=<?php echo V; ?>"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <?php include "../../View/MenuPrincipal/Cabecalho.php"; ?>
        <input type="hidden" id="codSituacao">
        <div class="container-fluid">
            <div class="row">&nbsp;</div>
            <div class="row">
                <div class="col-2 col-sm-2 col-md-1 col-lg-1">
                    <input type="button" id="btnNovaSituacao" class="btn btn-secondary" value="Nova Situação">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                    <?php include_once "CadSituacaoView.php";?>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div id="tabelaSituacao" class="table-responsive"></div>
                </div>
            </div>
        </div>
    </body>
</html>