class AluguelClass{
	constructor(registro){
		// console.log('registro>>>>', registro);
        this._codVenda = registro['COD_ALUGUEL'];
        this._dtaVenda = registro['DTA_ALUGUEL'];
        this._codUsuario = registro['COD_USUARIO'];
        this._nmeUsuario = registro['NME_USUARIO'];
        this._codCliente = registro['COD_CLIENTE'];
        this._nmeCliente = registro['NME_CLIENTE'];
        this._codSituacao = registro['COD_SITUACAO'];
        this._codTipoPagamento = registro['COD_TIPO_PAGAMENTO'];
        this._dscEnderecoEntrega = registro['DSC_ENDERECO_ENTREGA'];
        this._dscPontoReferencia = registro['DSC_PONTO_REFERENCIA'];
        this._nroCepEntrega = registro['NRO_CEP_ENTREGA'];
        this._vlrTotal = registro['VLR_TOTAL'];
        this._produtosAluguel = new ProdutosAluguelClass(registro['PRODUTOS']).listaProdutos;
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

	get vlrTotal(){
		return this._vlrTotal;
	}

	set vlrTotal(val){
		this._vlrTotal= val;
	}

	get produtosAluguel(){
		return this._produtosAluguel;
	}

	set produtosAluguel(val){
		this._produtosAluguel= val;
	}

}