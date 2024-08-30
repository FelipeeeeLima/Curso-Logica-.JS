function primeiroeultimoDividopordois(numeros){
    const primeiro = numeros[0]/2
    const ultimo = numeros[numeros.length-1]/2

    return [ultimo, primeiro]
}
const numeros = [10, 20, 30, 40, 50]
const resultado = primeiroeultimoDividopordois
(numeros)
console.log(resultado)