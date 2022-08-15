/**
 * Faça um programa que percorra uma lista e gere um outra lista com o
 * mesmo numero de elementos no formato: 'impar' ou 'par' 
 * 
 * ENTRADA          SAÍDA
 * [1,3,5,7,8]      ['impar', 'impar', 'impar', 'impar', 'par']
 */

// Entrada
var entrada = [1,3,5,7,8]

var saida = []

// gerar a lista de saida
for (i of entrada) {
    if (i%2==0){
        saida.push('par');
    }
    else if ((i%2)!=0) {
        saida.push('ímpar')}
}
console.log(saida)
