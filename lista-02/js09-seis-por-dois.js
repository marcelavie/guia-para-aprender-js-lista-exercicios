/**
 * Nosso amigo Erick trabalha em uma jornada de seis por dois, ou seja,
 * ele trabalha 6 dias e folga 2 dias.
 * Problema: Ele nunca sabe se um dia específico no futuro ele vai estar
 * trabalhando ou de folga. Difícil fazer planos.
 * Exemplo, como saber no dia 12 de Outubro ele vai estar trabalhando ou de folga?
 * Como fazer um programa que liste os próximos 3 meses com dias de trabalho/folga?
 * 
 */

// Entrada
// Pŕoxima volta

// Saída com base na próxima folga, calcular dia de trabalho/folga
// date =  new Date()
// i = 1

// while (i < 90) {
    // trabalho = new Date(date.setDate(date.getDate()+6))
    // console.log(trabalho)
//     folga = new Date(date.setDate(date.getDate()+1))
//     console.log(folga.toDateString())
//     folga = new Date(date.setDate(date.getDate()+1))
//     console.log(folga.toDateString()+1)
//     i = i+8
// }

var diaAtual = new Date();


for (m = 0; m < 12; m++) {
    console.log("\nDias Úteis:");

    for (i = 0; i < 6; i++) {
        diaAtual.setDate(diaAtual.getDate() + 1);
    console.log(diaAtual.toLocaleDateString());

    }
  

  console.log("\nDias de Folga:");


    for (i = 0; i < 2; i++) {
        diaAtual.setDate(diaAtual.getDate() + 1);
        console.log(diaAtual.toLocaleDateString());
        
    }
}  






