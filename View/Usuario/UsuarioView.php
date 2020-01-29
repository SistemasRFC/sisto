<html>
    <title> Cadastro de Usuarios </title>
    <head>
        <?php include "../../View/Scripts.php"; ?>
        <script src="../../View/Usuario/js/UsuarioView.js?rdm=<?php echo V; ?>"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <?php include "../../View/MenuPrincipal/Cabecalho.php"; ?>
        <div class="container-fluid">
            <div class="row">&nbsp;</div>
            <div class="row">
              <div class="col-2 col-sm-2 col-md-1 col-lg-1">
                <input type="button" id="btnNovoUsuario" class="btn btn-secondary" value="Novo Usuario">
              </div>
            </div>
            <div class="row">&nbsp;</div>
        </div>
        <div class="container">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                <div id="tabelaUsuario" class="table-responsive"></div>
              </div>
            </div>
        </div>
    </body>
</html>
<div class="modal fade bd-example-modal-lg" id="cadUsuario" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Cadastro do Usuário</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <?php include_once "CadUsuarioView.php";?>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Voltar</button>
        <button type="button" class="btn btn-info" id="btnReiniciaSenha">Reiniciar Senha</button>
        <button type="button" class="btn btn-primary" id="btnSalvarUsuario">Salvar</button>
      </div>
    </div>
  </div>
</div>