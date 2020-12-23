console.log('keys', Object.keys({nome: 'Felipe'}))
console.log('values', Object.values({nome: 'Felipe'}))
console.log('now', Date.now()) // quantos ms se passaram de hoje até 1970 quando o Linux foi lançado
console.log('random', Math.random()) // operações matemáticas e funções calculadas

// global 
console.log('global', global) 
// essa variável é no nodejs, no js que roda na sua máquina ou no servidor, no browser pode ser que ele se chame this ou global this
// se você viu alguma função que tá sendo criada, tá sendo usada e não ficou vermelho por algum motivo, ou você realmente não sabe da onde tá vindo, provavelmente você está usando um valor que ele é global no javascript
