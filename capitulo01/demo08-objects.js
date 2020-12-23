// tudo herda de objects, no fim tudo é objeto

const heroi = {
    nome: 'Flash',
    idade: 100,
    sexo: 'Masculino'
}

console.log('nome', heroi.nome)
console.log('idade', heroi['idade'])
console.log('sexo', heroi.sexo)
console.log('naoExiste', heroi.naoExiste)

//id é a chave e o valor é 1, quando seta valores fora da criação do objeto utiliza-se o igual, já na criação utiliza-se os dois pontos
heroi.id = 0001
console.log(heroi)

// porque podemos fazer isso 
// porque não estamos reassinando um valor pra heroi, estamos passando ou alterando a instância do heroi com novas chaves

// saber chaves
console.log(Object.keys(heroi))

// saber valores
console.log(Object.values(heroi))

// juntar dois objetos
const pessoa = {
    tamanho: '10 metros'
} 
// vai agrupar os dois objetos, somar e gerar um novo objeto pra você, para que possa tomar uma decisao com o novo objeto
const novoObj = Object.assign(heroi, pessoa)
//remover uma chave de um objeto javascript
delete novoObj.nome
console.log(novoObj)

// Por padrão no JS, ou por convenção, tentamos evitar alterar o valor de um objeto já criado, sempre tentando criar um novo objeto, Object.assign ou outras formas que veremos até o fim do curso para melhorar ainda mais a sua produtividade 
