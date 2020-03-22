<!DOCTYPE html>
<html>
    <head>
        <?php include "../../View/Scripts.php"; ?>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxinput.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxdatetimeinput.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxcalendar.js"></script>
        <script src="../../View/Aluguel-new/js/AluguelView.js?rdm=<?php echo V ?>"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <?php include "../../View/MenuPrincipal/Cabecalho.php"; ?>
        <input type="hidden" id="codAluguel" name="codVenda" class="cadAluguel">
        <div class="container" id="tdAluguel" style="padding-top: 10px;">
            <div class="row">
                <div class="col-12 col-xs-4 col-md-6 col-lg-6">
                    <input type="button" id="btnNovoAluguel" class="btn btn-secondary" value="Novo Aluguel">
                    <input type="button" id="btnListaAlugueis" class="btn btn-primary" value="Listar Aluguéis">
                </div>
            </div>
        </div>
        <div class="container">
            <input type="hidden" value="8" id="codSituacao" name="codSituacao" class="cadAluguel persist">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-3 col-lg-3">
                    <label><b>Data</b></label>
                    <input type="text" id="dtaAluguel" name="dtaVenda" class="form-control cadAluguel refProduto" />
                </div>
            </div>
            <div class="row">&nbsp;</div>
            <div class="row">
                <div class="col-11 col-xs-11 col-md-6 col-lg-6">
                    <label><b>Cliente</b></label><br>
                    <input type='hidden' id='codClienteAluguel' name="codCliente" class='persist cadAluguel'>
                    <input id="nmeClienteAluguel" class='form-control'/>
                </div>
                <div class="col-1 col-xs-1 col-md-1 col-lg-1" style="padding: 0px;padding-top: 32px;">
                    <button id="bntIncCliente" class="btn btn-default" title="Incluir Cliente" style="border: 1px solid #ccc;cursor: pointer;">...</button>
                </div>
            </div>
            <div class="row">&nbsp;</div>
        </div>
        <div class="container" id="cadProdutoCor">
            <?php include_once "CadProdutoAluguelView.php";?>
        </div>
        <div class="row">
            <div class="col-12 col-xs-11 col-md-11 col-lg-11" align="right">
                <button type="button" class="btn btn-primary" id="btnSalvarAluguel">Salvar</button>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div id="tabelaProdutosAluguel" class="table-responsive"></div>
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
<div class="modal fade bd-example-modal-lg" id="modalClienteAluguel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Cliente</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <?php include_once "../Cliente/CadClienteView.php";?>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Voltar</button>
                <button type="button" class="btn btn-primary" id="btnSalvarCliente">Salvar</button>
            </div>
        </div>
    </div>
</div>