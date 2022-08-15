/**
 * Faça um programa que gere apenas os números ímpares entre 1 e 150. 
 * 
 * ENTRADA              SAÍDA
 * [1,150]              [1,3,5,7,9,11...147,149]
 * 
 */

// Entrada
var range = [1, 150]

var impares = []

for (var i = 1; i < range[1]; i+=2) {
    impares.push(i)
}

console.log(impares)

// i += pula de 2 em 2