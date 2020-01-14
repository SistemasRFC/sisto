<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <title>Menu Principal</title>
        <?php include "../../View/Scripts.php"; ?>
        <script src="../../View/MenuPrincipal/js/MenuPrincipalView.js?rdm=<?php echo time(); ?>"></script>
    </head>

    <body>
        <?php include "Cabecalho.php"; ?>
        <input type="hidden" id="codDemanda">
        <div class="container-fluid">
            <div class="row">&nbsp;</div>
            <div class="row">&nbsp;</div>
            <div class="row">&nbsp;</div>
            <div class="row">&nbsp;</div>
            <div class="row">
                <div class="col-12">
                    <h4>Aluguéis Agendados para Hoje</h4>
                    <div class="container-fluid">
                        <div id="tbAlugueisDia" class="table-responsive"></div>
                    </div>
                </div>
            </div>
            <div class="row">&nbsp;</div>
            <div class="row">
                <div class="col-12">
                    <h4>Aluguéis Agendados</h4>
                    <div class="container-fluid">
                        <div id="tbAlugueisAgendados" class="table-responsive"></div>
                    </div>
                </div>
            </div>
            <div class="row">&nbsp;</div>
            <div class="row">&nbsp;</div>
        </div>
    </body>
</html>