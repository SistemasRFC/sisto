<!DOCTYPE html>
<html>
    <head>
        <?php include "../../View/Scripts.php"; ?>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxwindow.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxbuttons.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxscrollbar.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxlistbox.js"></script>
        <script src="../../View/RelatorioAluguel/js/RelatorioAluguelView.js?rdm=<?php echo V; ?>"></script>
        <script src="../../View/Aluguel/js/classes/AutoCompleteClass.js?rdm=<?php echo V; ?>"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <?php include "../../View/MenuPrincipal/Cabecalho.php"; ?>
        <div class="container-fluid" id="tdProduto">
            <div class="row" style="padding-top: 10px">
                <div class="col-12 col-xs-12 col-md-12 col-lg-12" align="center">
                    <h3>LISTA DE ALUGUÉIS POR CLIENTE</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-xs-6 col-md-4 col-lg-4">
                    <label><b>Cliente</b></label><br>
                    <input type='hidden' id='codCliente' name='codCliente' class='persist'>
                    <input id="nmeCliente" class='form-control' autocomplete="off"/>
                </div>
                <div class="col-2 col-xs-2 col-md-2 col-lg-2" style="padding-top: 32px" align="right">
                    <button type="button" id="btnBuscar" class="btn btn-primary" title="Buscar alugueis cliente">Buscar</button>
                </div>
            </div>
            <div class="row" style="margin-top: 20px;">
                <div class="col-12 col-xs-12 col-md-12 col-lg-12" align="center">
                    <div id="listaAlugueisPorCliente"></div>
                </div>
            </div>
        </div>
    </body>
</html>
<div id='painelAutoComplete'>
    <div id='divAutoComplete'><div id="windowHeader">
    </div>
    <div style="overflow: hidden;" id="windowContent">
    </div> 
</div>