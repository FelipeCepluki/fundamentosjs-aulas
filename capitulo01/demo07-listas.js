// 1 forma - colchetes informa que é uma variável com uma lista vazia 
const minhaLista = []

// 2 forma - lista com vários valores
const minhaListaDeTarefas = [
    'mandar email',
    'colocar comida para o dog',
    'limpar o quarto'
]

// pegar o índice 0 dessa lista
console.log(minhaListaDeTarefas[0])

// pegar o índice 1 dessa lista
console.log(minhaListaDeTarefas[1])

// pegar o índice 4 dessa lista
console.log(minhaListaDeTarefas[4])

// quantidade de itens no array -  usa-se o .lenght
console.log(minhaListaDeTarefas.length)

//adicionar item - sintaxe: nome da lista.push('item novo')
// .push sempre adiciona um item no final da sua lista
minhaListaDeTarefas.push('formatar computador')
console.log(minhaListaDeTarefas)

// remover último da lista
// com a função .pop removemos o último item da lista e guardamos ele para tomar alguma decisão
const ultimo = minhaListaDeTarefas.pop()
console.log(ultimo, minhaListaDeTarefas)

// remover o primeiro da lista
//.shift() 
const primeiro = minhaListaDeTarefas.shift()
console.log(primeiro, minhaListaDeTarefas)

// remover um item específico a partir de um índice
console.log(minhaListaDeTarefas[2])
//splice recebe primeiro de onde está o índice (qual item de ínicio), e quantos itens ele precisa remover, como feito a seguir
minhaListaDeTarefas.splice(2, 1)
console.log(minhaListaDeTarefas)

const itens = [
    1, 'computador', 0.22
]

// verificar o tipo do array
// a lista a abaixo apareceu como tipo object
console.log(typeof(itens))

// verificar se é array da forma correta
//Array.isArray() retorna true ou false, pra você tomar a melhor decisão possível
console.log(Array.isArray(itens))

// ordenar
const numeros = [3,2,1,0]
console.log(numeros.sort())

// ordenar utilizando agora texto como exemplo
const numeros = ['c','z','a','d']
console .log(numeros.sort())

// o .sort() também consegue ordenar de acordo com algum parâmetro específico, por exeplo ordenar as pessoas pelo nome ou idade realiza-se isso passando uma função pra dentro do sort

// juntar dois arrays
// utiliza-se .concat pega o item existente e passa o array que você quer e ele vai retornar um único array pra você colocando nessa nova variável
const novo = itens.concat([1,2,3])
console.log(novo)

// juntar arrays em uma string
// o .join ele tira aquele colchete e coloca os itens de acordo com o separador que você colocou: barra, hífen, ponto-e-vírgula, etc
console.log(itens.join(';'))

// verificar índice do item
const index = itens.indexOf('computador')
console.log(index)

// pode fazer melhor, posso ver o item a partir do índice daquele array específico, usando o colchete passando o número da posição, para obter aquele item específico
console.log(itens[index])

// o chaves não estava na nossa lista, então quando ele não encontra ele retorna -1, dai precisa lembrar do que são booleanos, o que é true e o que é false; se converter o -1 pra true ou false vai dar true, então não compare com true ou false que pode dar problema pra você
