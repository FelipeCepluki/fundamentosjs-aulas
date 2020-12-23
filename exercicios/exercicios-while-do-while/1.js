let termoParada = true
let contador = 0
while (termoParada) {
    console.log(contador)
    if(contador++ <3)
    continue
    else
    termoParada = false
}