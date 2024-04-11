// Selecionando todos os temas
const temas = document.getElementsByClassName("tema");

// Adicionando eventos de clique
for (let i = 0; i < temas.length; i++) {
    temas[i].addEventListener("click", () => {
        temas[i].children[0].classList.toggle("invisivel");
        console.log(i);
    })
}
