// Definindo variáveis
const valorIngressos = document.getElementById("valor-ingressos");
const valorPipoca = document.getElementById("valor-pipocas");
const valorRefri = document.getElementById("valor-refris");
const valorTotal = document.getElementById("valor-total");
const qtdIngressos = document.getElementById("n-ingressos");
const qtdPipoca = document.getElementById("n-pipocas");
const qtdRefri = document.getElementById("n-refris");
const qtdTotal = document.getElementById("n-total");
console.log(valorIngressos.textContent, valorPipoca, valorRefri);

// Restaurando as informações
const numPipoca = parseInt(JSON.parse(localStorage.getItem("numPipoca")));
const numRefri = parseInt(JSON.parse(localStorage.getItem("numRefri")));
const qtdAssentos = parseInt(JSON.parse(localStorage.getItem("qtdAssentos")));
console.log(qtdAssentos, numPipoca, numRefri);

// Colocando os valores na tela
qtdIngressos.textContent = qtdAssentos;
qtdPipoca.textContent = numPipoca;
qtdRefri.textContent = numRefri;
qtdTotal.textContent = qtdAssentos + numPipoca + numRefri;

valorIngressos.textContent = "R$ " + (qtdAssentos * 35).toFixed(2);

valorPipoca.textContent = "R$ " + (numPipoca * 15).toFixed(2);

valorRefri.textContent = "R$ " + (numRefri * 12).toFixed(2);

valorTotal.textContent =
  "R$ " + (qtdAssentos * 35 + numPipoca * 15 + numRefri * 12).toFixed(2);
