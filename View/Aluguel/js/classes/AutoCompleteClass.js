class AutoCompleteClass {

    constructor() {
        this._nmeDiv;
        this._nmeInput;
        this._dataField;
        this._camposPesquisa;
        this._displayMember;
        this._valueMember;
        this._callback = undefined;
        this._width = 0;
        this._maxwidth = 1200;
        this._height = 150;
        this._isModal = false;
        this._autoOpen = false;
        this._showCloseButton = false;
        this._animationType = 'fade';
        this._theme = 'darkcyan';
    }
    
    CriarDivAutoComplete() {
        if ($("#divAutoComplete").length) {
            $("#divAutoComplete").jqxWindow("destroy");
        }
        $("#" + this._nmeDiv).html("");
        $("#" + this._nmeDiv).html('<div id="divAutoComplete"><div id="windowHeader" style="display: none;"></div><div style="overflow: hidden;" id="windowContent"><div id="listaPesquisa"></div></div> ');
        var largura = $("#" + this._nmeInput).width();
        if (this._width != 0) {
            largura = this._width;
        }
        
        $("#divAutoComplete").jqxWindow({
            height: this._height,
            width: largura,
            showCloseButton: this._showCloseButton,
            maxWidth: this._maxwidth,
            position: {x: $("#" + this._nmeInput).offset().left, y: $("#" + this._nmeInput).offset().top + 35},
            animationType: this._animationType,
            showAnimationDuration: 500,
            closeAnimationDuration: 500,
            theme: this._theme,
            isModal: this._isModal,
            autoOpen: this._autoOpen
        });
        $("#divAutoComplete").jqxWindow("open");

        var dados = this._dataField.split('|');
        var lista = new Array();
        for (i = 0; i < dados.length; i++) {
            var data = new Object();
            var campos = dados[i].split(';');
            data.name = campos[1];
            lista.push(data);
        }
        var parametros = this._camposPesquisa.split('|');
        for (i = 0; i < parametros.length; i++) {
            var campos = parametros[i].split(';');
            data[campos[0]]=campos[1];
        }
//        console.log(lista);
        var source =
                {
                    datatype: "json",
                    dataFields: lista,
                    type: "POST",
                    id: this._valueMember,
                    url: '../../Dispatch.php',
                    data: data

                };
        var dataAdapter = new $.jqx.dataAdapter(source);
        // Create a jqxListBox
        $("#listaPesquisa").jqxListBox({
            source: dataAdapter,
            displayMember: this._displayMember,
            valueMember: this._valueMember,
            width: largura - 5,
            height: this._height - 10
        });
        var that = this;
        $("#listaPesquisa").on('keyup', function (event) {
            if (event.keyCode == 13) {
                that.SelecionaItem($("#listaPesquisa").jqxListBox('getSelectedItem'), dataAdapter, that._dataField);
            }
        });
        $("#listaPesquisa").on('select', function (event) {
            if (event.args.type == 'mouse') {
                that.SelecionaItem(event.args.item, dataAdapter, that._dataField);
            }
        });
    }

    SelecionaItem(item, dataAdapter, dataField) {
        if (item) {
            var x = []
            $.each(dataAdapter.records, function (i, n) {
                x.push(n);
            });
            for (j = 0; j < x.length; j++) {
                var dados = dataField.split('|');
                for (i = 0; i < dados.length; i++) {
                    if (item.originalItem.COD == x[j]['COD']) {
                        var campos = dados[i].split(';');
                        if (campos[0] != '') {
                            $("#" + campos[0]).val(x[j][campos[1]]);
                            if ($("#divAutoComplete").length) {
                                $("#divAutoComplete").jqxWindow("destroy");
                            }
                        }
                    }
                }
            }
            if (this._callback != undefined) {
                eval(this._callback);
            }
        }
    }
}