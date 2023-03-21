// 2 - Crie um algoritmo que receba um número e imprima todos os números ímpares de 0 até o número inserido.

var numero = 15;
for (var i = 0; i <= numero; i++) {
    if (i % 2 != 0) {
        console.log("O número é: " + i);
    }
}