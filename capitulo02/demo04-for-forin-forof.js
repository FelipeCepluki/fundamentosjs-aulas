// no for eu criei um índice que começa do 0, e eu vou falar que vou rodar essa estrutura até o índice for menor que 10,e ele aumentou o índice ++(significa que o índice recebe o índice + 1)
// nesse momento o meu o índice é o meu termo de parada, nesse momento ele vai executar somente até o índice for menor ou igual a 10
/*const textoPar = "par"
const textoImpar = "impar"
for(let index = 0; index <= 10; index++) {
    const decisao = index % 2 === 0 ? textoPar : textoImpar // se passar na primeira condição vai ser par, se não vai ser ímpar
    console.log(`O número ${index} é ${decisao}`)
}*/

// Math.random() vai criar pra mim um número randomico no JS, que é o número correspondente de 0 a 1
// parseInt() traz pra mim somente a primeira casa decimal, vai ignorar as outras casas decimais
const minhaListaDeTarefas = [
    {
        id: parseInt(Math.random() * 10),
        nome: 'Zezinho',
        superPoder: 'Veloz'
    },
    {
        id: Math.random(),
        nome: 'Mariazinha',
        superPoder: 'Super Força'
    }
]
// for é muito usado para manipular listas / lenght traz a quantidade de itens da minha lista
// index ++, vai ter cada item da minha lista a partir do índice 
for(let index = 0; index < minhaListaDeTarefas.length; index++) {
    const item = minhaListaDeTarefas[index] // pra acessar um índice específico : lista[índice]
    console.log(`
    id: ${item.id}
    nome: ${item.nome}`)
}
// random não é confiável, não é confiável que vários dos seus itens vão ter o id diferente, então não use ele pra criar ids, aqui é só pra exemplificar

//////// outra forma de imprimir 
// não precisa do contador
// aqui estou usando for in, dessa forma o index conseguimos pegar da mesma forma
for(const index in minhaListaDeTarefas) {
    const item = minhaListaDeTarefas[index]
    console.log('Nome', item.nome)
}

//imagina que estamos fazendo tudo isso pra pegar um item em específico, é muito mais inteligente pegar o item direto, ignorar o índice porque não preciso do índice
// não precisa usar index
// agora eu vou criar o item como uma constante, porque ele não é mais um iterador, a cada posição ele vai ter o item corrente
// agora eu vou usar o of, com o of ele vai pegar o item específico e fica muito mais bonito
for(const item of minhaListaDeTarefas) {
    console.log('Nome**',item.nome)
}

// qualquer uma das opções : for, for in, for of, vai funcionar no seu programa, mas nesse caso específico é melhor você entender o que você precisa, você realmente precisa do índice, se você não precisa do índice você pode olhar pro item específico, usando of; se você precisa do índice e se você precisa do contador específico pra poder fazer algum cálculo específico, aí você pode usar a primeira forma que é só o for