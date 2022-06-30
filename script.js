const visor = document.querySelector('input')

let valor1 = 0
let valor2 = 0
let op = 0
let limpaVisor = false

document.addEventListener('click', e => {

    let alvo = e.target

    if(alvo.nodeName == 'BUTTON'){

        if(alvo.classList.contains('operacao')){

            valor1 = Number(visor.value)

            limpaVisor = true

            if(alvo.textContent == '+'){
                op =1
            }
            if(alvo.textContent == '-'){
                op =2
            }
            if(alvo.textContent == 'x'){
                op =3
            }
            if(alvo.textContent == '/'){
                op =4
            }

            }else if(alvo.classList.contains('igual')){
                valor2 = number(visor.value)
                igual()
            }else if(alvo.classList.contains('limpar')){
                limparVisor()
            }else{
                adicionarVisor(alvo.textContent)
            } 
          
  
    }

})

let adicionarVisor = numero => {

    if(limpaVisor){
        visor.value = ''
        limpaVisor = false
    }

    if(numero == '0' && visor.value == '0'){
        visor.value != 0
    }else if(visor.value == '0'){
    visor.value = numero
    }else 
       visor.value += numero
    }


let limparVisor = ()  => {

    valor1 = 0
    valor2 = 0
    op = 0
    visor.value = ''
}

let igual = () => {

    let resutado = 0

    valor2 = Number(visor.value)

    switch (op) {
        case 1: // soma
            resutado = valor1 + valor2
            break;
        case 2: // subitracão
            resutado = valor1 - valor2
            break;
        case 3: // mutiplicacão
            resutado = valor1 * valor2
            break;
        case 4: // divisão
            resutado = valor1 / valor2
            break;
    }

    visor.value = resutado

}  