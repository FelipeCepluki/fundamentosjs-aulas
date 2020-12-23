//**   primeira coisa, vamos importar o módulo firesistems, que é o módulo do nodejs pra poder ler arquivos ou trabalhar com coisas do sistema operacional
const fs = require('fs');
// fs.readFile pra poder ler o arquivo
//fs.readFile('./arq1.txt', (error, resposta) => {
  //  if(error) {
    //    console.log('Deu ruim***', error.stack)
 //       return;
   // } // nesse ponto ele vai no sistema operacional, ele tenta verificar se esse arquivo exite, se esse arquivo existir ele vai continuar, se esse arquivo não existir ou se o nome estiver incorreto ele vai cair no erro e não passa mais pra fora

    // por padrão um buffer no JS, é um arquivo grande, um arquivo binário que você pode cortar ele em pedaços pra poder processar tudo isso sob demanda, ele não necessariamente é um texto nesse momento, ele só vai ser um texto quando você converter de fato pra texto
 //   console.log('resposta', resposta.toString()) // toString pra converter ele pra texto 
    
//})

fs.readFile('./arq1.txt', (errorArq1, respostaArq1) => {
    if(errorArq1) {
        console.error('Deu ruim aqui no arq1', errorArq1)
        return; // return pra parar a execução
    }
    // se não deu erro, significa que eu posso chamar outro arquivo
    fs.readFile('./arq2.txt', (errorArq2, respostaArq2) => {
        if(errorArq2) {
            console.error('Deu ruim aqui no arq2', errorArq2)
            return; // return pra parar a execução
        }
        fs.readFile('./arq3.txt', (errorArq3, respostaArq3) => {
            if(errorArq3) {
                console.error('Deu ruim aqui no arq3', errorArq3)
                return; // return pra parar a execução
            }
            // manha = quando usamos crase ele automáticamente converte esse texto aí pra toSTring, então vamos usar o \n, então pra cada arquivo que tiver eu vou quebrar uma linha
            const conteudo = `${respostaArq1}\n${respostaArq2}\n${respostaArq3}`
            fs.writeFile('./final.txt', conteudo, (errorWrite, respostaWrite) => {
                // nesse momento ele vai no sistema operacional e tenta criar um novo arquivo, se ele conseguiu criar ele não vai retornar nada dentro do errorWrite, mas se tiver algum erro já vai pro if abaixo
                if(errorWrite) {
                    console.error('Deu ruim aqui na gravacao', errorWrite)
                    return;
                }
                console.log('Arquivo salvo com sucesso!!')
            })
        })
    })
})

// ficou meio feio né, um callback dentro do outro, e a gente teve que renomear como 1, 2, 3, e isso gera uma confusão na nossa cabeça, então o mais recomendado é você não usar callbacks mais nas suas aulas ou projetos pessoais, nós vamos ver uma abordagem mais fácil de trabalhar com isso, mais simples, e muito mais elegante pra poder ver, porque que você tá aprendendo se você não vai usar ? 
// Porque provavelmenteno no dia a dia você lide com códigos mais antigos e você tenha que se deparar com callbacks, então se vocêse deparar com callbacks você tá preparadíssimo pra continuar o seu processo e programar sem nenhum problema 