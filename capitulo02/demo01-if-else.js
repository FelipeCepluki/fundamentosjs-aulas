let frutaExistenteNoMercado = false
let temCPUSuficente = true

// pra trabalhar com if else nós vamos trabalhar com tipos booleanos (true or false)
// Se você tiver que converter tem que lembrar da aula de booleans pra poder converter valor pra tipo booleano

// obter valores do terminal (de acordo com o que o usuário digitar)
const args = process.argv
// vou pegar oúltimo item da lista  pra ser o saldo, length vai trazer a quantidade de itens, mas o índice sempre começa do zero, então a quantidade é de zero a dez, mas o índice é de um a nove, então por isso passa menos um pra pegar o último item dessa lista
const saldo = args[args.length - 1] 
// verificar se ele é um NaN, se ele for NaN, significa que ele não é uma string, não é um número válido dentro de uma string, então pode ter passado 'abc', '123abc', etc, e vai entra nesse if
if(isNaN(saldo)) {
    console.log('valor inválido!!')
    return;
}

let tipoCliente = "premium" // let porque pode ser reassinada depois
if (saldo < 9) {
    tipoCliente = "basic"
}
// uso else if pra falar, olha, se ele não passou no primeiro caso, você vai tentar esse novo caso
else if (saldo >=10 && saldo < 20) {
    tipoCliente = "gold"
}
// se ele não entrou em nenhum desses casos aí ele vai entrar no else, 
else {
    tipoCliente = null // tipo null porque quero que nesse caso o tipo dele seja vazio, não tenha nada pra poder trabalhar, então é false
}
// null, undefined, vazio, 0 === false

//se o tipo do cliente não for false, vou colocar o tipoCliente como indefinido
if (!tipoCliente) {
    tipoCliente = "indefinido"
}
console.log('tipoCliente', tipoCliente)

const operadorOu = 1 > 2 || 2 > 1
const operadorE = 1 === 1 && 2 !== 2
const operadorNot = !(1==1) // se a operação der true vira false e vice versa

// forma de usar if else no js usando ternário
const idade = 20    
const resultado = idade >= 18 ? // idade é maior ou igual a 18, se for ele pode dirigir, se não for ele coloca o else (não têm else if)
                            'pode dirigir !!' :
                            'não pode dirigir !!'
console.log('resultado', resultado)

// então o ternário é uma opção bem bacana pra você trabalhar com o if else de uma forma bem mais interativa e evitar vários e vários comandos pra fazer o seu código


