class CalcController_v2{
    
    constructor(){
        this._idioma = 'pt-BR';
        /*
         * Vinculação dos Elementos HTML com as variáveis do JavaScript
        */
         this._displayCalcEl = document.querySelector("#display");  // Pega através do ID EL(elemento HTML) referente ao nº display
         this._dateEl        = document.querySelector("#data");
         this._timeEl        = document.querySelector("#hora");

        this.initialize();    // chama o métoda de INICIALIZAÇÃO
    }

    /**
     * Método que inicializa tudo que for necessário
     * primeiro.
     */
    initialize(){        
        this.exibirDataHora();
        /**
         * O método setInterval () chama uma função ou avalia 
         * uma expressão em intervalos especificados (em milissegundos) 
         */
        setInterval(() => {
            // fará a verificação da data e hora a cada 1000 milissegundos ou 1 segundo.
            this.exibirDataHora();
        }, 1000);

        
    }

    exibirDataHora(){
        this.setDisplayDate = this.currentDate.toLocaleDateString(this._idioma);
        this.setDisplayTime = this.currentDate.toLocaleTimeString(this._idioma);
    }

    /**
     * MÉTODO DE ATRIBUIÇÃO E RETORNO DO VALOR DO DISPLAY DA CALCULADORA.
     */
    get getDisplayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set setDisplayCalc(valor){
        this._displayCalcEl.innerHTML = valor;
    }
 
    /**
     * MÉTODO DE ATRIBUIÇÃO E RETORNO DA DATA E HORA.
     */
    get getDisplayTime(){
        return this._timeEl.innerHTML;
    }

    set setDisplayTime(valor){
        this._timeEl.innerHTML = valor;
    }

    get getDisplayDate(){
        return this._dateEl .innerHTML;
    }

    set setDisplayDate(valor){
        this._dateEl.innerHTML = valor;
    }

    // método que carrega a data e hora atual.
    get currentDate(){
        return new Date();
    }
}