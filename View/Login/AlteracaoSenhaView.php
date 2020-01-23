<html>
    <head>
        <title>Sistema de Gerenciamento de Aluguéis</title>
        <?php include "../../View/Scripts.php"; ?>
        <link rel="stylesheet" href="../../Resources/jqx/jqwidgets/styles/jqx.bootstrap.css" type="media" />
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxinput.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxpasswordinput.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxbuttons.js"></script>
        <!-- <script type="text/javascript" src="../../Resources/jqx/scripts/gettheme.js"></script> -->
        
        <script src="js/AlteracaoSenhaView.js?rdm=<?php echo V; ?>"></script>

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <div id="CadastroForm">
            <div id="windowHeader" style="visibility: hidden;">
            </div>
            <div style="overflow: hidden;" id="windowContent">
                <form name="CadastroForm" method="post" accept-charset="UTF-8" action="Controller/Login/LoginController.php">
                    <table align="center">
                        <tr>
                            <td align="center">
                                <img src="../../Resources/images/cadeado.png" width="100" height="100"/>
                            </td>
                        </tr>
                        <tr>
                            <td align="center"><input type="password" id="txtSenhaAtual" style="font-size: 18px;"></td>
                        </tr>
                        <tr>
                            <td><br><br></td>
                        </tr>
                        <tr>
                            <td><input type="password" id="txtSenhaNova" style="font-size: 18px;"></td>
                        </tr>
                        <tr>
                            <td><br><br></td>
                        </tr>
                        <tr>
                            <td><input type="password" id="txtSenhaConfirmacao" style="font-size: 18px;"></td>
                        </tr>
                        <tr>
                            <td><br></td>
                        </tr>
                        <tr>
                            <td align="center">
                                <img id="btnLogin" src="../../Resources/images/btnLogin.jpg" width="100" height="100"/>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    </body>
</html>

