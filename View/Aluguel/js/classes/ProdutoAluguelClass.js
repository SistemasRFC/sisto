class ProdutosAluguelClass{
	constructor(){
        this._codVendaProduto;
        this._codProdutoCor;
        this._dscProdutoCor;
        this._qtdVenda;
        this._vlrVenda;
	}

	get codVendaProduto(){
		return this._codVendaProduto;
	}

	set codVendaProduto(val){
		this._codVendaProduto = val;
	}

	get codProdutoCor(){
		return this._codProdutoCor;
	}

	set codProdutoCor(val){
		this._codProdutoCor = val;
	}

	get dscProdutoCor(){
		return this._dscProdutoCor;
	}

	set dscProdutoCor(val){
		this._dscProdutoCor = val;
	}

	get qtdVenda(){
		return this._qtdVenda;
	}

	set qtdVenda(val){
		this._qtdVenda= val;
	}

	get vlrVenda(){
		return this._vlrVenda;
	}

	set vlrVenda(val){
		this._vlrVenda= val;
    }
}