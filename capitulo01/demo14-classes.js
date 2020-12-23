class Heroi {
    atacar() {
        console.log(`atacou!!`)
    }
    defender() {
        console.log(`defendeu`)
    }
}

const heroi = new Heroi()
heroi.atacar()
heroi.defender()

// usando construtor!
// dentro desse construtor ele vai ser uma função que vai ser invocada quando você chamar a palavra-chave new
// this - contesto do escopo da classe
class Heroi2 {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    atacar() {
        console.log(
            `O ${this.nome} atacou`
        )
    }
}
// na hora de instanciar eu vou falar qual é o nome desse herói
const heroi2 = new Heroi2(
    `Flash`, 80
) 
heroi2.atacar()
// então você pode antes de tudo declarar todos os valores da sua entidade e depois só chamar as funções da sua classe, daí fica muito mais fácil de trabalhar e evita código replicado

// podemos usar a função na classe sem a palavra function, que ela vai olhar sempre pro this, se você quer usar o this você precisa ter ela lá, só que se você não precisar usar a palavra-chave this, você pode usar o static, então não precisa usar a palavra-chave new, então nesse caso ele não é algo que faz parte das variáveis da minha classe, ele não é algo que faz parte das propriedades da minha classe, nesse caso eu só quero fazer um cálculo e ele retornar, na programação isso é chamado de FUNÇÕES HELPERS (OU FUNÇÕES ÚTEIS)
class heroi3 {
    static obterAnoNascimento(idade) {
        return 2020-idade
    }
}
const anoNascimento = heroi3.obterAnoNascimento(19)
console.log(
    `O ano de nascimento é ${anoNascimento}`
)

// São duas formas de declarar a função dentro da sua classe, mas elas têm objetivos muito específicos, então você pode escolher um ou outro pra usar, na dúvida, use sem o static, pois o static são pra valores que não se alteram, então ele cria dentro da função e ele morre logo após que a função foi criada 