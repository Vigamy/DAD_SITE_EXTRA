const carrosGeral = document.getElementsByClassName("card-veiculo")

const textoCampo = document.getElementById("busca")
const botaoBusca = document.getElementById("botao-busca")

botaoBusca.addEventListener("click", buscaTexto)

function buscaTexto() {
    const texto = textoCampo.value.toLowerCase().trim();
    for(let i = 0; i < carrosGeral.length; i++){
        if(!carrosGeral[i].textContent.toLocaleLowerCase().includes(texto)){
            console.log(carrosGeral[i].textContent)
            carrosGeral[i].classList.add("invisivel")
        } else {
            carrosGeral[i].classList.remove("invisivel")
        }
    }
}

// console.log(carrosGeral[0].textContent.toLocaleLowerCase());
