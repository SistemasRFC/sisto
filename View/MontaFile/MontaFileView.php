
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <script src="../../Resources/jquery/jquery-1.10.1.min.js"></script>
        <script src="../../Resources/bootstrap/js/popper.min.js"></script>
        <script src="../../Resources/bootstrap/js/bootstrap.min.js"></script>
        <!-- Bootstrap core CSS -->
        <link href="../../Resources/bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <!-- Custom styles for this template -->
        <link href="../../Resources/bootstrap/css/dashboard.css" rel="stylesheet">
        <script src="../../Resources/swal/dist/sweetalert.min.js"></script>
        <link rel="stylesheet" type="text/css" href="../../Resources/swal/dist/sweetalert.css">          
        <title>Gerar Arquivos - Demandas</title>
        <script src="../../View/MontaFile/JavaScript/MontaFileView.js?rdm=<?php echo time(); ?>"></script>        
    </head>
    <body>
        <?php include_once "../../View/MenuPrincipal/Cabecalho.php"; ?>
        <input type="hidden" id="method">
        <input type="hidden" id="codUsuario">
        <table>
            <tr>
                <td>
                    <input type="button" id="Refresh" value="Atualiza" onclick="javascript:MontaListaTabelas();">
                </td>
            </tr>
            <tr>
                <td id="listaTabelas">
                </td>
            </tr>
        </table>
    </body>
</html>
