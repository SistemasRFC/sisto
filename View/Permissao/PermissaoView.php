<html>
    <head>
        <?php include "../../View/Scripts.php"; ?>
        <script src="../../View/Permissao/js/PermissaoView.js?rdm=<?php echo time(); ?>"></script>

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <?php include "../../View/MenuPrincipal/Cabecalho.php"; ?>
        <div class="container-fluid" id="tdPermissoes">
            <div class="row">&nbsp;</div>
            <div class="row">
                <div class="col-12 col-sm-6 col-md-3 col-lg-3">
                    <label for="tdCodPerfil">Perfil</label>
                    <div id="tdCodPerfil"></div>
                </div>
                <div class="col-12 col-sm-2 col-md-1 col-lg-1" style="text-align: right;">
                        <input type="button" class="btn-sm btn-primary" value="Carregar Lista" id="btnPesquisar" style="margin-top: 30px;">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12" style="text-align: center;">
                    <h4 style="padding-top: 8px;">Lista de Permissões do Sistema</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-2 col-md-1 col-lg-1" style="padding-bottom: 6px;">
                    <input type="button" class="btnSalvarPermissao btn-sm btn-primary" value="Salvar Permissões">
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12" id="tdListaPermissaos">
                    <div id="ListaPermissaos" style="width: 90%;"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-2 col-md-1 col-lg-1" style="padding-top: 8px;">
                    <input type="button" class="btnSalvarPermissao btn-sm btn-primary" value="Salvar Permissões">
                </div>
            </div>
        </div>
    </body>
</html>

