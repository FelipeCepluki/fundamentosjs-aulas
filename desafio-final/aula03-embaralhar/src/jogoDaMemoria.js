class JogoDaMemoria {
    // quando escolhermos instanciar essa classe usando new, nós vamos passar as dependências, ou seja, o que que essa classe precisa pra poder rodar
    // se mandar um obj = {tela: 1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pegar somente a propriedade tela 
    constructor({tela}) {
        this.tela = tela
        // caminho do arquivo, sempre relativo ao index.html!
        this.heroisIniciais = [
            {img: './arquivos/batman.png', name: 'batman'},
            {img: './arquivos/baimax.png', name: 'baimax'},
            {img: './arquivos/flash.png', name: 'flash'},
            {img: './arquivos/thor.png', name: 'thor'}
        ]
    }
    // para usar o this, não podemos usar o static!
    inicializar() {
        // vai pegar todas as funções da classe tela!
        // coloca todos os heróis na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        // força a tela a usar o THIS do Jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }
    embaralhar() {
        const copias = this.heroisIniciais
        // duplicar os itens
        .concat(this.heroisIniciais)
        // entrar em cada item e criar um id aleatório
        .map(item => {
            return Object.assign({}, item, {id: Math.random() / 0.5})
        })
        // ordenar aleatoriamente 
        .sort(() => Math.random() - 0.5)
        this.tela.atualizarImagens(copias)
    }

    jogar() {
        this.embaralhar()
    }
}