// ## Exercício 02 
// - Crie uma classe "Pessoa" com as propriedades nome, idade e gênero. Em seguida, 
// crie uma classe "Funcionario" que herde de "Pessoa" e adicione a propriedade cargo. 
// Adicione também um método "apresentar" que retorna uma saudação com o nome e idade da pessoa.

class Pessoa {
    nome; idade; genero
}
class Funcionario extends Pessoa {
    cargo
    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`
    }
}
var ze = new Funcionario
ze.nome = 'Zé'
ze.idade = 39
ze.genero = 'Masculino'
ze.cargo = 'Analista'

console.log(ze.apresentar())