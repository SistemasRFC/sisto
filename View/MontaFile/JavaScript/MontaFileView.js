function GeraFile(dscTabela,nmeFile){    
    parametros = "dscTabela;"+dscTabela+"|nmeFile;"+nmeFile;
    ExecutaDispatch('MontaFile', 'GeraFile', parametros, undefined);    
}

function ListarTabelas(){
    ExecutaDispatch('MontaFile', 'ListarTabelas', undefined, MontarListaTabelas);    
}

function MontarListaTabelas(dados){
    if (dados[0]){
        dados = dados[1];
        var tabela = '<table class="table table-striped">';
        tabela += '<thead>';
        tabela += '<tr>';
        tabela += '<th>Tabela</th>';
        tabela += '</tr>';
        tabela += '</thead>';
        tabela += '<tbody>';
        for (i=0;i<dados.length;i++){

            tabela += '<tr>';
            tabela += '<td>'+dados[i].NME_TABELA+'</td>';
            tabela += "<td><a href=\"javascript:AbreTelaNomeArquivo('"+dados[i].NME_TABELA+"');\">Editar</a></td>";
            tabela += '</tr>';

        }
        tabela += '</tbody>';         
        tabela += '</tbody>';
        tabela += '</table>';
        $("#listaTabelas").html(tabela);
        swal.close();
    }    
}

function AbreTelaNomeArquivo(nmeTabela){
    var nmeFile = prompt("Informe o nome do arquivo:");
    if(nmeFile){
        GeraFile(nmeTabela,nmeFile);
    }else{
        alert("Nome do arquivo não informando favor tente novamente");            
    }    
}

$(document).ready(function () { 
    ListarTabelas();
});