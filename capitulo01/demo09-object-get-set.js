const pessoa = {
    _nome: '', 
    _idade: 20,
    get nome () {
        return this._nome
    },
    set nome(valor) {
        this._nome = valor.toUpperCase()
    },

    get podeDirigir() {
        return this._idade >= 18   },
    set idade(valor) {
        this._idade = valor
    }
}

pessoa.nome = 'maria do céu'
console.log(pessoa.nome)
pessoa.idade = 19
console.log(pessoa.podeDirigir)
console.log(pessoa.idade)

// linha 2 - quando criamos variáveis com underline no início significa que não é pra ser acessado por fora, vai ser privado, então não é pra ninguém acessar

// quando alguém tentar acessar a popriedade nome (sem o underline), na linha 4 eu tô referenciando o _nome
// então o nome específico não existe, o nome nesse caso é só algo que aponta para o _nome

// quando eu tentar passar um novo valor pra esse objeto, ru vou interceptar ele na linha 8 usando o modificador set,  eu vou pegar o valor que veio dessa função

// linha 8 - eu vou pegar o valor e vou passar pra essa variável _nome 

// método toUpperCase() da própria string do JS pra deixar tudo em caixa alta

// na linha 11 chamamos o set porque passamos o igual, então no igual  ele passa o "maria do céu",  que vai lá pra linha 7, que transforma o texto em caixa alta, e passa pro nome 

// no console.log na linha 12, nós chamamos a função da linha 3, que vai referenciar o _nome, que nesse caso têm "maria do céu" em caixa alta 

// proprieda podeDirigir nesse caso é chamada de propriedade calculada, porque ele vai pegar a idade que é um valor privado que têm ali e vai verificar se essa idade é maior do que 18, no momento da criação a idade tinha 20

// propriedade pode dirigir funciona apenas com o get, se tentar passar um novo valor pra ele, ele não vai fazer nada

// toda vez que você modificar um objeto e você tentar obter um resultado de outra variável, ele já vai calcular pra você no momento que você requisitar, isso é chamado de variável calculada