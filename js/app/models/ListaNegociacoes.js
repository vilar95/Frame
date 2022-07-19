class ListaNegociacoes{
    constructor() {
        this._negocicacoes = [];
    }

    adiciona(negociacao) {
        this._negocicacoes.push(negociacao);
    }

    get negociacoes() {
        
        return [].concat(this._negocicacoes);
    }
    esvazia() {
        this.negociacoes = [];
    }
 }
