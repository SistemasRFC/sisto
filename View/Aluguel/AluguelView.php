<!DOCTYPE html>
<html>
    <head>
        <?php include "../../View/Scripts.php"; ?>
        <!-- <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxinput.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxdatetimeinput.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxcalendar.js"></script> -->
        <script src="../../View/Aluguel/js/AluguelView.js?rdm=<?php echo V ?>"></script>
        <script src="../../View/Aluguel/js/classes/AluguelClass.js?rdm=<?php echo V ?>"></script>
        <script src="../../View/Aluguel/js/classes/ProdutoAluguelClass.js?rdm=<?php echo V ?>"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <?php include "../../View/MenuPrincipal/Cabecalho.php"; ?>
        <div class="container" id="tdAluguel" style="padding-top: 10px;">
            <div class="row">
                <div class="col-12 col-xs-4 col-md-6 col-lg-6">
                    <input type="button" id="btnNovoAluguel" class="btn btn-secondary" value="Novo Aluguel">
                    <input type="button" id="btnListaAlugueis" class="btn btn-primary" value="Listar Aluguéis">
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
    </body>
</html>
<div class="modal fade bd-example-modal-lg" id="modalListaAlugueis" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Lista de Aluguéis Agendados</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <div class="row" style="overflow-y: auto;">
                        <div class="col-12 col-xs-12 col-md-12 col-lg-12">
                            <div id="tabelaAlugueis" class="table-responsive"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer" align="center">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Voltar</button>
            </div>
        </div>
    </div>
</div>