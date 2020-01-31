class ProdutosAluguelClass{
	constructor(produtos){
        this._listaProdutos = produtos;
        // this._produtos = [produtos];
        console.log('produtos>>>>', produtos);
        this._codVendaProduto = produtos['COD_VENDA_PRODUTO'];
        // this._codVenda = produtos['DTA_ALUGUEL'];
        this._codProdutoCor = produtos['COD_PRODUTO_COR'];
        this._dscProdutoCor = produtos['DSC_PRODUTO_COR'];
        this._qtdVenda = produtos['QTD_VENDA'];
        this._vlrVenda = produtos['VLR_VENDA'];
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

    get listaProdutos() {
		return this._listaProdutos;
    }

	set listaProdutos(val){
		this._listaProdutos= val;
    }
}