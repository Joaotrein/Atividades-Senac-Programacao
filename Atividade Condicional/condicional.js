// function recebe () {
//     num1 = Number(prompt("Diga um número:"))
//     num2 = Number(prompt("Diga um segundo número:"))

//    if(num1 === num2){
//         console.log("Sucesso, são iguais")
//    } else{
//         console.log("São diferentes")
//    }
// }

// recebe()

// function recebe () {
//     num1 = Number(prompt("Diga um número:"))
//     num2 = Number(prompt("Diga um segundo número:"))

//    if(num1 > num2 ){
//         console.log("O num1 é maior")
//    }
//     else if (num1 < num2){
//         console.log("O segundo é maior")
//     }
//    else (num1 === num2); {
//         console.log("São Iguais")
//    }
// }

// recebe()

// const humor = prompt("Como vc se sente hoje em uma palavra?")

// switch (humor){
//     case "feliz" :
//         console.log("Parabens, que bom que esta feliz")
//         break;

//     case "triste" :
//         console.log("Fique feliz ai amigão, a vida é dura mas vc merece mais que isso!")
//         break;
//     case "medo" :
//         console.log("Não fique com medo, eu estou aqui")
//         break;
//     case "nojo" :
//         console.log("Eu te entendo")
//         break;
//     case "raiva" :
//         console.log("Tente tomar um chá, tente respirar de vagar!")
//         break;
// }


// function selecaoPessoa (ensinomedio, idade, faculdade) {
//     if(ensinomedio === true && idade >= 18 && faculdade === false){
//         console.log("Você pode cursar a faculdade")
//     }else{
//         console.log("Não pode cursar a faculdade")
//     }
// }

// selecaoPessoa(true, 20, false)
// selecaoPessoa(true, 15, true)

// ---------------------------------------------------------------------------


// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// const idadeUsuario = Number(prompt("Qual a sua idade?"))
//     if(idadeUsuario >= 18){
//         console.log("Pode dirigir")
//     } else{
//         console.log("Não pode dirigir ainda")
//     }

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// const periodo = prompt("Qual o sue turno? Digite M para matutino, V para Vespertino e N para noturno")
//     if(periodo === "M"){ 
//         console.log("Bom dia consagrado")
//     } else if(periodo === "V"){
//         console.log("Boa Tarde consagrado")
//     } else if(periodo ==="N"){
//         console.log("Boa Noite consagrado")
//     }
    
// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// const periodo = prompt("Qual o sue turno? Digite M para matutino, V para Vespertino e N para noturno")
//     switch (periodo){
//         case "M": 
//         console.log("Bom dia consagrado")
//         break;

//         case "V": 
//         console.log("Boa Tarde consagrado")
//         break;

//         case "N": 
//         console.log("Boa Noite consagrado")
//         break;
//     }

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso estiver abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// const filme = prompt("Qual o gênero do filme?")
// const preco = Number(prompt("Qual o valor do ingresso?"))

//     if(filme === "fantasia" && preco < 15){ 
//         console.log("Bom Filme")
//     } else{
//         console.log("Escolha outro filme")
//     }

// 5. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

// const filme = prompt("Qual o gênero do filme?")
// const preco = Number(prompt("Qual o valor do ingresso?"))

//     if(filme === "fantasia" && preco < 15){ 
//         const comida = prompt("Qual seu lanche?")
//         console.log(`Bom Filme, aproveite seu ${comida}`)
//     } else{
//         console.log("Escolha outro filme")
// }

