<html>
    <title> Configuração de perfis </title>
    <head>
        <?php include "../../View/Scripts.php"; ?>
        <script src="js/PerfilView.js?rdm=<?php echo V; ?>"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <?php include "../../View/MenuPrincipal/Cabecalho.php"; ?>
        <input type="hidden" id="codPerfil">
        <div class="container-fluid" id="tdPerfil">
            <div class="row">&nbsp;</div>
            <div class="row">
                <div class="col-2 col-sm-2 col-md-1 col-lg-1">
                    <input type="button" id="btnNovoPerfil" class="btn btn-secondary" value="Novo Perfil">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-5 col-md-5 col-lg-5">
                    <label for="dscPerfil"><b>Perfil</b></label>
                    <input id="dscPerfil" type="text" class="form-control">
                </div>
                <div class="col-1 col-sm-1 col-md-1 col-lg-1" style="padding-top: 35px;">
                    <div class="checkbox">
                        <input type="checkbox" id="indAtivo"><label><b> Ativo</b></label>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-12" align="right">
                            <button type="button" class="btn btn-primary" id="btnSalvarPerfil">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">&nbsp;</div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div id="tabelaPerfis" class="table-responsive"></div>
                </div>
            </div>
            <div class="row">&nbsp;</div>
            <div class="row">&nbsp;</div>
        </div>
    </body>
</html>