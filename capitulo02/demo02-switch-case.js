const readLine = require('readline') // vamos usar o require pra pegar uma classe que já existe no node js, que é pra capturar os eventos ou pra capturar o que o seu cliente tá digitando
const terminal = readLine.createInterface ({
    // definir o modo de entrada via terminal
    input: process.stdin, 
    // todo texto que for saída no terminal 
    output: process.stdout
})

// texto do menu
const textoMenu = `
Olá, seja bem vindo ao sistema de midia
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de Herois
Digite 3 para acessar o menu de Guerreiras
Digite 0 para sair
`
/**control c para a execução enquanto ele não sabe quando parar
console.log('textoMenu', textoMenu)
// no switch case nós definimos o case e qual é o valor que eu espero
const opcao = 2
switch(opcao) {
    case 1:
        console.log('pressionou 1')
        break;
    case 2:
        console.log('pressionou 2')
        break;
    default: // pra caso ele aperte qualquer outro botão que eu não conheço
        console.log('opção inválida')
        break
}


// quando o usuário escrever o nome e apertar enter vai pro console.log dentro da função
terminal.question('Qual é seu nome ?', (msg) => {
    console.log('você escreveu', msg)
    terminal.close() // pra fechar o terminal e ele não perguntar mais nada
})
*/

// agora vamos criar de forma mais inteligente usando objetos
const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial, // vai executar essa função quando alguém responder esse objeto
    },
    opcao1: {
        texto: 'submenu! Pressione enter para selecionar mais opcoes...',
        fn: opcao1
    }
}
function opcao1(msg) {
    console.log('Não há mais opcoes!')
    terminal.close()
}
function menuInicial(msg) {
    const opcao = Number(msg)  // porque opção tem que ser númerica
    if(isNaN(opcao)) {
        throw new Error('Não é um número', msg) // throw new Error o programa vai quebrar, então é outra forma pra mostrar pro seu cliente que ele digitou coisa errada
    }
    switch(opcao) {
        case 0:
            console.log('Saindo...')
            terminal.close()
            break;
        case 1:
            console.log('menu iniciar')
            terminal.question(
                questoes.opcao1.texto,
                questoes.opcao1.fn
            )
            break;
        default: // default é se não for nenhum dos dois
            console.log('opção inválida!')
            terminal.close()
            break;
    }
}

terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)

// agora você consegue fazer várias perguntas, de acordo com as opções você tem uma sintaxe, uma forma de código mais limpa pra poder verificar qual é a melhor opção de acordo com o cliente. Se o cliente mandou qualquer valor que você não queria, você pode mandar ele pro defaul e ele vai tratar aquela sessão ali 

// É importante lembrar que um não substitui o outro, você pode usar o switch case, ou o else,if ou outras abordagens que veremos até o final do curso, mas fica por sua conta decidir o que é melhor pra você de acordo com o seu programa 