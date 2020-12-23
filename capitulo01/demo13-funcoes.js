function minhaFuncao1(parametro1) {
    return `aee`
}

// posso criar rambém uma constante assinando para uma variável, dessa forma é chamado de função anônima
const minhaFuncao2 = function(parametro1) {
    return `aee ${parametro1}`
}

// arrow function
// coloco dentro de parentesestodos os parametros que minha de função vai ter e eu coloco o igual ou maior pra falar que ele é uma função, e aí dentro das chaves eu coloco o que seria o corpo dessa função, e aí fica muito mais bonito de declarar
const minhaFuncao3 = (parametro1) => {
    return `aee ${parametro1}`
}

// se você só têm um parâmetro você nem precisa do parênteses, você pode colocar tudo dentro de uma linha, isso vale tanto pros parâmetros, quanto pro código que existe dentro da sua função
const minhaFuncao4 = parametro1 => `aee ${parametro1}`

// posso passar dentro de objetos, posso passar ele como fizemos na arrow function, e chamar ele como : obj1.funcao1
const obj1 = {
    minhaFuncao: parametro1 => `aee ${parametro1}`
}

obj1.minhaFuncao('test')

// todas as funções acima você chama elas da mesma forma: é o nome da função e dentro dela você passa os seus argumentos, os seus parametros

const obj2 = { // dessa forma dentro do objeto, eu vou criar uma função usando ela sem a palavra function, direto com o parametro
    minhaFuncao (parametro1) {
        return `aee ${parametro1}`
    }
} // dessa forma eu passei o parâmetro, usei a função e na hora que eu for chamar eu posso chamar exatamente da forma que eu chamei no outro