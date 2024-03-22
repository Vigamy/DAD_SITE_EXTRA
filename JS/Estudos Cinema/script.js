const celulas = document.getElementsByTagName("td");
let numPipoca = 0;
let numRefrigerante = 0;

const valorIngressos = document.getElementById("valor-ingressos");
const valorPipoca = document.getElementById("valor-pipocas");
const valorRefri = document.getElementById("valor-refris");
const valorTotal = document.getElementById("valor-total");
const qtdIngressos = document.getElementById("n-ingressos");
const qtdPipoca = document.getElementById("n-pipocas");
const qtdRefri = document.getElementById("n-refris");
const qtdTotal = document.getElementById("n-total");

const assentos = [];

// econcontrando indisponíveis
const indisponivel = [];

// encontrando ocupados
const ocupados = [];

// encontrando vazios
const vazios = [];

// colocando os elementos em seus devidos lugares
for (let i = 0; i < 120; i++) {
  // caso não esteja disponível
  if (celulas[i].textContent == "") {
    celulas[i].classList.add("indisponivel");
    indisponivel.push(celulas[i]);
  }
  // caso esteja ocupado
  else if (celulas[i].innerHTML.includes("<s>")) {
    celulas[i].innerHTML = celulas[i].textContent;
    celulas[i].classList.add("ocupados");
  }
  // caso esteja vazio
  else {
    celulas[i].classList.add("vazios");
    celulas[i].addEventListener("click", () => {
      celulas[i].classList.toggle("selecionados");
      celulas[i].classList.toggle("vazios");
      if (celulas[i].classList.contains("selecionados")) {
        assentos.push(celulas[i].textContent);
      } else {
        assentos.pop();
      }
      resumoCompra();
    });
  }
}

//Definindo variavel
const addPipoca = document.getElementById("adcPipoca");
const addRefri = document.getElementById("adcRefri");
const rmvPipoca = document.getElementById("rmvPipoca");
const rmvRefri = document.getElementById("rmvRefri");
const qtdAssentos = document.getElementById("assentos");
//Adicionando eventos
addPipoca.addEventListener("click", () => {
  numPipoca++;
  resumoCompra();
});
addRefri.addEventListener("click", () => {
  numRefrigerante++;
  resumoCompra();
});
rmvPipoca.addEventListener("click", () => {
  if (numPipoca > 0) {
    numPipoca--;
  }
  resumoCompra();
});
rmvRefri.addEventListener("click", () => {
  if (numRefrigerante > 0) {
    numRefrigerante--;
  }
  resumoCompra();
});

function resumoCompra() {
  valorIngressos.textContent = "R$ " + (assentos.length * 35).toFixed(2);

  valorPipoca.textContent = "R$ " + (numPipoca * 15).toFixed(2);

  valorRefri.textContent = "R$ " + (numRefrigerante * 12).toFixed(2);

  valorTotal.textContent =
    "R$ " +
    (assentos.length * 35 + numPipoca * 15 + numRefrigerante * 12).toFixed(2);

  qtdIngressos.textContent = assentos.length;
  qtdPipoca.textContent = numPipoca;
  qtdRefri.textContent = numRefrigerante;
  qtdTotal.textContent = assentos.length + numPipoca + numRefrigerante;

  qtdAssentos.textContent = assentos;
}
