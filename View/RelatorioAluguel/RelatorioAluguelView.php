<!DOCTYPE html>
<html>
    <head>
        <?php include "../../View/Scripts.php"; ?>
        <script src="../../View/RelatorioAluguel/js/RelatorioAluguelView.js?rdm=<?php echo time(); ?>"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <?php include "../../View/MenuPrincipal/Cabecalho.php"; ?>
        <div class="container-fluid" id="tdProduto">
            <div class="row">
                <div class="col-1">
                    <label for="clienteRef">Cliente</label>
                    <input type="text" id="clienteRef" name="clienteRef" class="form-control">
                </div>
                <div class="col-1">
                    <button type="button" id="btnBuscar" class="btn btn-primary" title="Buscar alugueis cliente">Buscar</button>
                </div>
            </div>
        </div>
        <!-- <div id="CadastroForm">
        <table width="100%">
            <tr>
                <td>
                    <table width="100%" class="TabelaCabecalho">
                        <tr>
                            <td width="20%" class="TDTitulo">
                                Data Início
                            </td>
                            <td width="20%"  class="TDTitulo">
                                Data Fim
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div id="dtaVendaInicio"></div>
                            </td>
                            <td>
                                <div id="dtaVendaFim"></div>
                            </td>
                            <td width="20%" >
                                <input type="button" id="btnPesquisa" value="Pesquisar">
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
            <div id="conteudo">
            </div>
        </div> -->
    </body>
</html>