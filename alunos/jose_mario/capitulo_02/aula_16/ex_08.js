// 8. Crie uma função em JavaScript chamada "calcularIMC" que recebe dois parâmetros numéricos, 
// "peso" e "altura", e retorna o índice de massa corporal (IMC) da pessoa.

function calcularIMC(peso, altura) {
    var imc = peso / Math.pow(1.76, 2) 
    if(imc < 18.5) {
        return 'peso abaixo do normal'
    } if(imc > 18.5 && imc < 24.9) {
        return 'você está dentro dentro do peso ideal'
    } if(imc > 25 && imc < 29.9) {
        return 'você está acima do seu peso ideal'  
    } return 'você está bitelo, pare de comer picanha'
}
console.log(calcularIMC(120))