// enquanto não mudar, não para !
let termoDeParada = true
let contador = 0
// vou falar que vai ficar rodando enquanto enquanto esse termo de parada for true, então se alguma coisa mudasse, se alguma coisa não executar da forma que eu queria, ele vai mudar pra false e aí vai parar a execução
while (termoDeParada) {
    // vou falar que o termoDeParada ele vai ser igual ao contador menor que 10, ou seja quando o contador chegar a 10, o termoDeParada vai ficar false, e ele vai sair desse loop, não vai executar mais
    termoDeParada = contador < 10
    // se o contador mode 2 é igual a 0, significa que ele é número par
    if(contador % 2 === 0) {
        console.log('Numero par', contador)
    }
    // contador = contador + 1, ou seja, o contador recebe ele + 1, pode fazer isso com -, /, *, e a maioria dos operadores
    contador += 1
}

// a grande diferença entre um e outro, é que o do ele executa primeiro e ele verifica depois, então ali na linha 5, ele já verificou: o termoDeParada ele tá como true, então eu vou executar o loop e ele vai se virar pra trazer o resultado; o do ele fala assim: eu nem sei qual que é o valor, eu vou rodar primeiro, rodei a primeira vez, na segunda eu vejo se é a condição mesmo de parada ou não

// roda a primeira vez e testa a variável depois !
do {
    console.log('Só uma vez! pois termoDeParada é', termoDeParada) 
} while(termoDeParada)
// nesse momento o termoDeParada é false, pois porque lá no primeiro while ele fez a contagem, ele adicionou o valor pro contador, e chegou aqui ele tá false, então ele vai executar só uma vez porque o termoDeParada é esse valor aí

// o que acontece com o while ? pra mostrar que realmente não vai rodar
while(termoDeParada) {
    // não vai executar
    console.log('Nem vai executar!')
}
// se você não tiver um termoDeParada, se você não falar pro seu while quando ele têm que parar, ele vai executar infinitamente, então fica lá rodando até você esolher quando têm que parar

// são muito usados pra trabalhar com operações que você precisa fazer contagens, ou pra fazer verificações, e só sair de uma verificação quando chegar na resposta que você quer, então isso é muito usado pra jogo de baralho, jogo de snake ou jogos em geral, "a gente custuma brincar que todo motor de um jogo começa com while true, porque ele têm que verificar várias ações do seu cliente e ele só vai sair quando o cliente apertar um botão específico"