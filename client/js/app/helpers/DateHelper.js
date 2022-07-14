class DateHelper{

    constructor () {
        throw new Error('Classe não  poder ser instanciada.');
    }

    static dataParaTexto(texto) {
        return `${data.getDate()}/${negociacao.data.getMonth() +1}/${negociacao.data.getFullYear()}`;
    }

    static textoParaData(texto) {
        
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');
        
        return new Date(...this._inputData.value.split('-').map( (item, indice) => item - indice % 2)
        );
    }
}
