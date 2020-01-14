<html>
    <head>
        <title>Sistema de Gerenciamento de Recursos</title>
        <script src="../../Resources/jquery/jquery-1.10.1.min.js"></script>
        <script src="../../Resources/bootstrap/js/popper.min.js"></script>
        <script src="../../Resources/bootstrap/js/bootstrap.min.js"></script>
        <!-- Bootstrap core CSS -->
        <link href="../../Resources/bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <!-- Custom styles for this template -->
        <link href="../../Resources/bootstrap/css/dashboard.css" rel="stylesheet">
        <script src="../../Resources/swal/dist/sweetalert.min.js"></script>
        <link rel="stylesheet" type="text/css" href="../../Resources/swal/dist/sweetalert.css">          
        <script src="../../View/Menu/js/MenuView.js?rdm=<?php echo time(); ?>"></script>

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <?php include "../../View/MenuPrincipal/Cabecalho.php"; ?>        
        <table align="center" width="100%">
            <tr>
                <td align="left">
                    <span style="font-size: 20px; color: white;">Lista de Menus do Sistema</span>
                </td>
            </tr>
            <tr>
                <td>
                    <br>
                    <button type="button" class="btn btn-primary" data-toggle="modal" id="btnNovo">
                        Novo Menu
                    </button>
                    <br>
                </td>
            </tr>
            <tr>
                <td id="tdListaMenus" align="left">
                    <div class="container-fluid">
                        
                        <div id="ListaMenus" class="table-responsive"></div>
                    </div>
                </td>
            </tr>
        </table>
    </body>
</html>
<div class="modal fade bd-example-modal-lg" id="cadastroMenu" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Cadastro de Menus</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <?php include_once "CadMenuView.php";?>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Voltar</button>
        <button type="button" class="btn btn-primary" id="btnSalvarMenu">Salvar</button>
      </div>
    </div>
  </div>
</div>

