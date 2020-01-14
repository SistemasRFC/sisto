<html>
    <head>
        <script src="../../Resources/jquery/jquery-1.10.1.min.js"></script>
        <script src="../../Resources/bootstrap/js/popper.min.js"></script>
        <script src="../../Resources/bootstrap/js/bootstrap.min.js"></script>
        <!-- Bootstrap core CSS -->
        <link href="../../Resources/bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <!-- Custom styles for this template -->
        <link href="../../Resources/bootstrap/css/dashboard.css" rel="stylesheet">
        <script src="../../Resources/swal/dist/sweetalert.min.js"></script>
        <link rel="stylesheet" type="text/css" href="../../Resources/swal/dist/sweetalert.css">           
        <script src="../../View/Permissao/js/PermissaoView.js?rdm=<?php echo time(); ?>"></script>

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <?php include "../../View/MenuPrincipal/Cabecalho.php"; ?>        
        <table align="center" width="100%">
            <tr>
                <td>
                    <table width="30%" border="0" align="left">
                        <tr>
                            <td class="style3">Perfil</td>
                            <td class="styleTD1" id="tdCodPerfil">
                            </td>
                            <td><input type="button" class="btn-sm btn-primary" value="Carregar Lista" id="btnPesquisar"></td>
                        </tr>
                    </table>
                </td>
            </tr>            
            <tr>
                <td>
                    <br>
                    <input type="button" class="btnSalvarPermissao btn-sm btn-primary" value="Salvar Permissões">
                    <br>
                </td>
            </tr>
            <tr>
                <td align="left">
                    <span style="font-size: 20px; color: black;">Lista de Permissões do Sistema</span>
                </td>
            </tr>
            <tr>
                <td id="tdListaPermissaos" align="left">
                    <div id="ListaPermissaos" style="overflow: auto; width: 90%"></div>
                </td>
            </tr>
            <tr>
                <td>
                    <br>
                    <input type="button" class="btnSalvarPermissao btn-sm btn-primary" value="Salvar Permissões">
                    <br>
                </td>
            </tr>            
        </table>
    </body>
</html>

