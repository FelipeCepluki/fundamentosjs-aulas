function nomedaFuncao(parametro1) { 
    // bloco de código
}

function queDiaEhoje() {
    const data = new Date()
    console.log(`Hoje é dia: ${data.getDate()}`) // getDate() já é uma função pronta e é só chamá-lo
}

queDiaEhoje()

function soma(valor1, valor2) {
    console.log(`A sma de ${valor1} + ${valor2} é`, valor1 + valor2)
}

soma(10, 20)
soma(3, 4)

// - Funções podem retornar valores
function soma(valor1, valor2) {
    return valor1 + valor2 // ele não vai te mostrar o valor enquanto você não transmitir ele na tela
}
// passar valores com variáveis, não é uma boa prática passar dentro da função
const idade = 20
const tamanho = 10
const resultado = soma(idade, tamanho)
console.log('resultado', resultado)

function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2
    return resultado // agora é outra variável chamada também de resultado
}

console.log(`O resultado da multiplicação é:`, multiplicar(10, 30))


// no entanto as variáveis só podem ser criadas uma única vez, aí que entra nosso contexto de escopo
// ela foi criada na linha 30 só que ela tem o contexto dela dentro dessas chaves, então tudo que for criado dentro dessas chaves, nascem e morrem dentro dessa função, e o que tá fora, não vai afetar o que tá dentro

////////////////////////////////

const funcionario1 = {
    nome: 'Zezinho',
    desconto: 0.2,
    salarioBruto: 2000,
    salarioLiquido: 0
}

const funcionario2 = {
    nome: 'Mariazinha',
    desconto: 0.1,
    salarioBruto: 2000,
    salarioLiquido: 0
}
/** 
const descontofuncionario1 = 
    funcionario1.salarioBruto - ( funcionario1.desconto * funcionario1.salarioBruto)

*const descontofuncionario2 = 
    funcionario2.salarioBruto - ( funcionario2.desconto * funcionario2.salarioBruto)

console.log(
    `Funcionario1: ${descontoFuncionario1}
    Funcionario2: ${descontoFuncionario2}`
) //
*/

function calcularDesconto(salarioBruto, desconto) {
    return salarioBruto - (salarioBruto * desconto)
}

funcionario1.salarioLiquido = calcularDesconto(
    funcionario1.salarioBruto,
    funcionario1.desconto // é importante sempre manter a ordem nesse caso
)

funcionario2.salarioLiquido = calcularDesconto(
    funcionario2.salarioBruto,
    funcionario2.desconto // é importante sempre manter a ordem nesse caso
)

console.log(
    `
    Salario ${funcionario1.nome}: ${funcionario1.salarioLiquido}
    Salario ${funcionario2.nome}: ${funcionario2.salarioLiquido}`
)

// se por algum motivo mudou a regra interna alterou ou por algum motivo eu tenho que alterar a regra interna, eu só mexo no cálculo de desconto, e eu não preciso mexer mais na implementação do funcionário específico e eu ganho muito mais tempo e organização no meu código



 


