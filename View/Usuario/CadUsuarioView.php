<script src="../../View/Usuario/js/CadUsuarioView.js?rdm=<?php echo time(); ?>"></script>
<div class="container-fluid">
    <div class="row">
        <div class="col-8"><b>Nome Completo</b></div>
        <div class="w-100"></div>
        <div class="col-8">
            <input type="text" class="form-control" id="nmeUsuario">
        </div>
    </div>
    <div class="row">
        <div class="col"><b>E-mail</b></div>
        <div class="col"><b>Celular</b></div>
        <div class="w-100"></div>
        <div class="col">
            <input type="text" class="form-control" id="txtEmail">
        </div>
        <div class="col">
            <input type="text" class="form-control" id="nroCelular">
        </div>
    </div>
    <div class="row">
        <div class="col"><b>Login</b></div>
        <div class="col"><b>Perfil</b></div>
        <div class="w-100"></div>
        <div class="col">
            <input type="text" class="form-control" id="txtLogin">
        </div>
        <div class="col">
            <div id="divComboPerfil"></div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="checkbox">
                <label><input type="checkbox" id="indAtivo"><b> Ativo</b></label>
            </div>
        </div>
    </div>
</div>