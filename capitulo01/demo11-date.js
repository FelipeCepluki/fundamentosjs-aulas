// meses começam do zero!
const dataAniverserio = new Date(2020, 0, 20)
console.log(dataAniverserio)

const primeiraDataDoJS = new Date(0)
console.log(primeiraDataDoJS) // década do lançamento do Lunix (1970) 
console.log(primeiraDataDoJS.getTime())

const  hoje = new Date()
// .toString() já é uma função que já têm pronta (não é o formato mais recomendado uma vez que trabalhamos com js trabalhamos com uma linguagem univesal, que qualquer desenvolvedor do mundo pode trabalhar e podem conhecer)
console.log(hoje.toString()) 
console.log(hoje.toLocaleString()) // .toLocaleString() pra ver qual é o local da sua máquina configurada

// formato global recomendado ! (toISOString)
console.log(hoje.toISOString())

// pra alterar o dia no JS nós usamos a função setDate, então nós pegamos quantos dias ele já têm, e somamos com a quantidade que queremos
const dia = hoje.getDate()
hoje.setDate(dia + 5)  // +5 dias depois de hoje
hoje.setHours(10, 30, 0) // primeiro parâmetro as horas, o 2 - segundos, 3 - milisegundos

console.log(`
    Dia: ${hoje.getDate()}
    Mes: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()} // existem dois tipos mas é o getFullYear
    Hora: ${hoje.getHours()}
    Minute: ${hoje.getMinutes()}
    Seconds: ${hoje.getSeconds()}
`)

console.log(
    new Date(2020, 1, 20) > new Date(2000, 1, 1) // quando rodamos essa função o JS internamente vai chamar a função valueOff() do tipo Date, e ele vai converter esses valores pro tipo numérico, e aí ele vai comparar qual é o tempo desde 1970 até a data que você definiu, qual é a data maior que a outra pra fazer essa comparação
)

// Muito cuidado na hora de fazer comparações com as datas, geralmente quando trabalhando com JS as pessoas baixam pacotes externos ou bibliotecas pra evitar ficar chamando getDate() ou setDate(), que dá bastante trabalho, mas é importante lembrar como isso funciona e o motivo das coisas funcionarem assim no Javascript

