<script src="../../View/Usuario/js/CadUsuarioView.js?rdm=<?php echo V; ?>"></script>
<div class="container-fluid">
    <input type="hidden" id="codUsuario">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-8 col-lg-8">
            <label for="nmeUsuario"><b>Nome Completo</b></label>
            <input type="text" class="form-control" id="nmeUsuario">
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-sm-6 col-md-6 col-lg-6">
            <label for="txtEmail"><b>E-mail</b></label>
            <input type="text" class="form-control" id="txtEmail">
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-6">
            <label for="nroCelular"><b>Celular</b></label>
            <input type="text" class="form-control" id="nroCelular">
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-sm-6 col-md-6 col-lg-6">
            <label for="txtLogin"><b>Login</b></label>
            <input type="text" class="form-control" id="txtLogin">
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-6">
            <label for="nroCelular"><b>Perfil</b></label>
            <div id="divComboPerfil"></div>
        </div>
    </div>
    <div class="row">
        <div class="col-6 col-sm-6 col-md-6 col-lg-6" style="padding-top: 8px;">
            <div class="checkbox">
                <input type="checkbox" id="indAtivo"><label><b> Ativo</b></label>
            </div>
        </div>
    </div>
</div>