"use strict";
// window.alert(multiplicacao(2,3))
// SAÍDA
// console.log('Hello World');

// SAÍDA - WINDOW
// window.alert('Hello World');
// window.confirm("Clique ok se você precisa de ajuda");

// Entrada
// window.prompt('Digite seu nome')

// Variavel
let muda = 2;
const naoMuda = 3.14;
// window.alert(naoMuda)
// console.log(naoMuda)
// muda = 4.2
// naoMuda = 4.5
// window.alert(naoMuda)

// OPERAÇÕES
let soma = 1 + 1;
let subtracao = 1 - 1;
let mult = 2 * 2;
let div = 10 / 2;
let potencia = 2 ** 3;

// arredontamento
/* 
let quebrado = Math.floor(3.14)
quebrado = Math.round(3.14)
quebrado = Math.ceil(3.14)
window.alert(quebrado)
*/

// aleatorio
/*
const aleatorio = Math.random()*100
window.alert(Math.ceil(aleatorio))
*/

// arrendondamento 3,5
// window.alert(Math.round(1.))

// input nome
/*
let nome = window.prompt("Digite seu nome")
window.alert("SEU NOME É " + nome + "KKKKKKKKKKKKKKKKKKKKKKK")
*/

// Menu de produto
// let carteira = 1000;
// window.alert(`Sua carteira tem R$${carteira}`)
// const escolha = window.prompt(`
// [1] - Pizza de Banana   - R$ 39,90
// [2] - Caipirinha        - R$ 12,50
// [3] - Mini Dev de Bolso - R$1330,20
// [4] - Espada de madeira - R$42,70
// `)

//If-Else
// let lista = [];
// let produto;
// let preco;
// if (escolha == 1) {
//     produto = "Pizza de Banana"
//     preco = 39.90
//     lista.push([produto, preco])
//     carteira - preco
//     window.alert(carteira)
// }
// window.alert(`
// Produto: ${produto}
// Preço: ${preco.toFixed(1)}
// `)

// operador ternario
// const meta = window.prompt("Meta:")
// const legal = window.prompt("Você é legal?")
// const comida = meta >= 10000 || legal == True ? 'Pizza 🍕' : 'Twix Mordido 🍫'
// window.alert(comida)

// funcao - sintaxe
// const funcaoMult = function multiplicacao(a,b){
//     return a * b
// }
// window.alert(funcaoMult(2,3))

// lista
// const lista = ['oi', 42069, "Batiman", ["Batiman", "Robinho"], true]
// // console.log(lista)
// // console.log(lista.flat)
// lista.push("BatiEmMulher")
// console.log(lista)

// Sistema bancário
const cc = [];

const cliente1 = {
  id: "1",
  nome: "Pedro",
  money: 500,
  limite: 10200,
  stts: true,
};
cc.push(cliente1);

const cliente2 = {
  id: "2",
  nome: "Heitor",
  money: 20500,
  limite: 1000000,
  stts: true,
};
cc.push(cliente2);

//func p/ envio de dinheiro
function envDinheiro(vlr, idOrigem, idDestino) {
  // verif de stts
  if (cc[idOrigem - 1]["stts"] && cc[idDestino - 1]["stts"]) {
    // verif limite e money
    if (cc[idOrigem - 1]["money"] >= vlr && cc[idOrigem - 1]["limite"] >= vlr) {
      // diminuido dinheiro - Origem
      cc[idOrigem - 1]["money"] -= vlr;
      if (idOrigem - 1 == 0) {
        saldoConta1.textContent = cc[idOrigem - 1]["money"];
      } else {
        saldoConta2.textContent = cc[idOrigem - 1]["money"];
      }
      // recebendo dinheiro - Destino
      cc[idDestino - 1]["money"] += vlr;
      if (idDestino - 1 == 0) {
        saldoConta1.textContent = cc[idDestino - 1]["money"];
      } else {
        saldoConta2.textContent = cc[idDestino - 1]["money"];
      }
    }
  }
}

// menu de opcoes
const opc = window.prompt(`
[1] - Envio de dinheiro
`);
if (opc == 1) {
  const vlr = Number(window.prompt("Informe o dinheiro p/ ser entregue"));
  const idOrigem = window.prompt("Informe o id de origem");
  const idDestino = window.prompt("Informe o id de destino");
  envDinheiro(vlr, idOrigem, idDestino);
  console.log(cc);
}

// ----------- NOMES
// Nome conta1
const nomeConta1 = document.getElementById("nome1");
// console.log(nomeConta1.textContent);
// console.log(nomeConta1.innerText);
nomeConta1.textContent = cliente1.nome;

// alterando nome1
nomeConta1.textContent = cliente1.nome;

// Nome conta2
const nomeConta2 = document.getElementById("nome2");
nomeConta2.textContent = cliente2.nome;

// alterando nome2
nomeConta2.textContent = cliente2.nome;

// ----------- IDS
// id conta1
const idConta1 = document.getElementById("id1");

// alterando id conta1
idConta1.textContent = cliente1.id;

// id conta2
const idConta2 = document.getElementById("id2");

// alterando id
idConta2.textContent = cliente2.id;

//------------- SALDO
// Saldo conta1
const saldoConta1 = document.getElementById("saldo1");

// Alterando Conta1
saldoConta1.textContent = cliente1.money;

// Saldo conta2
const saldoConta2 = document.getElementById("saldo2");

// Alterando Conta2
saldoConta2.textContent = cliente2.money;

//------------- Limite
// Saldo conta1
const limite1 = document.getElementById("limite1");

// Alterando Conta1
limite1.textContent = limite1.limite;

// Saldo conta2
const limite2 = document.getElementById("limite2");

// Alterando Conta2
limite2.textContent = cliente2.limite;

// ------------------

// Procurando por classe
const nomes = document.getElementsByClassName("nome");
console.log(nomes);

// -------------------
