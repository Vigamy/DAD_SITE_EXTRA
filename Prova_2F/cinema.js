const assentos = [];
const listaTd = document.getElementsByTagName("td");

console.log(listaTd[1].children);
let total = 0;
setTimeout(() => {
  menu();
}, 500);
// funcao menu
function menu() {
  const escolha = window.prompt(`
    Bem vindo ao 🍿CineTech🍿. Escolha uma das opções abaixo:
    [1] - Comprar ingresso - R$ 35,00;
    [2] - Comprar refrigerante - R$ 12,00;
    [3] - Comprar pipoca - R$ 15,00;
    [4] - Finalizar compra;
    `);

  if (escolha == 1) {
    assento();
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 2) {
    refri();
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 3) {
    pipoca();
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 4) {
    finalizar();
    setTimeout(() => {
      menu();
    }, 500);
  }
}
// Assento
function assento() {
  // Pedindo o assento
  const letra = window.prompt("Letra da fileira:");
  const num = window.prompt("Número do assento:");
  const idAssento = letra + num;
  console.log(idAssento);
  // Validação


  // Adicionando o assento
  for (let i = 0; i < listaTd.length; i++) {
    if (listaTd[i].textContent == idAssento) {
      const del = document.createElement("del");
      del.textContent = idAssento;
      const td = document.createElement("td");

      // Removendo e adicionando de volta riscado
      listaTd[i].remove();
      listaTd[i](td);
    }
  }

  // Continuar
  const continuar = window.confirm("Deseja continuar?");
  if (continuar) {
    assento();
  }
}

// Refri
function refri() {
  refri = window.prompt("Quantos refri deseja?:");
  if (refri > 10 || refri < 0) {
    refri();
    window.alert("Por favor, insira novamente!");
  }
  total += refri * 12;
}

// Assento
function pipoca() {
  pipoca = window.prompt("Quantas pipocas deseja?:");
  if (pipoca > 15 || pipoca < 0) {
    pipoca();
    window.alert("Por favor, insira novamente!");
  }
  total += pipoca * 15;
}

// Assento
function finalizar() {
  //Apresentando o total
  confirmation = window.confirm("O total da compra foi: R$" + total);
  if (!confirmation) {
    menu();
  }
  formaPagto = window.prompt(`Forma de pagamento:
  PIX
  Crédito
  Débito
  `);
  //Colocar no html
  

  //Armazenando dados
  const assentos = localStorage.setItem("Concluidas", JSON.stringify(assentos));

}
