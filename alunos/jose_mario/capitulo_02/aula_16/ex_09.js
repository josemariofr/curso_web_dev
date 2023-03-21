// 9. Crie uma função em JavaScript chamada "adicionarElemento" que recebe dois parâmetros, 
// "array" e "elemento", e adiciona o elemento ao final do array.

// 9. Crie uma função em JavaScript chamada "adicionarElemento" que recebe dois parâmetros, 
// "array" e "elemento", e adiciona o elemento ao final do array.

function adicionarElemento(lista, elemento) {
    lista.push(elemento)
    return lista
}

lista = ['gabriel', 'naiara', 'zé']
console.log(lista)

// alterou a lista
adicionarElemento(lista, 'naiara')
console.log(lista)