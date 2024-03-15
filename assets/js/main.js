function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliclesButtons();
        this.pressionaEnter();
    };

    this.clearDisplay = () => this.display.value = '';

    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);

    this.pressionaEnter = () =>{
        this.display.addEventListener('keyup',(e) => {
            if(e.keyCode === 13) this.realizarCalculo();
        });
    }

    this.cliclesButtons = () => {
        window.addEventListener('click',(e) => {
            const el = e.target;

            if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
            if(el.classList.contains('btn-clear')) this.clearDisplay();
            if(el.classList.contains('btn-del')) this.apagaUm();
            if(el.classList.contains('btn-eq')) this.realizarCalculo();
        });
    };

    this.realizarCalculo = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta){
                alert('Conta Inválida');
                return;
            }

            this.display.value = String(conta);

        } catch(err) {
            alert('Conta Inválida');
            return;
        }
    }

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
        this.display.focus();
    }
}

const calculadora = new Calculadora();
calculadora.inicia();