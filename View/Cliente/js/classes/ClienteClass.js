class ClienteClass{
	constructor(registro){
		// console.log('registro>>>>', registro);
        this._codCliente = registro['COD_CLIENTE'];
        this._nmeCliente = registro['NME_CLIENTE'];
        this._nroTelefone = registro['NRO_TELEFONE'];
        this._txtEmail = registro['TXT_EMAIL'];
        this._nroCpf = registro['NRO_CPF'];
        this._dscEndereco = registro['DSC_ENDERECO'];
        this._dtaNascimento = registro['DTA_NASCIMENTO'];
        this._nroCep = registro['NRO_CEP'];
    }

	get codCliente(){
		return this._codCliente;
	}

	set codCliente(val){
		this._codCliente = val;
	}

    get nmeCliente(){
		return this._nmeCliente;
	}

	set nmeCliente(val){
		this._nmeCliente = val;
	}

    get nroTelefone(){
		return this._nroTelefone;
	}

	set nroTelefone(val){
		this._nroTelefone = val;
	}

    get txtEmail(){
		return this._txtEmail;
	}

	set txtEmail(val){
		this._txtEmail = val;
	}

    get nroCpf(){
		return this._nroCpf;
	}

	set nroCpf(val){
		this._nroCpf = val;
	}

    get dscEndereco(){
		return this._dscEndereco;
	}

	set dscEndereco(val){
		this._dscEndereco = val;
	}

    get dtaNascimento(){
		return this._dtaNascimento;
	}

	set dtaNascimento(val){
		this._dtaNascimento = val;
	}

    get nroCep(){
		return this._nroCep;
	}

	set nroCep(val){
		this._nroCep = val;
	}

}