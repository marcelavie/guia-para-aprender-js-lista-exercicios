/**
 * Faça um programa que mostre o segundo maior número da lista 
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10,3]      8
 * [1,1,40]              1
 * [40,42,1,0,-10]      40
 * 
 * IMPORTANTE:
 * Não usar sort
 * Não usar funções built-ins da linguagem
 */

// Entrada
var entrada = [40,42,1,0,-10]
var segundoMaior = 40

maior = 0
for (i of entrada) {
    if (i > maior) {
        maior = i
    }
}

segundo = 0
for (s of entrada) {
    if (s < maior && s > segundo)
    segundo = s
}

console.log(`O maior número é ${maior}`)
console.log(`O segundo maior número é ${segundo}`)



