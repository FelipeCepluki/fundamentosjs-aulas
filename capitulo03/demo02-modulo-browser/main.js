// esse arquivo é responsável por chamar outros módulos, então ele é como se fosse o módulo pai que vai chamar os módulos filhos

// vou chamar o método window.onload, então o browser possui essa variável já criada, lá no nodejs nós tínhamos o process, settimeout, tínhamos várias variáveis globais, e aqui no browser nós temos a variável window, que é uma variável global, então nós temos também a função onload, então quando o browser for carregado ele vai chamar essa função
window.onload = () => {
    // depois que ele terminar de carregar todos os arquivos, eu vou soltar um console.log na tela
    console.log('tela carregou!!')
    // agora nós vamos pegar o clique do botão
    const btn = document.getElementById('btnCalcular')
    btn.onclick = click
    function ObterValorInput(id) {
        const item = document.getElementById(id)
        return item.value
    }
    function click() {
        const tipoOperacao = ObterValorInput('tipoOperacao')
        const valor1 = ObterValorInput('valor1')
        const valor2 = ObterValorInput('valor2')
        // agora vamos fazer a mesma coisa que fizemos no nodejs, vamos pegar o nome da operação pelo texto que o usuário escolher lá, e aí nós vamos chamar direto do módulo que nós conhecemos, só que aqui nós estamos dando as opções que o cliente pode escoler e ele vai clicar, ele não vai escrever mais como texto, e aí sim nós temos certeza que vai funcionar de acordo com o módulo, porque pelo valor nós selecionamos
        const resultado = Matematica[tipoOperacao] (
            // porque que aqui eu não preciso converter pro tipo Number ? Porque lá no HTML nós colocamos o tipo como number, então no próprio HTML ele já tá falando que só pode entrar o tipo valor, então nem me preocuo=po em converter pra um tipo de texto
            valor1, valor2 
        )
        console.log('resultado', resultado)
        document.getElementById('resultado')
        .innerText = `
        A operação de ${tipoOperacao}, ${valor1} por ${valor2} é ${resultado}` // innerText pra colocar um texto default lá, eu tô pegando esse elemento e passando um valor pra ele  
    }
} 

// a principal diferença de trabalhar no HTML é que você não usa o module.export, você usa diretamente no arquivo desde que você lembrou de importar lá no seu HTMl, então você importa todos os seus módulos primeiro, e só depois no main você chama todos eles