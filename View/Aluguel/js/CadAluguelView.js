$(function() {
    var clientes = [
        {
            cod: 1,
            text: "Fernanda Lopes"
        },
        {
            cod: 2,
            text: "Rafael Lopes"
        },
        {
            cod: 3,
            text: "Amanda"
        }
    ]
    var countries = [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illnois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
        ];

        autocomplete(document.getElementById("myInput"), clientes);
        

    $("#btnSalvarAluguel").click(function(){
        if($("#dtaAluguel").val() == '' || $("#comboSituacao").val() == '' || $("#comboCliente").val() == ''){
            swal({
                title: "Aviso!",
                text: "Preencha todos os Campos!",
                type: "info",
                confirmButtonText: "Fechar"
            }); 
        }else{
            if($("#codAluguel").val() === ''){
                inserirAluguel();
            }else{
                updateAluguel();
            }
        }
    });
    
    $('.input-group.date').datepicker({
    	format: 'dd/mm/yyyy',
    	language: 'pt-BR',
    	weekStart: 0,
    	todayHighlight: true
    });
});
    
function inserirAluguel(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    var qtdDisponivel = $('#comboboxProduto option:selected').attr('qtdDisponivel');
    parametros = 'dtaAluguel;'+$("#dtaAluguel").val()+'|codCliente;'+$("#comboCliente").val()+'|codSituacao;'+$("#comboSituacao").val()+'|codProdutoCor;'+$("#comboboxProduto").val()+'|qtdProdutoAluguel;'+$("#qtdProdutoAluguel").val()+'|qtdDisponivel;'+qtdDisponivel;
    ExecutaDispatch('Aluguel', 'InsertAluguel', parametros, retornoInsertAluguel);
}

function retornoInsertAluguel(retorno){
    if (retorno[0]){
        carregaGridAluguel();
        $("#codAluguel").val(retorno[2]);
        listaProdutosAluguel(retorno[2]);
//        $("#dtaAluguel").val('');
//        $("#comboCliente").val('');
//        $("#comboSituacao").val('');
//        $("#comboboxProduto").val('');
//        $("#qtdProdutoAluguel").val('');
//        $('#codProdutoAluguel').val('');
//        $("#tabelaProdutosAluguel").hide();
        swal({
            title: "Sucesso!",
            text: "Registro salvo com sucesso!",
            type: "success",
            confirmButtonText: "Fechar"
        });
    }else{
        $(".jquery-waiting-base-container").fadeOut({modo:"fast"});
        swal({
            title: "Erro!",
            text: retorno[1],
            type: "error",
            confirmButtonText: "Fechar"
        });
    }
}


function carregaCamposAluguel(codAluguel, dtaAluguel, codCliente, codSituacao){
    $("#codAluguel").val(codAluguel);
    $("#dtaAluguel").val(dtaAluguel).change;
    $("#comboCliente").val(codCliente);
    $("#comboSituacao").val(codSituacao);
    listaProdutosAluguel(codAluguel);
    $("#cadProdutoCor").show();
}

function updateAluguel(){
    swal({
        title: "Aguarde, salvando registro!",
        imageUrl: "../../Resources/images/preload.gif",
        showConfirmButton: false
    });
    var qtdDisponivel = $('#comboboxProduto option:selected').attr('qtdDisponivel');
    parametros = 'codAluguel;'+$("#codAluguel").val()+'|dtaAluguel;'+$("#dtaAluguel").val()+'|codCliente;'+$("#comboCliente").val();
    parametros += '|codSituacao;'+$("#comboSituacao").val()+'|codProdutoCor;'+$("#comboboxProduto").val()+'|qtdProdutoAluguel;'+$("#qtdProdutoAluguel").val()+'|qtdDisponivel;'+qtdDisponivel;
    ExecutaDispatch('Aluguel', 'UpdateAluguel', parametros, retornoInsertAluguel);
}

function listaComboSituacao(){
    ExecutaDispatch('Situacao', 'ListarSituacao', undefined, montaComboSituacao);
}

function montaComboSituacao(dados){
    if(dados[0]){
        dados = dados[1];
         combo = '<select id="comboSituacao" class="btn btn-outline-secondary dropdown-toggle" >';
         combo += '<option value="" disabled selected hidden>Selecione uma opção</option>';
        for (i=0;i<dados.length;i++){
            combo += '<option value="'+dados[i].COD_SITUACAO+'">'+dados[i].DSC_SITUACAO+'</option>';
        }
         combo +='</select>';
         $("#divComboSituacao").html(combo);
    }
}

function listarComboCliente(){
    ExecutaDispatch('Cliente', 'ListarClientes', undefined, montaComboCliente);
}

function montaComboCliente(dados){
    if(dados[0]){
        dados = dados[1];
         combo = '<select id="comboCliente" class="btn btn-outline-secondary dropdown-toggle" >';
         combo += '<option value="" disabled selected hidden>Selecione uma opção</option>';
        for (i=0;i<dados.length;i++){
            combo += '<option value="'+dados[i].COD_CLIENTE+'">'+dados[i].NME_CLIENTE+'</option>';
        }
         combo +='</select>';
         $("#divComboCliente").html(combo);
    }
}

$(document).ready(function(){
    listaComboSituacao();
    listarComboCliente();
    $("#dtaAluguel").change(function () {
        if($(this).val() == ''){
            $("#cadProdutoCor").hide();
        }else{
            $("#cadProdutoCor").show();
            listarComboboxProduto($(this).val());
        }
    });
    $("#dtaAluguel").change();
});

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          var index = arr[i].text.toUpperCase().indexOf(val.toUpperCase());
          console.log(index);
          if (index > -1) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = arr[i].text.substr(0,index);
            b.innerHTML += "<strong>" + arr[i].text.substr(index, val.length) + "</strong>";
            b.innerHTML += arr[i].text.substr(index+val.length, arr[i].text.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i].cod + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }