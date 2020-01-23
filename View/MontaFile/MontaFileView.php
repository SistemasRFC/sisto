
<html>
    <head>
        <title>Gerar Arquivos - Sisto</title>
        <script src="../../View/MontaFile/JavaScript/MontaFileView.js?rdm=<?php echo V; ?>"></script>        
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
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
