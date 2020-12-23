// se a variável pode dirigir for true é rodado o console.log, se for false ele ignora o if e não faz nada
const podeDirigir = true
if(podeDirigir) {
    console.log('Ela pode dirigir')
}

// !variável é sinal de negação na frente a partir do sinal "!" , ou seja, se ele for falso vira true, e se for true vira false
const saldoEmConta = 0
if(!saldoEmConta) {
    console.log('não tem saldo!')
}

const boolComSTring = "ae hackerzão!!"

// operador "!!" , ele pega o valor e transforma ele em true ou false, seguindo a tabela do tipo booleano que está no notion
console.log('boolComSTring',!!boolComSTring)

//negação
console.log('negação', !boolComSTring)

// negação + forçar a bool
console.log(
    'negação + forçar bool',
    !(!!boolComSTring)
)