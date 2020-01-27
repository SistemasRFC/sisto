<html>
    <head>
        <title>Menu - SISTO</title>
        <?php include "../../View/Scripts.php"; ?>
        <script src="../../View/Menu/js/MenuView.js?rdm=<?php echo V; ?>"></script>

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
        <?php include "../../View/MenuPrincipal/Cabecalho.php"; ?>
        <div class="row">&nbsp;</div>
        <div class="container-fluid" id="tdMenus">
          <div class="row">
            <div class="col-1 col-sm-1 col-md-1 col-lg-1">
              <input type="button" id="btnNovo" class="btn btn-primary" data-toggle="modal" value="Novo Menu">
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12" style="text-align: center;">
              <span style="font-size: 20px;">Lista de Menus do Sistema</span>
            </div>
          </div>
          <table align="center" width="100%">
              <tr>
                  <td id="tdListaMenus" align="left">
                      <div>
                          <div id="ListaMenus" class="table-responsive"></div>
                      </div>
                  </td>
              </tr>
          </table>
        </div>
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
      <div class="modal-body" style="overflow-y: auto;">
        <?php include_once "CadMenuView.php";?>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Voltar</button>
        <button type="button" class="btn btn-primary" id="btnSalvarMenu">Salvar</button>
      </div>
    </div>
  </div>
</div>

