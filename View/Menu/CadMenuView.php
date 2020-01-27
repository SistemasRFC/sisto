<script src="../../View/Menu/js/CadMenuView.js?rdm=<?php echo V; ?>"></script>
<input type="hidden" id="codMenu">
<div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-7 col-md-8 col-lg-8">
        <label for="dscMenu"><b>Descrição</b></label>
        <input type="text" id="dscMenu" class="form-control">
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-12 col-sm-7 col-md-10 col-lg-10">
        <label for="nmeController"><b>Controller</b></label>
        <input type="text" id="nmeController" class="form-control">
      </div>
      <div class="col-2 col-sm-2 col-md-2 col-lg-2" style="padding-top: 35px;">
        <input type="button" id="btnController" value="Listar Controllers" class="btn btn-secondary btn-sm" >
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-12 col-sm-7 col-md-10 col-lg-10">
        <label for="nmeMethod"><b>Method</b></label>
        <input type="text" id="nmeMethod" class="form-control">
      </div>
      <div class="col-2 col-sm-2 col-md-2 col-lg-2" style="padding-top: 35px;">
        <input type="button" id="btnMetodo" value="Listar Métodos" class="btn btn-secondary btn-sm" >
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-12 col-sm-5 col-md-5 col-lg-5">
      <label for="divCodMenuPai"><b>Menu Pai</b></label>
          <div id="divCodMenuPai"></div>
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
        <div class="col-2 col-sm-2 col-md-2 col-lg-2">
            <div class="checkbox">
                <input type="checkbox" id="indVisible"><label>Visível</label>
            </div>                
        </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
        <div class="col-2 col-sm-2 col-md-2 col-lg-2">                
            <div class="checkbox">
                <input type="checkbox" id="indAtivo"><label>Ativo</label>
            </div>                
        </div>
    </div>
</div>

<div class="modal fade bd-example-modal-lg" id="modalControllers" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Controllers</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="conteudoController">
      </div>
    </div>
  </div>
</div>

<div class="modal fade bd-example-modal-lg" id="modalMetodos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Métodos</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="conteudoMetodos">
      </div>
    </div>
  </div>
</div>