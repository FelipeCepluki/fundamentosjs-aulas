class Matematica {
    static somar(valor1, valor2) {
        return valor1 + valor2
    }

    static multiplicar(valor1, valor2) {
        return valor1 * valor2
    }
}
// static porque eu não preciso usar o this, não preciso usar métodos no meu contexto

// deixar o arquivo publico
// dessa forma nosso arquivo fica público, então qualquer pessoa que tentar usar esse arquivo, ele vai conseguir usando uma palavra-chave do nodejs
module.exports = Matematica
