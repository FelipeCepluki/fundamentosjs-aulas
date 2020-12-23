//  começar pegando dados do nosso terminal, do cliente e tentar converter ele pro formato de promises
const readline = require('readline')
const terminal = readline.createInterface({
    // redirecionar tudo que for entrada pro terminal 
    input: process.stdin, 
    // tudo que for saída também pro terminal
    output: process.stdout 
})

//terminal.question('Qual é o seu nome ?\n', nome => {
    // o callback do question só tem um parêmetro, então se der algum erro ele nem fala nada, provavelmente se der algum erro ele quebra a aplicaçao inteira e você não consegue tratar dessa forma
    //terminal.question('Qual é o seu telefone ?\n', telefone => {
        //console.log(
        //    `
        //    Nome: ${nome},
        //    Telefone: ${telefone}
       //     `
       // )
       // terminal.close()
   // })
//})

//agora nós vamos encapsular a função de questão e já colocar da forma que nós queremos pra trabalhar com promises, pra ficar um pouco mais elegante
function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        // aqui no nosso 2 parêmetro, como ele não têm erro, ele só tem sucesso, nós podemos passar direto o resolve pra dentro dele, então quando ele conseguir resolver, quando ele coseguir o texto via terminal , ele vai chamar a função resolve como callback, e aí fica muito mais bonito
        terminal.question(`${texto}\n`, resolve) 
        
    })
}

// vou guardar aqui em variáveis globais 
let nome = ""
let telefone = ""

// é basicamente só por padrão, só pra ele já começar com .then e .catch, porque provavelmente em algum momento do seu código, você queira comentar uma linha, e você não queira perder a execução do primeiro item, então o Promise.resolve() é só pra você já começar com a cabeça no .then
Promise.resolve()
    // mas o .then do início não vai ter nada, então vou chamar o .then que vai ser uma função vazia, e ele vai chamar a primeira pergunta que é "Qual é o seu nome ?"
    .then(() => questionAsync('Qual é o seu nome ?')) // na primeira vez, o 1 .then vai executar essa função, quando essa função for executada ela vai cair aqui no nosso 2 (logo abaixo) que vai ter a resposta do nome
    .then(respostaNome => {
        if(!respostaNome) throw new Error('campo vazio!') // throw new Error lança uma excessão e ele vai cair no catch, então significa que deu um erro na aplicação que ele vai fazer 
        nome = respostaNome
    })
    // lembra que a gente falou que toda vez que um then for executado ele já resolve com um novo .then porque ele já retorna uma promise por default
    // aqui fazemos basicamente a 2 pergunta
    .then(() => questionAsync('Qual é o seu telefone ?'))
    .then(respostaTelefone => {
        if(!respostaTelefone) throw new Error('campo vazio!')
        telefone = respostaTelefone
    })
    .then(() => {
        console.log(`Nome: ${nome}, Telefone: ${telefone}`)
    })
    // independente de qual .then deu erro vai cair nesse catch e ele já fala qual foi o erro
    .catch(error => {
        console.error('Deu ruim**', error.stack)
    })
    // vou colocar o finally porque mesmo se der erro ou der sucesso ele têm que fechar o terminal
    .finally(() => terminal.close()) // se eu to executando tudo dentro da mesma linha eu não preciso de chaves, então fica tudo na mesma linha

// (node:9708) UnhandledPromiseRejectionWarning: Error: campo vazio!
//at C:\Users\Samsung\Documents\Curso JS\capitulo04\demo02-promises\01.promises.js:41:33
//at processTicksAndRejections (internal/process/task_queues.js:93:5)
//(Use `node --trace-warnings ...` to show where the warning was created)

// toda vez que você ver esse UnhandledPromiseRejection, você sabe que falta pegar o catch do erro, falta manipular o erro, porque aqui o node falou: Olha, deu algum erro de uma promise que foi rejeitada, uma promise que deu erro e eu não sei o que executou 

////////////////////////////////

// Só que você pode ver um problema, ou você pode não ter identificado esse problema ainda: pra cada .then, pra cada resposta que eu tive, nós colocamos esse resultado em uma variável global pra poder executar ela depois. Isso não é uma boa prática no javascript, toda vez que você coloca uma variável fora do contexto que você tá trabalhando, fora da função que você tá trabalhando, nós chamamos isso de syde effect, isso pode acontecer um erro que você quem alterou essa variável ou quem está usando essa variável, então na próxima aula nós vamos ver como resolver esse problema  