// importar o Matematica usando o require; nas outras aulas nós usamos bastante o require pra poder pegar os módulos internos do node e poder trabalhar com arquivos ou poder trabalhar com linha de comando; então pra pegar esses módulos, nós usamos sem ponto(.), somente o nome; mas pra pegar de arquivo nós usamos o ./nomedoarquivo

const Matematica = require('./matematica')
//console.log(Matematica.somar(1, 4))

// agora vamos pegar algumas perguntas do cliente e qual o tipo da operação que ele quer trabalhar só pra poder mostrar
const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout // entrada e saída vai sair no meu terminal 
})
// em seguida vou colocar as perguntas
// porque  estamos fazendo dentro do arquivo, ou uma função dentro da outra ? Porque, primeiro precisamos pegar primeiro o valor do cliente , depois que ele colocou o primeiro valor, aí sim você pode colocar o 2 valor
terminal.question('Insira o primeiro valor\n', valor1 => {
    terminal.question('Insira o segundo valor\n', valor2 => {
        terminal.question('Insira a operacao\n', tipoOperacao => {
            // agora vamos pegar esse texto direto do terminal, e nós vamos chamar essa função sob demanda, de acordo com  operação que o cliente escolher nós vamos chamar uma função de dentro da matemática, e aí fica muito mais sênior
            // dentro dos [] nós obtemos essa função e com os () nós invocamos esse valor
            const resultado = Matematica[tipoOperacao](
                // como as duas recebem dois valores, nós vamos passar já convertido o numero1 e o numero2
                Number(valor1), Number(valor2)
            )
            console.log(
                `A operação ${tipoOperacao} de ${valor1} e ${valor2} é ${resultado}`) 
            terminal.close() // pra liberar o terminal depois da execução
        })
    })
    
})



// a classe no fim de tudo é convertida pra um objeto, então chamamos isso de sintax sugar, é algo que ele é criado, ele facilita a vida do desenvolvedor, mas no final ele gera o que a linguagem quiser; então nesse caso a classe é convertida pra um objeto no final dos casos, e aí você lembra das outras aulas, pra acessar um objeto você pode usar a notação . , ou você pode acessar a notação colchetes []
//console.log(
//  Matematica[ 'somar'],
//Matematica[ 'multiplicar']
//)

//dentro do último terminal.question