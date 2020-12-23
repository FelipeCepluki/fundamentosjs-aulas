class Test {
    hello() {
        console.log('Olá')
    }
}

new Test().hello()

new Test()['hello']()