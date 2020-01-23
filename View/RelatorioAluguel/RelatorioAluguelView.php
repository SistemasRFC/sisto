<!DOCTYPE html>
<html>
    <head>
        <?php include "../../View/Scripts.php"; ?>
        <script src="../../View/RelatorioAluguel/js/RelatorioAluguelView.js?rdm=<?php echo V; ?>"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <?php include "../../View/MenuPrincipal/Cabecalho.php"; ?>
        <div class="container-fluid" id="tdProduto">
            <div class="row">
                <div class="col-12 col-xs-12 col-md-12 col-lg-12" align="center">
                    <h2>LISTA DE ALUGUÉIS POR CLIENTE</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-xs-6 col-md-4 col-lg-4">
                    <label><b>Cliente</b></label><br>
                    <input type='hidden' id='codCliente' class='persist'>
                    <input id="nmeCliente" class='form-control'/>
                </div>
                <div class="col-2 col-xs-2 col-md-2 col-lg-2" align="right">
                    <button type="button" id="btnBuscar" class="btn btn-primary" title="Buscar alugueis cliente">Buscar</button>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-xs-12 col-md-10 col-lg-10" align="center">
                    <div id="listaAlugueisPorCliente"></div>
                </div>
            </div>
        </div>
    </body>
</html>