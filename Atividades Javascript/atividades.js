//-------Atividade Array
// 1. Faça um programa, seguindo os passos:
    
//a) Crie um array vazio e guarde-o em uma variável, chamada `tarefas`
    
// const tarefas = [];

// //b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

// let pergunta = prompt("Me diga 1 tarefas que ele precise realizar no dia");
// tarefas.push(pergunta);
// let pergunta2 = prompt("Me diga mais 1 tarefas que ele precise realizar no dia");
// tarefas.push(pergunta2);
// let pergunta3 = prompt("Me diga outra tarefas que ele precise realizar no dia");
// tarefas.push(pergunta3);

// c) Imprima o array no console

// console.log(tarefas);
    
// //d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
// let perguntaLista = Number(prompt("Agora escolha uma das tarefas que você colocou, entre 0, 1 ou 2"));

// console.log(tarefas[perguntaLista]);

// //e) Remova da lista o item de índice que o usuário escolheu.

// tarefas.splice(perguntaLista, 1);
    
//f) Imprima o array no console

// console.log(tarefas);

// -------Atividade-----

// A) Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome, a idade, endereço e uma profissão. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem.

// function informacao(nome, idade, endereco, profissao){
//   return(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`);
//   };
// console.log(informacao("joao", 17, "SL", "médico"));

// Exemplo: Eu sou (nome), tenho (idade) anos, moro em (endereço) e sou (profissão).

// B) Escreva uma função que receba 2 números como parâmentros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// function somar(a, b) {
//    return a + b;
// }
// console.log(somar(5, 10));

// C) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// function maiorIgual(num1, num2) {
//   if (num1 >= num2) {
//     console.log("O 1 é maior ou igual");
//   } else {
//     console.log("O 2 é maior");
//   }
// };
// console.log(maiorIgual(10, 5));

// D) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// function numeroPar(x){
//   return x % 2 === 0;
// };
// console.log(numeroPar(10));

// E) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

// function frase(mensagem) {
//   console.log(mensagem.length)
//   console.log(mensagem.toUpperCase())
// };
// console.log(frase("Arroz"));

//Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.b

// function soma(a, b) {
//   return a + b;
// }

// function subtracao(a, b) {
//   return a - b;
// }

// function multiplicacao(a, b) {
//   return a * b;
// }

// function divisao(a, b) {
//   if (b === 0) {
//     return "Divisão por zero!";
//   } else {
//     return a / b;
//   }
// }

// const num1 = Number(prompt("Digite o primeiro número:"));
// const num2 = Number(prompt("Digite o segundo número:"));

// console.log(`Soma: ${soma(num1, num2)}`);
// console.log(`Subtração: ${subtracao(num1, num2)}`);
// console.log(`Multiplicação: ${multiplicacao(num1, num2)}`);
// console.log(`Divisão: ${divisao(num1, num2)}`);