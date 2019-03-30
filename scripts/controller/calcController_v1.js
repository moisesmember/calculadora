class CalcController{
    
    constructor(){
      //this._displayCalc = "0";   display dos números
        this._currentDate;        // data atual

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
        /**
         * Pegue o OBJETO displayCalcEl do HTML e pôe o valor em HTML nele.
         */
       // this._displayCalcEl.innerHTML = "0";        
        this._dateEl.innerHTML = "15/08/1926";
        this._timeEl.innerHTML = "21:09";

        let intervalo = setInterval(function(){
            // fará a verificação da data e hora a cada 1000 milissegundos ou 1 segundo.
            this.setDisplayDate = this.currentDate.toLocaleDateString(this._idioma);
            this.setDisplayTime = this.currentDate.toLocaleTimeString(this._idioma);
        }.bind(this), 1000);

        // encerrará o setInterval quando chegar em 10s
        setTimeout( () => {
            clearInterval(intervalo); // ID do SETINTERVAL
        }, 10000 );

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
        return this._dateEl.innerHTML
    }

    set setDisplayTime(valor){
        this._dateEl.innerHTML = valor;
    }

    get getDisplayDate(){
        return this._timeEl.innerHTML
    }

    set setDisplayDate(valor){
        this._timeEl.innerHTML = valor;
    }

    get currentDate(){
        return new Date();
    }
}