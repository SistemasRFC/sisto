<!DOCTYPE html>
<html>
    <head>
        <?php include "../../View/Scripts.php"; ?>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxinput.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxdatetimeinput.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxcalendar.js"></script>
        <script src="../../View/Aluguel/js/AluguelView.js?rdm=<?php echo V ?>"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <?php include "../../View/MenuPrincipal/Cabecalho.php"; ?>
        <input type="hidden" id="codAluguel">
        <div id="tdAluguel">
            <div class="row">&nbsp;</div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-1">
                    <input type="button" id="btnNovoAluguel" class="btn btn-secondary" value="Novo Aluguel">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <?php include_once "CadAluguelView.php";?>
                </div>
            </div>
            <div class="row">&nbsp;</div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div id="tabelaAlugueis" class="table-responsive"></div>
                </div>
            </div>
            <div class="row">&nbsp;</div>
            <div class="row">&nbsp;</div>
        </div>
    </body>
</html>