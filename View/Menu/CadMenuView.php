<script src="../../View/Menu/js/CadMenuView.js?rdm=<?php echo time(); ?>"></script>
<input type="hidden" id="codMenu">
<div class="container">
    <div class="row">
        <div class="col-lg-2">
            Descrição
        </div>
        <div class="col-lg-7">
            <input type="text" id="dscMenu" class="form-control">
        </div>
    </div>
    <div class="row"><div class="col-lg-2">&nbsp;</div></div>
    <div class="row">
        <div class="col-lg-2">
            Controller
        </div>
        <div class="col-lg-7">
            <input type="text" id="nmeController" class="form-control" size="20">
        </div>

        <div class="col-lg-1">
            <input type="button" id="btnController" value="Listar Controllers" class="btn btn-secondary btn-sm" >
        </div>

    </div>
    <div class="row"><div class="col-lg-2">&nbsp;</div></div>
    <div class="row">
        <div class="col-lg-2">
            Method
        </div>
        <div class="col-lg-7">
            <input type="text" id="nmeMethod" class="form-control">
        </div>

        <div class="col-lg-1">
            <input type="button" id="btnMetodo" value="Listar Métodos" class="btn btn-secondary btn-sm" >
        </div>

    </div>
    <div class="row"><div class="col-lg-2">&nbsp;</div></div>
    <div class="row">
        <div class="col-lg-2">
            Menu Pai
        </div>
        <div class="col-lg-7" id="divCodMenuPai">
        </div>
    </div>
    <div class="row"><div class="col-lg-2">&nbsp;</div></div>
    <div class="row">
        <div class="col-lg-2">
            <div class="checkbox">
                <label><input type="checkbox" id="indVisible">Visível</label>
            </div>                
        </div>
    </div>
    <div class="row"><div class="col-lg-2">&nbsp;</div></div>
    <div class="row">
        <div class="col-lg-2">                
            <div class="checkbox">
                <label><input type="checkbox" id="indAtivo">Ativo</label>
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