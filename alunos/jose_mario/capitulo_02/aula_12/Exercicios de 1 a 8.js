// 1. Crie uma lista com 5 ítens
var lista = ["Jose", "Naiara", "Gabriel"];
console.log(lista);

// 2. Atribua novos valores a lista
lista[0] = "Jose Mario";
lista[1] = "Naiara Toledo";

// 3. Imprima a lista no console
console.log(lista);

// 4. Imprima a quantidade de ítens da lista
console.log(lista.length);

// 5. Imprima o índex do ítem de índice 3 da sua lista utilizando o valor atribuído a ele
console.log(lista.indexOf("Naiara Toledo"));

// 6. Crie uma nova lista e adicione a lista anterior como um ítem dela
var novaLista = [];
novaLista.push(lista);

// 7. Imprima a primeira lista através da segunda lista
console.log(novaLista[0]);

