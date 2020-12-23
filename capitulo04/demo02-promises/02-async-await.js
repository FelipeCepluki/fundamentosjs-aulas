// Então, não tão recentemente, a galera do C#, a galera da Microsoft fez um pedido pra o time do javascript, em adicionar uma palavra-chave pra poder manipular cada função como se fosse síncrona, pra que você consiga olhar o seu código e você consiguir ver a fila de execução ou a ordem de execução, sem precisar de .then, sem precisar de callback, então fica muito mais elegante, e todo esse código que nós tínhamos de 100, 150 linhas, vai ficar somente umas 10 linhas no máximo

//A premissa é: têm que ser Promise, têm que retornar um objeto Promise, esse objeto Promise têm que ter o resolve e o reject dele pra que você consiga usar       

// Primeira coisa que eu vou fazer: nós vimos que tinha código replicado pra tratamento de erro, então nós vamos já manipular por aqui, se tiver um texto vazio nós já vamos rejeitar e falar: Olha, não era pra ter um código vazio, não é pra passar

const readline = require('readline')
const terminal = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
})


function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, msg => {
            // vou pegar msg, e falar: Olha, a msg têm valor ? Ele é true, então eu vou chamar um resolve com ela, se não eu vou chamar um reject
            !!msg ? resolve(msg) : reject(new Error('O campo não pode ser vazio'))
            // na aula passada usamos a palavra-chave throw, que era uma palavra-chave do javascript que também quebrava o seu código e parava a execução. Quando está trabalhando com Promises, e você usa o reject, você só passa o erro dentro dele pra poder manipular, você não precisa passar o throw new error nesse caso
        }) 
    })
}

// Primeira premissa é que você têm que estar trabalhando com Promises, o objeto Promise têm que existir, e pra você usar a palavra-chave async await você tem que informar o compilador do javascript que você vai trabalhar com uma Promise. Então a primeira coisa é que na assinatura você precisa colocar o async e você têm que chamar essa função depois
async function main() {
    // agora temos o try catch, o try catch do js que vai funcionar de uma forma muito mais bonita do que o .then e o .catch
    try {
        const nome = await questionAsync('Qual é o seu nome ?') // não preciso mais do \n porque a question já ta pegando ele 
        const telefone = await questionAsync('Qual é seu telefone ?')
        console.log(`Nome: ${nome}, Telefone: ${telefone}`)
    } catch (error) {
        console.log('Deu ruim***', error.stack)
    }
    finally {
        // passou no try ou passou no catch eu vou chamar o finally
        terminal.close()
    }
}
main()

// tem algumas ressalvas sobre async await, mas se você estiver na dúvida entre usar callbacks e trabalhar com async await, opte sempre por trabalhar com async await, se você viu um código que está usando callback, converte essa abordagem de callback para promises e usa o async await, é a forma mais fácil de você entender olhando o seu código e com tudo isso funciona 

