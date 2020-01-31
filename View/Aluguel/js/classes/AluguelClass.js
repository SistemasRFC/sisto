class AluguelClass{
	constructor(){
        this._codVenda;
        this._dtaVenda;
        this._codUsuario;
        this._nmeUsuario;
        this._codCliente;
        this._nmeCliente;
        this._codSituacao;
        this._codTipoPagamento;
        this._dscEnderecoEntrega;
        this._dscPontoReferencia;
        this._nroCepEntrega;
        this._dtaRecibo;
        this._dtaBuscaProduto;
        this._vlrTotal;
        this._produtosAluguel = [];
	}
  
	get codVenda(){
		return this._codVenda;
	}

	set codVenda(val){
		this._codVenda = val;
	}

	get dtaVenda(){
		return this._dtaVenda;
	}

	set dtaVenda(val){
		this._dtaVenda = val;
	}

	get codUsuario(){
		return this._codUsuario;
	}

	set codUsuario(val){
		this._codUsuario = val;
	}

	get nmeUsuario(){
		return this._nmeUsuario;
	}

	set nmeUsuario(val){
		this._nmeUsuario = val;
	}

	get codCliente(){
		return this._codCliente;
	}

	set codCliente(val){
		this._codCliente= val;
	}

	get nmeCliente(){
		return this._nmeCliente;
	}

	set nmeCliente(val){
		this._nmeCliente= val;
	}

	get codSituacao(){
		return this._codSituacao;
	}

	set codSituacao(val){
		this._codSituacao= val;
	}

	get codTipoPagamento(){
		return this._codTipoPagamento;
	}

	set codTipoPagamento(val){
		this._codTipoPagamento= val;
	}

	get dscEnderecoEntrega(){
		return this._dscEnderecoEntrega;
	}

	set dscEnderecoEntrega(val){
		this._dscEnderecoEntrega= val;
	}

	get dscPontoReferencia(){
		return this._dscPontoReferencia;
	}

	set dscPontoReferencia(val){
		this._dscPontoReferencia= val;
	}

	get nroCepEntrega(){
		return this._nroCepEntrega;
	}

	set nroCepEntrega(val){
		this._nroCepEntrega= val;
    }

	get dtaRecibo(){
		return this._dtaRecibo;
	}

	set dtaRecibo(val){
		this._dtaRecibo= val;
    }

	get dtaBuscaProduto(){
		return this._dtaBuscaProduto;
	}

	set dtaBuscaProduto(val){
		this._dtaBuscaProduto= val;
    }

	get vlrTotal(){
		return this._vlrTotal;
	}

	set vlrTotal(val){
		this._vlrTotal= val;
	}

	get produtosAluguel(){
		return this._produtosAluguel;
	}

	set produtosAluguel(produtos){
		for(var i=0;i<produtos.length;i++){
			this._produtosAluguel[i] = new ProdutosAluguelClass();
			this._produtosAluguel[i].codVendaProduto = produtos[i].COD_VENDA_PRODUTO;
			this._produtosAluguel[i].codProdutoCor = produtos[i].COD_PRODUTO_COR;
			this._produtosAluguel[i].dscProdutoCor = produtos[i].DSC_PRODUTO_COR;
			this._produtosAluguel[i].qtdVenda = produtos[i].QTD_VENDA;
			this._produtosAluguel[i].vlrVenda = produtos[i].VLR_VENDA;
		}
	}

}