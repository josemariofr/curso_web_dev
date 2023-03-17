// ## Exercício 03 
// - Crie uma classe "Produto" com as propriedades nome, preço e código de barras. 
// Em seguida, crie uma classe "ProdutoPerecivel" que herde de "Produto" e adicione a 
// propriedade data de validade. Adicione também um método "estaVencido" que retorna 
// verdadeiro se o produto estiver vencido e falso caso contrário.

class Produto {
    nome; preco; codigo
}
class ProdutoPerecivel extends Produto {
    anoDeValidade
    estaVencido(anoAtual) {
        if (this.anoDeValidade < anoAtual) {
            return ('Vencido')
        }
    }
}
var  queijo = new ProdutoPerecivel
queijo.anoDeValidade = 2020
console.log(queijo.estaVencido(2023))