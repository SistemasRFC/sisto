class ClienteClass{
	constructor(){
        this._codCliente;
        this._nmeCliente;
        this._nroTelefone;
        this._txtEmail;
        this._nroCpf;
        this._dscEndereco;
        this._dtaNascimento;
        this._nroCep;
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