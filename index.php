
<!doctype html>
<html lang="en">
  <head>
    <title>Sistema de Gerenciamento de Aluguéis</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Login</title>

    <!-- Bootstrap core CSS -->
    <link href="Resources/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <script src="Resources/jquery/jquery-1.10.1.min.js"></script>
    <!-- Custom styles for this template -->
    <link href="Resources/bootstrap/css/signin.css" rel="stylesheet">
    <script src="Resources/swal/dist/sweetalert.min.js"></script>
    <link rel="stylesheet" type="text/css" href="Resources/swal/dist/sweetalert.css">
    <script src="index.js?rdm=<?php echo time();?>"></script>
  </head>

  <body>

    <div class="container">

      <form class="form-signin">
        <h2 class="form-signin-heading">Login</h2>
        <label for="nmeLogin" class="sr-only">Usuário</label>
        <input type="text" id="nmeLogin" class="form-control" placeholder="Usuário" required autofocus>
        <label for="txtSenha" class="sr-only">Password</label>
        <input type="password" id="txtSenha" class="form-control" placeholder="Senha" required>

        <button class="btn btn-lg btn-primary btn-block" type="button" id="btnLogin">Log in</button>
      </form>

    </div> <!-- /container -->
  </body>
</html>
