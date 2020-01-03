<html>
    <head>
        <title>Sistema de Gerenciamento de Recursos</title>
        <link rel="stylesheet" href="../../Resources/jqx/jqwidgets/styles/jqx.base.css" type="text/css" />
        <link rel="stylesheet" href="../../Resources/jqx/jqwidgets/styles/jqx.bootstrap.css" type="media" />
        <link rel="stylesheet" type="text/css" href="../../Resources/css/style.css">        
        <script src="../../Resources/jqx/scripts/jquery-1.10.2.min.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxcore.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxinput.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxpasswordinput.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxdata.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxbuttons.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/globalization/globalize.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxcore.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxwindow.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/scripts/gettheme.js"></script>
        <script src="../../Resources/swal/dist/sweetalert.min.js"></script>
        <link rel="stylesheet" type="text/css" href="../../Resources/swal/dist/sweetalert.css">        
        <script src="js/AlteracaoSenhaView.js"></script>

        <meta http-equiv="Content-Type" content="text/html; charset=utf8">
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

