<html>
    <head>
        <title>Sistema de Gerenciamento de Aluguéis</title>
        <?php include "../../View/Scripts.php"; ?>
        <link rel="stylesheet" href="../../Resources/jqx/jqwidgets/styles/jqx.bootstrap.css" type="media" />
        <link href="../../Resources/bootstrap/css/signin.css" rel="stylesheet">
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxinput.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxpasswordinput.js"></script>
        <script type="text/javascript" src="../../Resources/jqx/jqwidgets/jqxbuttons.js"></script>
        
        <script src="js/AlteracaoSenhaView.js?rdm=<?php echo V; ?>"></script>

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <div class="container">
            <form class="form-signin" accept-charset="UTF-8">
                <h2 class="form-signin-heading" align="center">Alterar Senha</h2>

                <label for="txtSenhaAtual">Senha Atual</label>
                <input type="password" id="txtSenhaAtual" class="form-control" placeholder="Senha Atual" required autofocus>

                <label for="txtSenhaNova">Nova Senha</label>
                <input type="password" id="txtSenhaNova" class="form-control" placeholder="Nova Senha" required>
                
                <label for="txtSenhaConfirmacao">Confirmação</label>
                <input type="password" id="txtSenhaConfirmacao" class="form-control" placeholder="Confirme a Nova Senha" required>

                <button class="btn btn-lg btn-primary btn-block" type="button" id="btnLogin">Confirmar</button>
            </form>
        </div>
    </body>
</html>

