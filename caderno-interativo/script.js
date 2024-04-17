// Selecionando todos os temas
const temas = document.getElementsByClassName("tema");

// Adicionando eventos de clique
for (let i = 0; i < temas.length; i++) {
    temas[i].addEventListener("click", (e) => {
        console.log(e);
        if(e.target.id !== "mayla") {
            temas[i].children[0].classList.toggle("invisivel");
        }
        console.log(i);
    })
}


// Selecionando o mouse
const quadradoEnter = document.getElementsByClassName("quadrado")[0]
quadradoEnter.addEventListener("mouseenter", () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    quadradoEnter.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})
quadradoEnter.addEventListener("mouseleave", () => {
    quadradoEnter.style.backgroundColor = '#426dff'
})

const campoMayla = document.getElementById("mayla")
campoMayla.addEventListener("keyup", () => {
    const valorCampo = campoMayla.value.toLowerCase()
    const tamanhoTexto = valorCampo.length

    console.log(valorCampo, tamanhoTexto);
    const produtos = document.getElementsByClassName('produto')

    console.log(produtos[0].textContent);

    for(let i = 0; i < produtos.length; i++) {
        const conteudoProduto = produtos[i].textContent
        .toLowerCase()
        .substring(0, tamanhoTexto)
        
        if(conteudoProduto != valorCampo){
            produtos[i].classList.add("invisivel")
            produtos[i].classList.remove("inline-block")
            console.log(produtos[i].textContent);
        } else if(conteudoProduto == valorCampo){
            produtos[i].classList.remove("invisivel")
            produtos[i].classList.add("inline-block")
        }

    }
})